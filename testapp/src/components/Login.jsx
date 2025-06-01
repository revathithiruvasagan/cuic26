import { useState } from 'react';
import '../styles/Login.css';

function Login({ setMail, setPassword, mail, password, onSubmit }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordd, setPasswordd] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    onSubmit(mail, password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-title">Login</div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              value={mail}
              onChange={e => setMail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              value={passwordd}
              onChange={e => setPasswordd(e.target.value)}
              required
            />
          </div>
          <button className="login-btn" type="submit">Log In</button>
          {loggedIn && (
            <div className="alert" style={{ color: 'green', backgroundColor: '#e6ffe6', marginTop: '1rem' }}>
              Request logged in console
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
