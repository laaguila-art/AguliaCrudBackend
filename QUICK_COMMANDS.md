# 🎯 Quick Commands for Agulia CRUD

## 📂 You're now in: C:\Users\Administrator\Desktop\AguliaCrudBackend

Everything is organized in one folder!

## 🚀 Run Frontend (Development)

```powershell
cd frontend
npm run dev
```

Opens at: http://localhost:5173

## 🔧 Run Backend (Development)

```powershell
npm run start:dev
```

## 📦 Build Frontend for Production

```powershell
cd frontend
npm run build
```

## 🌐 Deploy Frontend to Vercel

### Using Vercel Dashboard:
1. Push to GitHub
2. Go to https://vercel.com
3. Import repository
4. Set **Root Directory**: `frontend`
5. Deploy!

### Using CLI:
```powershell
cd frontend
vercel
```

## 📁 Folder Structure

```
AguliaCrudBackend/
├── frontend/           ← React app (deploy this to Vercel)
│   ├── src/
│   ├── package.json
│   └── QUICKSTART.md
│
└── src/               ← NestJS backend (already on Render)
    ├── auth/
    ├── positions/
    └── main.ts
```

## 🎨 Test the App

1. **Start frontend:** `cd frontend && npm run dev`
2. **Open:** http://localhost:5173
3. **Register** a new user
4. **Login** and test CRUD operations
5. **Deploy** to Vercel when ready!

## 🔗 Backend API

Already live at: **https://aguliacrudbackend.onrender.com**

No need to run backend locally unless you want to modify it!

## ✅ Everything is in One Place Now!

- Frontend code: `./frontend`
- Backend code: `./src`
- Documentation: `FULLSTACK_README.md`
- Quick Guide: This file!

Happy coding! 🎉
