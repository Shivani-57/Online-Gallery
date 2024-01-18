import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles/LoginForm.css"

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Submitted:', { username, email, password });
  };

  return (
    <div className='login-div'>
    <form className='login-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      <p>
        Don't have an account? <Link to="/signup">Signup here</Link>.
      </p>
    </form>
    </div>
  );
};

export default LoginForm;
