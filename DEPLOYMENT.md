# AWS Amplify Deployment Guide

## Option 1: Deploy Build Folder Directly (No GitHub Required)

### Steps:
1. **Go to AWS Amplify Console**
   - Navigate to https://console.aws.amazon.com/amplify/
   - Click "New app" → "Deploy without Git provider"

2. **Upload Build Folder**
   - Name your app (e.g., "mma-frontend")
   - Drag and drop the entire contents of the `build` folder
   - Click "Save and deploy"

3. **Done!**
   - Amplify will deploy your app and provide a URL

---

## Option 2: Deploy via GitHub (Recommended for Continuous Deployment)

### Prerequisites:
- GitHub account
- Git installed locally

### Steps:

#### Step 1: Initialize Git Repository
```bash
cd c:\Users\HP\Desktop\UNI\IN401\mma_class_management\mma-frontend
git init
git add .
git commit -m "Initial commit - MMA Frontend"
```

#### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., "mma-frontend")
3. **Don't** initialize with README (you already have files)

#### Step 3: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/mma-frontend.git
git branch -M main
git push -u origin main
```

#### Step 4: Connect to AWS Amplify
1. Go to https://console.aws.amazon.com/amplify/
2. Click "New app" → "Host web app"
3. Select "GitHub" and authorize AWS Amplify
4. Choose your repository and branch (main)
5. Configure build settings (Amplify auto-detects React apps)

#### Step 5: Configure Build Settings
Amplify should auto-detect, but verify these settings:
- **Build command**: `npm run build`
- **Output directory**: `build`
- **Base directory**: `/` (or leave empty)

#### Step 6: Environment Variables (if needed)
Add any environment variables in Amplify console if your app needs them.

#### Step 7: Deploy
- Click "Save and deploy"
- Amplify will build and deploy automatically
- Future pushes to GitHub will trigger automatic deployments!

---

## Important Notes:

### API Configuration
Your API URL is already configured in `src/config/api.js`:
```javascript
const API_URL = "http://mma-backend-env.eu-north-1.elasticbeanstalk.com/";
```

### CORS Issues
If you encounter CORS errors, make sure your backend allows requests from your Amplify domain.

### Custom Domain (Optional)
After deployment, you can add a custom domain in Amplify settings.

---

## Which Option Should You Choose?

- **Option 1 (Direct Upload)**: Use if you just want to deploy once quickly
- **Option 2 (GitHub)**: Use if you want automatic deployments on every code change
