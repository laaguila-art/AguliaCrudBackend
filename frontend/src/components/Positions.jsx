import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { positionsAPI } from '../services/api';
import './Positions.css';

function Positions() {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    positionCode: '',
    positionName: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      const response = await positionsAPI.getAll();
      console.log('Fetched positions:', response.data);
      console.log('Number of positions:', response.data?.length);
      setPositions(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching positions:', err);
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        setError('Failed to fetch positions');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await positionsAPI.update(editingId, formData.positionCode, formData.positionName);
      } else {
        await positionsAPI.create(formData.positionCode, formData.positionName);
      }
      setFormData({ positionCode: '', positionName: '' });
      setShowForm(false);
      setEditingId(null);
      fetchPositions();
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed');
    }
  };

  const handleEdit = (position) => {
    setFormData({
      positionCode: position.positionCode,
      positionName: position.positionName
    });
    setEditingId(position.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this position?')) {
      try {
        await positionsAPI.delete(id);
        fetchPositions();
      } catch (err) {
        setError('Failed to delete position');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ positionCode: '', positionName: '' });
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="positions-container">
      <div className="positions-header">
        <h1>Positions Management</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="actions">
        {!showForm && (
          <button onClick={() => setShowForm(true)} className="add-btn">
            + Add New Position
          </button>
        )}
      </div>

      {showForm && (
        <div className="form-card">
          <h3>{editingId ? 'Edit Position' : 'New Position'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Position Code</label>
              <input
                type="text"
                value={formData.positionCode}
                onChange={(e) => setFormData({ ...formData, positionCode: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Position Name</label>
              <input
                type="text"
                value={formData.positionName}
                onChange={(e) => setFormData({ ...formData, positionName: e.target.value })}
                required
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                {editingId ? 'Update' : 'Create'}
              </button>
              <button type="button" onClick={handleCancel} className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="positions-grid">
        {positions.length === 0 ? (
          <p className="no-data">No positions found. Create your first position!</p>
        ) : (
          positions.map((position) => {
            // Backend uses snake_case, so we need to handle both formats
            const id = position.position_id || position.id;
            const code = position.position_code || position.positionCode;
            const name = position.position_name || position.positionName;
            
            return (
              <div key={id} className="position-card">
                <div className="position-code">{code || 'NO CODE'}</div>
                <h3 style={{ color: '#000', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {name || 'NO NAME'}
                </h3>
                {/* Debug info */}
                <div style={{ fontSize: '10px', color: '#999', marginBottom: '10px' }}>
                  ID: {id} | Code: "{code}" | Name: "{name}"
                </div>
                <div className="position-actions">
                  <button onClick={() => handleEdit({ ...position, id, positionCode: code, positionName: name })} className="edit-btn">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(id)} className="delete-btn">
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Positions;
