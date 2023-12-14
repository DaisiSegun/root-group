import React, { useState } from 'react';
import './SignUpSp.scss';
import upload from "../../../utils/upload";
import logo from '../../images/rootlogo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import newRequest from "../../../utils/newRequest.js";


function SignUpSp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    businessLocation: '',
    interests: '',
    languages: '',
    profilePicture: null,
    userType: 'seller', // Added userType with default value 'user'
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: file,
      }));
    }
  };

  const handleRegistration = async () => {
    try {
      const url = await upload(formData.profilePicture);
      console.log('Cloudinary URL:', url); // Add this line to log the Cloudinary URL
  
      // Now, proceed with the axios.post request
      await newRequest.post('/auth/register', {
        ...formData,
        profilePictureUrl: url,
      });
  
      console.log('Registration successful');
      // Handle success, e.g., show a success message to the user
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
     
      setError(error.response?.data?.error || 'Registration failed');
    }
  };
  


  return (
    <div className='sign-in'>
      <img src={logo} className='logo-1' alt='logo' />

      <div className='sign-in-container'>
        <div className='sign-in-header'>Sign up</div>
        <p className='sign-up-now'>Sign up as a service provider</p>

          

        <div className='sign-in-box'>
          <label className='sign-in-text'>Username</label>
          <input
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
            className='sign-in-input'
            placeholder='Phone Number'
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

        <div className='sign-in-box'>
          <label className='sign-in-text'>Business Location</label>
          <input
            className='sign-in-input'
            placeholder='Business Location'
            name='businessLocation'
            onChange={handleChange}
          />
        </div>

        <div className='sign-in-box'>
          <label className='sign-in-text'>Interests</label>
          <input
            className='sign-in-input'
            placeholder='Interests'
            name='interests'
            onChange={handleChange}
          />
        </div>

        <div className='sign-in-box'>
          <label className='sign-in-text'>Languages</label>
          <input
            className='sign-in-input'
            placeholder='Languages'
            name='languages'
            onChange={handleChange}
          />
        </div>

        <div className='create-contianer3'>
          <p className='create-title3'>Profile Picture</p>
          <input
            type='file'
            accept='image/*'
            className='sign-in-input'
            name='profilePicture'
            onChange={handleImageChange}
          />
        </div>

        {error && <div className='error-box'>{error}</div>}

        <div className='button3' onClick={handleRegistration}>
          Register
        </div>

        <div className='dont-have-an'>
          Already have an account?{' '}
          <Link to='/register' className='link'>
            <span className='sign-up-green'>Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpSp;
