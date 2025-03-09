# AWS Amplify Deployment Guide

This guide explains how to deploy your Merix application using AWS Amplify.

## Build Settings

Two configuration files have been created for your Amplify deployment:

1. `amplify.yml` - Used when deploying via the Amplify CLI or GitHub/GitLab integration
2. `build-settings.json` - Can be used when configuring builds through the AWS Amplify Console

## Deployment Options

### Option 1: Connect to Git Repository (Recommended)

1. Log in to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/home)
2. Choose "Connect app"
3. Select your Git provider (GitHub, GitLab, BitBucket, etc.)
4. Authorize AWS Amplify to access your repositories
5. Select the repository containing your Merix application
6. Select the branch you want to deploy
7. In the "Build settings" step, Amplify will automatically detect the `amplify.yml` file
8. Review and confirm the settings
9. Click "Save and deploy"

### Option 2: Manual Deployment

1. Log in to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/home)
2. Choose "Connect app"
3. Select "Deploy without Git provider"
4. Drag and drop your application files or upload a zip file
5. In the build settings, you can either:
   - Upload the `amplify.yml` file
   - Copy and paste the contents of `build-settings.json` into the "Build settings" editor
6. Click "Save and deploy"

## Environment Variables

You may need to configure environment variables for your application. In the Amplify Console:

1. Go to your app's settings
2. Select "Environment variables"
3. Add the necessary variables for your frontend and backend

For the backend, you'll likely need to add:
- Database connection strings
- API keys
- Other sensitive information

## Custom Domains

To set up a custom domain:

1. In the Amplify Console, go to your app
2. Select "Domain management"
3. Choose "Add domain"
4. Follow the steps to verify domain ownership and set up SSL

## Monitoring and Logs

After deployment, you can monitor your application:

1. View build logs in the "Build details" section
2. Check application logs in CloudWatch
3. Set up notifications for build successes/failures

## Troubleshooting

If you encounter build failures:

1. Check the build logs for specific errors
2. Verify that your build commands are correct
3. Ensure all dependencies are properly specified
4. Check that the artifact paths match your project structure

### Directory Structure Issues

The build configuration has been set up to handle different directory structures. It will:

1. Check for a `frontend-react` directory first (matching your local development structure)
2. Fall back to a `frontend` directory if `frontend-react` is not found
3. Display directory contents during the build to help with debugging

If you're still encountering directory-related errors:
- Check the build logs to see the actual directory structure in your deployment environment
- Ensure your repository includes all necessary directories
- Verify that the directory names match what's expected in the build configuration

### Poetry Installation Issues

The build configuration uses `poetry install --no-root` for the backend to avoid errors related to Poetry trying to install the current project as a package. If you modify your backend structure and encounter Poetry-related errors, you may need to:

1. Add a `packages` configuration to your `pyproject.toml` file:
   ```toml
   [tool.poetry]
   # ...other configurations...
   packages = [{include = "app"}]
   ```

2. Or set `package-mode = false` in your `pyproject.toml`:
   ```toml
   [tool.poetry]
   # ...other configurations...
   package-mode = false
   ```

For Next.js specific issues, ensure:
- You're using the correct output directory (`.next`)
- Server-side rendering is properly configured
