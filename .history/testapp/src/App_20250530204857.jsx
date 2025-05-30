import { useState } from 'react';
import Login from './components/Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {!user ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div className="dashboard">
          <div className="dashboard-header">
            <h1>Welcome, {user.name || user.email}!</h1>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
          <div className="dashboard-content">
            <div className="user-info">
              <h2>User Information</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>User ID:</strong> {user.id}</p>
              <p><strong>Login Time:</strong> {new Date().toLocaleString()}</p>
            </div>
            <div className="login-data">
              <h2>Console Output</h2>
              <p>Check the browser console to see the JSON login data that was logged.</p>
              <code>
                {JSON.stringify(user, null, 2)}
              </code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;