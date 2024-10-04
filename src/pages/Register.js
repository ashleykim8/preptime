import React from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import { Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
        username:"",
        password:"",
        email:""
    },
    onSubmit: (values) =>{
      let result = fetch(
        'http://localhost:8080/api/users/register', {
            method: "POST",
            body: JSON.stringify({ 
              username:formik.values.username, 
              password:formik.values.password, 
              email:formik.values.email
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.warn(result);
        navigate('/');
    }
  });

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
          />
        </div>
        <button type="submit" className="register-button">CREATE ACCOUNT</button>
      </form>
      <br></br>
      <center>
        Already have an account? <Link to="/login" className='login-link'>SIGN IN</Link>
      </center>
    </div>
  );
}

export default Register;
