import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import UserProfile from './Components/UserProfile'
import './App.css'
import { useEffect, useState } from 'react'
import Register from './Components/Register'
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

