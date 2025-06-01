import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const apiCall = (mail,password) => {
    const requestData = {
      email: mail,
      password: password
    };
    console.log('Request data:', requestData);
  }

  return (
    <div className="App">
      <Login setMail={setMail} setPassword={setPassword} mail={mail} password={password} onSubmit={apiCall} />
    </div>
  );
}

export default App;