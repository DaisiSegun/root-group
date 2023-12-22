import React, { useState } from 'react';
import './Register.scss';
import logo from '../../images/rootlogo.png';
import { Link, useNavigate } from 'react-router-dom';
import newRequest from "../../../utils/newRequest.js";

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'user',
  });

  const navigate = useNavigate(); // Fix: Declare navigate with const
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistration = async () => {
    try {
      // Make sure passwords match
      if (formData.password !== formData.confirmPassword) {
        console.error('Password and confirm password do not match');
        setError('Password and confirm password do not match');
        return;
      }

      // Make API call
      const response = await newRequest.post('/auth/register', formData);
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      console.log('Registration successful:', response.data);
      navigate("/");
      

    } catch (error) {
      console.error('Registration failed:', error.response.data);
      // Display the error message to the user
      setError(error.response.data.error || 'Registration failed');
    }
  };

  return (
    <div className='sign-in'>
      <Link className='home-logo' to='/'>
        <img src={logo} className='logo-1' alt='logo' />
      </Link>
      <div className='sign-in-container'>
        <div className='sign-in-header'>Sign up</div>
        <p className='sign-up-now'>Sign up now to get started with an account</p>



        <div className='sign-in-box'>
          <label className='sign-in-text'>Username</label>
          <input
            type='text'
            className='sign-in-input'
            placeholder='Username'
            name='username'
            onChange={handleChange}
          />
        </div>

        <div className='sign-in-box'>
          <label className='sign-in-text'>Email</label>
          <input
            type='email'
            className='sign-in-input'
            placeholder='Email'
            name='email'
            onChange={handleChange}
          />
        </div>

        <div className='sign-in-box'>
          <label className='sign-in-text'>Phone Number</label>
          <input
            type='tel'
            className='sign-in-input'
            placeholder='Phone number'
            name='phone'
            onChange={handleChange}
          />
        </div>

        <div className='sign-in-box'>
          <label className='sign-in-text'>Password</label>
          <input
            type='password'
            className='sign-in-input'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
        </div>

        <div className='sign-in-box'>
          <label className='sign-in-text'>Confirm Password</label>
          <input
            type='password'
            className='sign-in-input'
            placeholder='Confirm Password'
            name='confirmPassword'
            onChange={handleChange}
          />
        </div>

        {error && <div className='error-box'>{error}</div>}

        <div className='button3' onClick={handleRegistration}>
          Register
        </div>

        <div className='dont-have-an'>
          Already have an account?
          <Link to='/sign-in' className='link'>
            <span className='sign-up-green'>Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
