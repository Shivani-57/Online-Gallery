// SignupForm.js
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./styles/SignupForm.css"
import errorComponent from './errorComponent';
import ErrorComponent from './errorComponent';



const SignupForm = () => {
  const navigate = useNavigate();

  
  const [errorMessage, setErrorMessage] = useState('');

  const [user, setUser] = useState({
        username: "",
        email:"",
        password:"",
  });
  
  const handleInput=(e) => {
    let name=e.target.name;
    let value = e.target.value;
    console.log(name,value)
    setUser(
     {
      ...user,
      [name]: value,
     }
    )
  }

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(user);

    try{
      const response = await fetch('http://localhost:5000/signup',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    })
    // console.log(response)
    if(await response.ok){
      setUser({ username: "", email:"", password:"",})
      navigate("/image-page")
    }
    }
    catch(error){
      ErrorComponent.setErrorMessage(error.response?.data?.message || 'An error occurred');
      console.log("register", error)
    }
  };


 

  return (
    <div className='signup-div'>
    <form className=" signup-form" onSubmit={handleSubmit}>
      <div>
        <label className='signup-label' htmlFor="username">Username:</label>
        <input className="signup-input"
          type="text"
          id="username"
          name='username'
          value={user.username}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label className='signup-label' htmlFor="email">Email:</label>
        <input className="signup-input"
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label className='signup-label' htmlFor="password">Password:</label>
        <input className="signup-input"
          type="password"
          id="password"
          name='password'
          value={user.password}
          onChange={handleInput}
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
