import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
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
            <Link to="/register" className="home-nav-link">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;