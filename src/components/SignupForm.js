// SignupForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles/SignupForm.css"


const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields before submitting
    if (!username || !email || !password) {
      alert('Please fill in all the required fields.');
      return;
    }

    // Add your signup logic here
    console.log('Signup submitted:', { username, email, password });
  };

  return (
    <div className='signup-div'>
    <form className=" signup-form" onSubmit={handleSubmit}>
      <div>
        <label className='signup-label' htmlFor="username">Username:</label>
        <input className="signup-input"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='signup-label' htmlFor="email">Email:</label>
        <input className="signup-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='signup-label' htmlFor="password">Password:</label>
        <input className="signup-input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      <div>
        <button type="submit">Sign Up</button>
      </div>
      <p>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </form>
    </div>
  );
};

export default SignupForm;
