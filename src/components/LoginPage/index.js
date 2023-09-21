import React from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
const LoginPage = () => {
  return (
    <div className='Login-page'>
        <div className='heading'>
            <h1>Chat App</h1>
            <h4>Chat with your friends in real time</h4>
        </div>
        <div className='login-form'>
             <form className='form-section'>

                   <div>
                    <input type='text' name='email' placeholder='Email' required/>
                   </div>

                   <div>
                   <input type='password' name='password' placeholder='Password' required/>
                   </div>
                       
                   <div>
                   <input type='submit' value='Log in' className='login' />
                   </div>

                   <div  className='forgot-link'>
                   <a href="/">Forgot Password ?</a>
                   </div>
                  
             </form>
             <div>
                   <Link to='/'> <button type="submit" className="button-new">Create a New Account</button></Link>
                 </div>
        </div>
    </div>
  )
}

export default LoginPage