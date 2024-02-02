// import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
// import OAuth from '../components/OAuth';

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

    // Add state to store validation errors
    const [usernameError, setUsernameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    // Clear previous error messages
    setUsernameError(null);
    setEmailError(null);
    setPasswordError(null);

    // Validate input based on input type
    if (e.target.id === 'username') {
      if (e.target.value.length < 3 || e.target.value.length > 20) {
        setUsernameError('Username must be between 3 and 20 characters long.');
      }
    } else if (e.target.id === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(e.target.value)) {
        setEmailError('Please enter a valid email address.');
      }
    } else if (e.target.id === 'password') {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(e.target.value)) {
          setPasswordError('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.');
        } else {
          setPasswordError(null);
        }
    }

  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if there are any validation errors
    if (usernameError || emailError || passwordError) {
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  // console.log( formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign-Up</h1>
      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className={`border p-3 rounded-lg ${usernameError ? 'border-red-500' : ''}`} id='username' onChange={handleChange}/>
        {usernameError && <p className='text-red-500 mt-1'>{usernameError}</p>}
        <input type="email" placeholder='email' className={`border p-3 rounded-lg ${emailError ? 'border-red-500' : ''}`} id='email' onChange={handleChange}/>
        {emailError && <p className='text-red-500 mt-1'>{emailError}</p>}
        <input type="password" placeholder='password' className={`border p-3 rounded-lg ${passwordError ? 'border-red-500' : ''}`} id='password' onChange={handleChange}/>
        {passwordError && <p className='text-red-500 mt-1'>{passwordError}</p>}
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>
          {loading ? 'loading...' : 'Sign Up'}
        </button>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700 '>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default SignUp