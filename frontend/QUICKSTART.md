# 🚀 Quick Start Guide - Deploy to Vercel

## Step 1: Push to GitHub

1. Initialize git (if not already done):
```bash
cd C:\Users\Administrator\Desktop\agulia-crud-frontend
git init
git add .
git commit -m "Initial commit - Agulia CRUD Frontend"
```

2. Create a new repository on GitHub (https://github.com/new)

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy on Vercel

### Option A: Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. ✅ Done! Your app will be live in ~1 minute

### Option B: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login:
```bash
vercel login
```

3. Deploy:
```bash
cd C:\Users\Administrator\Desktop\agulia-crud-frontend
vercel
```

4. Follow the prompts (accept defaults)

## Step 3: Test Your App

After deployment, Vercel will give you a URL like:
`https://your-app-name.vercel.app`

Test the following:
1. ✅ Register a new user
2. ✅ Login with credentials
3. ✅ Create a new position
4. ✅ Edit a position
5. ✅ Delete a position
6. ✅ Logout

## Troubleshooting

### CORS Issues?
Make sure your backend at https://aguliacrudbackend.onrender.com has CORS enabled for your Vercel domain.

### Routes not working?
The `vercel.json` file should handle this, but if you get 404 errors on refresh, make sure the file exists in the root directory.

### Can't login?
Check the browser console (F12) for errors. Make sure the backend API is running.

## Environment Variables (Optional)

If you want to make the API URL configurable:

1. In Vercel Dashboard → Project → Settings → Environment Variables
2. Add: `VITE_API_URL` = `https://aguliacrudbackend.onrender.com`
3. Update `src/services/api.js` to use `import.meta.env.VITE_API_URL`
4. Redeploy

## Need Help?

- Vercel Docs: https://vercel.com/docs
- React Router: https://reactrouter.com
- Vite: https://vitejs.dev
