import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Login.css'


const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()
  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError('')
    setPasswordError('')
  
    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }
  
    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }
  
    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }
  
    // Authentication calls will be made here...
  }

  return (
    <div className="home-container">
    <header className="home-header">
      <h1>Welcome to EvidMentor</h1>
      <h6>Evidence-based approach to mentoring and coaching.</h6>
    </header>
    <nav className="home-nav">
      <ul className="home-nav-list">
        <li className="home-nav-item">
          <Link to="/login" className="home-nav-linklogin">Login</Link>
        </li>
        <li className="home-nav-item">
          <Link to="/login" className="home-nav-link">Demo</Link>
        </li>
        <li className="home-nav-item">
          <Link to="/register" className="home-nav-link">Register</Link>
        </li>
      </ul>
    </nav>
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login to AspireBridge </div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className='btnFlex'>
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Reset'} />
      </div>
      
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
      
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Home'} />
      </div>
      </div>
    </div>
    </div>
  )
}

export default Login