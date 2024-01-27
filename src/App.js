import { useState } from 'react';
import './App.css';
import Login from './Login/Login';
import Register from './Signup/SignUp';

function App() {

  const [state, setState] = useState(true)

  return (
    <div className='container'>
  
      <div className='button'>
        <button onClick={() => setState(true)} id="login">Login</button>
        <button onClick={() => setState(false)} id="signup">Sign Up</button>
      </div>

      <div className='components'>
        {state ? <Login /> : <Register />}
      </div>

    </div>

  );
}

export default App;
