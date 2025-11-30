import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';
import './Auth.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showTip, setShowTip] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Wake up the backend when component mounts
    fetch('https://aguliacrudbackend.onrender.com').catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setShowTip(false);

    try {
      const response = await authAPI.signup(username, password, email || undefined);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      console.error('Registration error:', err);
      
      let errorMessage = '';
      
      if (err.response?.data?.message) {
        if (Array.isArray(err.response.data.message)) {
          errorMessage = err.response.data.message.join(', ');
        } else {
          errorMessage = err.response.data.message;
        }
      } else if (err.response?.status === 409 || err.response?.status === 400) {
        errorMessage = 'Username already exists. Try: admin2, admin3, testuser, etc.';
      } else if (err.message === 'Network Error' || err.code === 'ERR_NETWORK') {
        errorMessage = '⏰ Server is waking up... Please wait 30 seconds and try again!';
      } else if (err.response?.status === 500) {
        errorMessage = 'Server error. The backend might be starting up. Try again in 30 seconds.';
      } else {
        errorMessage = 'Registration failed. Please try again.';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        
        {showTip && (
          <div className="info-message">
            💡 First time? The server might take 30-60 seconds to wake up. 
            Try usernames like: admin2, admin3, testuser
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
              placeholder="e.g., admin2, testuser"
              minLength={3}
            />
          </div>
          <div className="form-group">
            <label>Email (optional)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              placeholder="Enter password"
              minLength={6}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="auth-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
