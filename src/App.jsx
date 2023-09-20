import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
