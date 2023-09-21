import React from 'react'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const Main = () => {
  return (
    <Router>
    <div>
        <Routes>
       <Route path='/' element={<RegisterPage/>}/>
       <Route path='/login' element={<LoginPage/>}/>
        </Routes>
    </div>
    </Router>
  )
}

export default Main