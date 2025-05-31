import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);

  const apiCall = () => {
    const requestData = {
      email: mail,
      password: password
    };
    console.log('Request data:', requestData);
  }

  return (
    <div className="App">
      <Login setMail={setMail} setPassword={setPassword} onSubmit={apiCall} />
    </div>
  );
}

export default App;