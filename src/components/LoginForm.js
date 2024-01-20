import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./styles/LoginForm.css"

const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    email:"",
    password:"",
});
const navigate = useNavigate()


  const handleInput = (e) => {
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
      const response = await fetch('http://localhost:5000/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    })
    console.log(response)
    if(response.ok){
      setUser({ email:"", password:"",})
      navigate("/image-page")
    }
    else{
      alert("Invalid Credentials")
      console.log("Invalid Credentials")
    }
    }
    catch(err){
      console.log("register", err)
    }

  };

  return (
    <div className='login-div'>
    <form className='login-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name='email'
          value={user.email}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name='password'
          value={user.password}
          onChange={handleInput}
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
