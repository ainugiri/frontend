import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const validateForm = (formData) => {
  console.log(formData);
  const { fullName, email, pwd1, pwd2 } = formData;
  if (fullName === '') {
    prompt('Please enter your full name');
  }
  if (email === '') {
    prompt('Please enter your email');
  }
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return 'Please enter a valid email';
  }
  if (pwd1 === '') {
    return 'Please enter a password';
  }
  if (pwd1.length < 8) {
    return 'The password must be 8 characters or longer';
  }
  if (pwd1 !== pwd2) {
    return 'The passwords do not match';
  }
};
const Register = () => {
  console.log('Register component');
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to EvidMentor</h1>
        <h6>Evidence-based approach to mentoring and coaching.</h6>
      </header>
      <nav className="home-nav">
        <ul className="home-nav-list">
          <li className="home-nav-item">
            <Link to="/login" className="home-nav-link">Login</Link>
          </li>
          <li className="home-nav-item">
            <Link to="/login" className="home-nav-link">Demo</Link>
          </li>
          <li className="home-nav-item">
            <Link to="/register" className="home-nav-linkRegister">Register</Link>
          </li>
        </ul>
      </nav>
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form className="register-form">
        <input name='fullName' type="text" className="register-input" placeholder="Full Name" />
        <input name='email' type="email" className="register-input" placeholder="Email" />
        <input name='pwd1' type="password" className="register-input" placeholder="Password" />
        <input name='pwd2' type="password" className="register-input" placeholder="ReType the Password" />
        <button name='register' onClick={validateForm} className="register-button">Register</button>
      </form>
    </div>
    </div>
  );
};

export default Register;