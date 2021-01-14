import React, { useState } from 'react';

const SignIn = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ email: '', password: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ [name]: value });
  };
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input name='email' type='email' value={userData.email} required />
        <label>Email</label>
        <input
          name='password'
          type='password'
          value={userData.password}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input type='submit' value='Submit Form' onChange={handleChange} />
      </form>
    </div>
  );
};

export default SignIn;
