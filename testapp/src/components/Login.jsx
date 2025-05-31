import { useState } from 'react';
import '../styles/Login.css';

function Login({ setMail, setPassword, onSubmit }) {
  const [inputMail, setInputMail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setMail(inputMail);
    setMail(inputPassword);
    setLoggedIn(true);
    onSubmit();
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
              value={inputMail}
              onChange={e => setInputMail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              value={inputPassword}
              onChange={e => setInputPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-btn" type="submit">Log In</button>
          {loggedIn && (
            <div className="alert" style={{ color: 'green', backgroundColor: '#e6ffe6', marginTop: '1rem' }}>
              Some error occured, request data logged in console.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
