# 🔧 Registration Error - Troubleshooting Guide

## Issue Seen
Registration is failing with "Registration failed. Please try again."

## Possible Causes & Solutions

### 1. Backend Server is Sleeping (Most Likely)
**Render free tier** puts inactive apps to sleep after 15 minutes.

**Solution:** 
- Go to https://aguliacrudbackend.onrender.com in your browser
- Wait 30-60 seconds for it to wake up
- Then try registering again

### 2. CORS Issue
The backend might not allow requests from localhost.

**To Check:**
Open browser console (F12) and look for CORS errors.

**Fix (Backend):**
Make sure your `main.ts` has:
\`\`\`typescript
app.enableCors({
  origin: '*', // or specify your frontend URL
  credentials: true,
});
\`\`\`

### 3. Username Already Exists
The username "admin1" might already be registered.

**Solution:**
Try a different username like "admin2", "testuser", etc.

### 4. Backend Not Running
The Render backend might be down.

**To Check:**
Visit: https://aguliacrudbackend.onrender.com

Should return: "Cannot GET /"  (this is normal)

**Test Specific Endpoint:**
Open: http://localhost:5173/test-api.html

Click "Test Signup" to see the actual error.

## Quick Fixes to Try

### Fix 1: Wake Up Backend
\`\`\`powershell
# Open backend URL in browser or use:
Start-Process "https://aguliacrudbackend.onrender.com"
\`\`\`

Wait 1 minute, then try registering again.

### Fix 2: Use Different Username
Try: admin2, admin3, testuser, etc.

### Fix 3: Check Browser Console
1. Open the app: http://localhost:5173
2. Press F12 to open DevTools
3. Go to Console tab
4. Try registering
5. Look for red error messages

### Fix 4: Test API Directly
1. Open: http://localhost:5173/test-api.html
2. Click "Test Signup"
3. See the actual error response

## Common Error Messages

### "Network Error"
- Backend is sleeping or down
- Solution: Wake it up, wait 1 minute

### "Username already exists"  
- That username is taken
- Solution: Use a different username

### "CORS error"
- Backend not allowing frontend requests
- Solution: Update backend CORS settings

### "Cannot connect to server"
- Backend URL is wrong or server is down
- Solution: Check backend URL in `src/services/api.js`

## Debug Steps

1. **Check if backend is alive:**
   - Visit: https://aguliacrudbackend.onrender.com
   - Should load (even if shows error page)

2. **Test API endpoint:**
   - Open: http://localhost:5173/test-api.html
   - Click "Test Signup"
   - Read the response

3. **Check browser console:**
   - Open app (F12)
   - Go to Console tab
   - Try registering
   - Read error messages

4. **Try different data:**
   - Different username
   - Different email
   - Longer password

## Most Likely Solution

**The backend is sleeping!**

1. Open https://aguliacrudbackend.onrender.com
2. Wait 30-60 seconds
3. Try registering again
4. Use a unique username (not "admin1")

## Still Not Working?

Check the actual error by:
1. Opening browser console (F12)
2. Going to Network tab
3. Try registering
4. Click on the failed request
5. Look at the Response tab

Share that error message for more specific help!
