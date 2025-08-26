import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const handleUserProfileUpdate = async (formData) => {
    console.log(formData);
    // await fetch("https://68ad3f31a0b85b2f2cf2963f.mockapi.io/Users", {
    //   method:"POST",
    //   body: ,
    // }) 
  }
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    
    console.log('Attempting login with:', { email, password });

    setErrorMessage('');
    setEmail('');
    setPassword('');
    alert('Login attempt successful');
  };

  return (
    <div style={{ backgroundColor: '', padding: '30px',maxHeight:'0 100vh', maxWidth: '550px', margin: '80px auto', border: '1px solid #0a0a0aff', borderRadius: '50px' }}>
      <h2>Login</h2>
      <form action={handleUserProfileUpdate} method onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
         <div>
            <label htmlFor="Name">Name:</label>
            <input type="name" id='name' value={Name}
            onChange={(e) => setName (e.target.value)}  required 
            style={{ width: '100%', padding: '8px', margin: '5px 0' }} placeholder='Enter your FullName'/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            placeholder='Example@gmail.com'
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            placeholder='Enter your Password'
          />
        </div>
         <br />

        
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff',
             color: 'white', border: '10px', borderRadius: '4px', cursor: 'pointer',}}>
          Login
        </button>
        <button onClick={() => navigate("/CreateAccount")} type="submit" style={{ marginLeft:'250px',padding: '10px 15px', backgroundColor: '#007bff',
             color: 'white', border: '10px', borderRadius: '4px', cursor: 'pointer',}}>
          Create an Account
        </button>
        
      </form>
    </div>
  );
};

export default Login;