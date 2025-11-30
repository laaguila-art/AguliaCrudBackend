import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';
import './Auth.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      console.log('Attempting registration:', { username, email: email || 'none' });
      const response = await authAPI.signup(username, password, email || undefined);
      console.log('Registration successful:', response);
      alert('✅ Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      console.error('Registration error full details:', err);
      console.error('Error response:', err.response);
      console.error('Error message:', err.message);
      
      let errorMessage = '';
      
      // Network or connection errors
      if (err.message === 'Network Error' || err.code === 'ERR_NETWORK') {
        errorMessage = '❌ Cannot connect to server. Please check your internet connection or try again later.';
      }
      // Server returned an error response
      else if (err.response?.data?.message) {
        if (Array.isArray(err.response.data.message)) {
          errorMessage = '❌ ' + err.response.data.message.join(', ');
        } else {
          errorMessage = '❌ ' + err.response.data.message;
        }
      } 
      // HTTP status specific errors
      else if (err.response?.status === 409) {
        errorMessage = '❌ Username already exists. Please try a different username.';
      } else if (err.response?.status === 400) {
        errorMessage = '❌ Invalid input. Please check your username (min 3 chars) and password (min 6 chars).';
      } else if (err.response?.status === 500) {
        errorMessage = '❌ Server error. Please try again in a moment.';
      } else if (err.response?.status) {
        errorMessage = `❌ Server responded with error ${err.response.status}. Please try again.`;
      }
      // Unknown error
      else {
        errorMessage = `❌ Registration failed: ${err.message || 'Unknown error'}. Please try again.`;
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
        
        <div style={{ 
          fontSize: '11px', 
          color: '#666', 
          textAlign: 'center', 
          marginBottom: '15px',
          padding: '8px',
          background: '#f5f5f5',
          borderRadius: '4px'
        }}>
          🌐 Backend: <strong>aguliacrudbackend.onrender.com</strong>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
              placeholder="Choose a username"
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
