# ClinTrialMatch AWS Amplify Deployment Guide

This guide explains how to deploy the ClinTrialMatch application to AWS Amplify.

## Prerequisites

Before deploying, ensure you have:

1. An AWS account with appropriate permissions
2. AWS CLI installed and configured (if using the deployment script)
3. Git repository set up (if deploying via Git integration)

## Deployment Files

The following files have been prepared for AWS Amplify deployment:

1. `frontend/amplify.yml` - Build configuration for both frontend and backend
2. `frontend/build-settings.json` - Alternative build settings (used by Amplify Console)
3. `deploy-to-amplify.sh` - Helper script for deployment

## Deployment Options

### Option 1: Using the Deployment Script (Recommended)

The deployment script provides a guided process for deploying to AWS Amplify:

```bash
# Make the script executable (if not already)
chmod +x deploy-to-amplify.sh

# Run the script
./deploy-to-amplify.sh
```

The script will:
1. Check if AWS CLI is installed and configured
2. Verify the existence of the amplify.yml file
3. Provide options for deployment (Git repository or manual upload)
4. Guide you through the deployment process

### Option 2: Manual Deployment via AWS Console

1. Log in to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/home)
2. Choose "Connect app" > "Host web app"
3. Select your Git provider or choose "Deploy without Git provider"
4. Follow the prompts to configure your application

## Project Structure

The build configuration is flexible and can handle different repository structures:

### Option 1: Monorepo Structure (Default)

```
/
├── frontend/           # Next.js frontend application
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── public/         # Static assets
│   └── ...
└── backend/            # Python backend application
    ├── app/            # Backend application code
    └── ...
```

### Option 2: Frontend-Only Repository

```
/
├── app/                # Next.js app directory
├── components/         # React components
├── public/             # Static assets
└── ...
```

### Option 3: Backend-Only Repository

```
/
├── app/                # Backend application code
└── ...
```

The build script automatically detects the repository structure and adjusts the build process accordingly.

## Build Configuration

The `amplify.yml` file configures the build process for both frontend and backend:

### Frontend (Next.js)

- **Pre-build**: Installs dependencies using `npm ci`
- **Build**: Builds the Next.js application using `npm run build`
- **Artifacts**: Deploys the `.next` directory
- **Cache**: Caches node_modules and Next.js cache for faster builds

### Backend (Python/Poetry)

- **Build**: Installs Poetry and project dependencies
- **Artifacts**: Deploys the entire backend directory

## Environment Variables

You'll need to configure environment variables in the AWS Amplify Console:

1. In your Amplify app, go to "Environment variables"
2. Add the necessary variables for your application

Common variables include:

- `NEXT_PUBLIC_API_URL`: URL for your backend API
- Database connection strings
- API keys and secrets

## Custom Domain Setup

To set up a custom domain:

1. In the Amplify Console, go to your app
2. Select "Domain management"
3. Choose "Add domain"
4. Follow the steps to verify domain ownership and set up SSL

## Troubleshooting

If you encounter build failures:

1. Check the build logs in the Amplify Console
2. Verify that your build commands are correct
3. Ensure all dependencies are properly specified
4. Check that the artifact paths match your project structure

For Next.js specific issues:
- Ensure you're using the correct output directory (`.next`)
- Check that server-side rendering is properly configured

## Additional Resources

- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Poetry Documentation](https://python-poetry.org/docs/)
