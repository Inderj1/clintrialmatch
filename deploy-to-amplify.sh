#!/bin/bash

# Colors for better readability
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== ClinTrialMatch AWS Amplify Deployment Script ===${NC}"
echo "This script will help you deploy your application to AWS Amplify."

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}AWS CLI is not installed. Please install it first:${NC}"
    echo "https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    echo -e "${YELLOW}After installing, run 'aws configure' to set up your credentials.${NC}"
    exit 1
fi

# Check if user is logged in to AWS
echo "Checking AWS credentials..."
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}You are not logged in to AWS or your credentials are invalid.${NC}"
    echo -e "${YELLOW}Please run 'aws configure' to set up your credentials.${NC}"
    exit 1
fi
echo -e "${GREEN}AWS credentials verified.${NC}"

# Check if amplify.yml exists
if [ ! -f "frontend/amplify.yml" ]; then
    echo -e "${RED}amplify.yml file not found in the frontend directory.${NC}"
    exit 1
fi
echo -e "${GREEN}amplify.yml file found.${NC}"

# Deployment options
echo ""
echo -e "${GREEN}=== Deployment Options ===${NC}"
echo "1. Deploy via Git repository (recommended)"
echo "2. Manual deployment (zip upload)"
echo "3. Exit"

read -p "Select an option (1-3): " option

case $option in
    1)
        echo -e "${GREEN}=== Git Repository Deployment ===${NC}"
        echo "Follow these steps in the AWS Amplify Console:"
        echo "1. Log in to the AWS Amplify Console: https://console.aws.amazon.com/amplify/home"
        echo "2. Click 'New app' > 'Host web app'"
        echo "3. Select your Git provider and authorize AWS Amplify"
        echo "4. Select the repository containing your ClinTrialMatch application"
        echo "5. Select the branch you want to deploy"
        echo "6. In the 'Build settings' step, Amplify will automatically detect the amplify.yml file"
        echo "7. Add any necessary environment variables"
        echo "8. Click 'Save and deploy'"
        ;;
    2)
        echo -e "${GREEN}=== Manual Deployment ===${NC}"
        echo "Preparing application for manual deployment..."
        
# Create a deployment package
echo "Creating deployment package..."

# Create a temporary directory for the deployment package
mkdir -p temp_deploy

# Check if we're in the project root or already in a subdirectory
if [ -d "frontend" ] && [ -d "backend" ]; then
    echo "Found both frontend and backend directories, copying both..."
    cp -r frontend temp_deploy/
    cp -r backend temp_deploy/
elif [ -d "frontend" ]; then
    echo "Found only frontend directory, copying it..."
    cp -r frontend temp_deploy/
elif [ -d "backend" ]; then
    echo "Found only backend directory, copying it..."
    cp -r backend temp_deploy/
else
    echo "No frontend or backend directories found, copying current directory contents..."
    # Copy all files except the temp directory itself
    find . -maxdepth 1 -not -path "./temp_deploy*" -not -path "." | xargs -I{} cp -r {} temp_deploy/
fi

# Copy the amplify.yml file to the root of the deployment package
if [ -f "frontend/amplify.yml" ]; then
    echo "Copying amplify.yml from frontend directory to root of deployment package..."
    cp frontend/amplify.yml temp_deploy/
elif [ -f "amplify.yml" ]; then
    echo "Copying amplify.yml from current directory to root of deployment package..."
    cp amplify.yml temp_deploy/
fi

# Create the zip file
zip_file="clintrialmatch_deploy_$(date +%Y%m%d_%H%M%S).zip"
(cd temp_deploy && zip -r "../$zip_file" .)

# Clean up
rm -rf temp_deploy
        
        echo -e "${GREEN}Deployment package created: $zip_file${NC}"
        echo ""
        echo "Follow these steps in the AWS Amplify Console:"
        echo "1. Log in to the AWS Amplify Console: https://console.aws.amazon.com/amplify/home"
        echo "2. Click 'New app' > 'Host web app'"
        echo "3. Select 'Deploy without Git provider'"
        echo "4. Upload the zip file: $zip_file"
        echo "5. Add any necessary environment variables"
        echo "6. Click 'Save and deploy'"
        ;;
    3)
        echo "Exiting..."
        exit 0
        ;;
    *)
        echo -e "${RED}Invalid option. Exiting.${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}=== Environment Variables ===${NC}"
echo "You may need to configure the following environment variables in the Amplify Console:"
echo "- NEXT_PUBLIC_API_URL: URL for your backend API"
echo "- Any other environment variables required by your application"

echo ""
echo -e "${GREEN}=== Post-Deployment Steps ===${NC}"
echo "After deployment is complete:"
echo "1. Set up a custom domain if needed (Domain management in Amplify Console)"
echo "2. Configure branch-specific settings if using multiple environments"
echo "3. Set up preview environments for pull requests if needed"

echo ""
echo -e "${GREEN}Deployment preparation complete!${NC}"
