import React from 'react'
import Dashboard from './Components/Dashboard'
import Contactus from './Components/Contactus'
import Home from './Components/Home.js'
import Login from './Components/Login.js'
import Services from './Components/Services.js'
import SignUp from './Components/SignUp'

function App() {
  return (
    <div className='App'>
    <Home />
    <Dashboard />
    <Services />
    <Contactus />
    <Login />
    <SignUp />
    </div>
  )
}

export default App