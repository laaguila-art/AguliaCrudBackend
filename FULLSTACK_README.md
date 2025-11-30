# 🚀 Agulia CRUD - Full Stack Application

Complete CRUD application with NestJS backend and React frontend.

## 📁 Project Structure

```
AguliaCrudBackend/
├── frontend/               # React Frontend Application
│   ├── src/
│   │   ├── components/     # React components (Login, Register, Positions)
│   │   ├── services/       # API integration (Axios)
│   │   └── App.jsx         # Main app with routing
│   ├── package.json
│   └── QUICKSTART.md       # Frontend deployment guide
│
├── src/                    # NestJS Backend
│   ├── auth/              # Authentication module
│   ├── positions/         # Positions CRUD module
│   ├── guards/            # Auth guards
│   └── main.ts            # Entry point
│
├── screenshot/            # API screenshots
└── package.json           # Backend dependencies
```

## 🎯 Features

### Backend (NestJS)
- ✅ User authentication (JWT)
- ✅ Protected routes
- ✅ Positions CRUD API
- ✅ PostgreSQL/MySQL database
- ✅ Deployed on Render: https://aguliacrudbackend.onrender.com

### Frontend (React)
- ✅ Login & Register pages
- ✅ Protected routes
- ✅ Positions management UI
- ✅ Beautiful gradient design
- ✅ Fully responsive
- ✅ Ready for Vercel deployment

## 🚀 Quick Start

### Backend (Already Deployed)
The backend is live at: **https://aguliacrudbackend.onrender.com**

To run locally:
```bash
npm install
npm run start:dev
```

### Frontend

1. **Navigate to frontend:**
```bash
cd frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open browser:**
```
http://localhost:5173
```

## 📦 Deploy Frontend to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push this repo to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your repository
5. Set **Root Directory** to: `frontend`
6. Click "Deploy"
7. Done! ✅

### Option 2: Vercel CLI

```bash
cd frontend
npm i -g vercel
vercel
```

## 🔌 API Endpoints

Base URL: `https://aguliacrudbackend.onrender.com`

### Authentication
- `POST /auth/signup` - Register new user
- `POST /auth/login` - Login user

### Positions (Protected)
- `GET /positions` - Get all positions
- `POST /positions` - Create position
- `PATCH /positions/:id` - Update position
- `DELETE /positions/:id` - Delete position

## 🧪 Test the Application

1. **Register:** Create a new account
2. **Login:** Sign in with credentials
3. **Create Position:** Add a new position (e.g., "DEV001" - "Senior Developer")
4. **Edit:** Update position details
5. **Delete:** Remove a position
6. **Logout:** Sign out

## 🛠️ Tech Stack

### Backend
- NestJS
- TypeORM
- PostgreSQL/MySQL
- JWT Authentication
- Deployed on Render

### Frontend
- React 19
- Vite
- React Router v6
- Axios
- CSS3
- Ready for Vercel

## 📝 Environment Variables

### Backend (.env)
```env
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

### Frontend (Optional)
Frontend is pre-configured to use the live backend. No env variables needed!

## 🎨 Screenshots

Check the `/screenshot` folder for API examples:
- login.png
- register.png
- post.png
- patch.png

## 📚 Documentation

- **Frontend Guide:** `frontend/QUICKSTART.md`
- **Frontend Summary:** `frontend/PROJECT_SUMMARY.md`
- **Backend README:** `README.md`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT

## 🎉 You're All Set!

Everything is organized in one place now. Deploy your frontend to Vercel and you're done! 🚀
