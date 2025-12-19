# AWS Amplify Deployment - Step by Step Guide

Your code is now on GitHub: `https://github.com/Charbel-hm/mma-frontend.git`

## Step-by-Step Instructions:

### Step 1: Go to AWS Amplify Console
1. Open your browser and go to: https://console.aws.amazon.com/amplify/
2. Make sure you're in the correct AWS region (e.g., us-east-1, eu-north-1)

### Step 2: Create New App
1. Click the **"New app"** button (top right)
2. Select **"Host web app"**

### Step 3: Connect to GitHub
1. You'll see options for Git providers
2. Click **"GitHub"**
3. If this is your first time:
   - Click **"Authorize AWS Amplify"**
   - You'll be redirected to GitHub to authorize
   - Click **"Authorize aws-amplify-console"**
   - Grant access to your repositories
4. You'll be redirected back to AWS Amplify

### Step 4: Select Repository
1. In the repository list, find and select: **"Charbel-hm/mma-frontend"**
2. Select branch: **"main"**
3. Click **"Next"**

### Step 5: Configure Build Settings
Amplify should auto-detect React, but verify these settings:

**Build settings:**
```
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

**Or use the simple form:**
- **Build command**: `npm run build`
- **Output directory**: `build`
- **Base directory**: (leave empty)

Click **"Next"**

### Step 6: Review Settings
1. Review your app name (you can change it if needed)
2. Check that the build settings look correct
3. Click **"Save and deploy"**

### Step 7: Wait for Deployment
- Amplify will:
  1. Clone your repository
  2. Install dependencies (`npm install`)
  3. Build your app (`npm run build`)
  4. Deploy to a CDN
- This usually takes 3-5 minutes
- You'll see progress in real-time

### Step 8: Get Your App URL
- Once deployment completes, you'll see:
  - ✅ **Deployment successful**
  - Your app URL: `https://main.xxxxx.amplifyapp.com`
- Click the URL to view your deployed app!

## After Deployment:

### View Your App
- Click on your app in Amplify console
- Click the URL under "Domain" to open your live site

### Automatic Deployments
- Every time you push to GitHub `main` branch, Amplify will automatically rebuild and redeploy
- You can see deployment history in the Amplify console

### Custom Domain (Optional)
1. In Amplify console, go to your app
2. Click "Domain management" in the left menu
3. Click "Add domain"
4. Enter your domain name
5. Follow the DNS configuration instructions

## Troubleshooting:

### Build Fails?
- Check the build logs in Amplify console
- Common issues:
  - Missing dependencies (check package.json)
  - Build command errors
  - Environment variables needed

### CORS Errors?
- Make sure your backend (Elastic Beanstalk) allows requests from your Amplify domain
- Add your Amplify URL to CORS settings in backend

### Need to Rebuild?
- Go to Amplify console → Your app → "Redeploy this version"

## Your Repository:
🔗 https://github.com/Charbel-hm/mma-frontend

---

**That's it!** Your app will be live and automatically update on every GitHub push! 🚀
