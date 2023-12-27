import React, { useState } from 'react';
import './SignIn.scss';
import logo from '../../images/rootlogo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { PacmanLoader } from "react-spinners";
import newRequest from "../../../utils/newRequest.js";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await newRequest.post('/auth/login', formData);
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      console.log('Login successful:', response.data);
      navigate("/");
    } catch (error) {
      console.log('Login failed:', error.response.data);
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='sign-in'>
      <Link className='home-logo' to='/'>
        <img src={logo} className='logo-1' alt='logo' />
      </Link>
      <div className='sign-in-container'>
        <div className='sign-in-header'>Sign in</div>

        {error && <div className='error-box'>{error}</div>}

        <div className='sign-in-box'>
          <label className='sign-in-text'>Username</label>
          <input
            className='sign-in-input'
            placeholder='Username'
            name='email'
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

        <div className='button3' onClick={handleLogin}>
          {loading ? (
            <PacmanLoader color={"#36D7B7"} css={override} size={20} />
          ) : (
            'Login'
          )}
        </div>

        <div className='dont-have-an'>
          Don't have an account?
          <Link className='link' to='/register'>
            <span className='sign-up-green'>Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
