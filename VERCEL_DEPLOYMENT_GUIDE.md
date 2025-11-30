# 🚀 Deploy Frontend to Vercel

## Prerequisites
- GitHub account
- Vercel account (free) - sign up at https://vercel.com

## Option 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push Code to GitHub
```powershell
cd "c:\Users\Administrator\Desktop\aguilll\AguliaCrudBackend"

# Stage all changes
git add .

# Commit changes
git commit -m "Prepare frontend for Vercel deployment"

# Push to GitHub
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to **https://vercel.com**
2. Click **"Add New Project"**
3. **Import** your GitHub repository: `laaguila-art/AguliaCrudBackend`
4. **Configure the project:**
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. Click **"Deploy"**
6. Wait 1-2 minutes for deployment to complete
7. Your app will be live at: `https://your-project-name.vercel.app`

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```powershell
npm install -g vercel
```

### Step 2: Login to Vercel
```powershell
vercel login
```

### Step 3: Deploy
```powershell
cd "c:\Users\Administrator\Desktop\aguilll\AguliaCrudBackend\frontend"
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → (press Enter for default or type a name)
- **Directory?** → `./` (current directory)
- **Override settings?** → No

Wait for deployment to complete. You'll get a URL like:
`https://your-app.vercel.app`

### Step 4: Deploy to Production
```powershell
vercel --prod
```

## After Deployment

### Update Backend CORS (Already Done!)
The backend is already configured to accept requests from Vercel:
```typescript
origin: [
  'http://localhost:5173',
  'https://*.vercel.app',  ✅ Already added
  'https://*.netlify.app',
]
```

### Test Your Deployed App
1. Visit your Vercel URL
2. Register a new account
3. Login
4. Test CRUD operations

## Environment Variables (Optional)
If you need to add environment variables:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables like:
   - `VITE_API_URL` = `https://aguliacrudbackend.onrender.com`

## Custom Domain (Optional)
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Make sure `package.json` has correct dependencies

### CORS Errors After Deployment
- Your backend is already configured for Vercel
- If issues persist, add your specific Vercel domain to CORS:
  ```typescript
  origin: [
    'https://your-actual-url.vercel.app'
  ]
  ```

### Can't Login After Deployment
- Check browser console for errors
- Verify API_URL in `frontend/src/services/api.js` is correct
- Check Network tab to see if requests reach the backend

## Quick Commands Reference

```powershell
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (preview)
cd frontend
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

## Next Steps After Successful Deployment

1. ✅ Share your Vercel URL
2. ✅ Test all features (Register, Login, CRUD)
3. ✅ Consider adding a custom domain
4. ✅ Set up automatic deployments (on every git push)

---

**Your backend is live at:** https://aguliacrudbackend.onrender.com
**Your frontend will be live at:** https://your-project.vercel.app

Good luck! 🎉
