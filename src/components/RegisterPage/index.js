import React from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
const RegisterPage = () => {
  return (
    <div className='Register-page'>
        <div className='heading'>
            <h1>Chat App</h1>
            <h4>Chat with your friends in real time</h4>
        </div>
        <div className='register-form'>
             <form className='form-section'>
                   <div>
                      <input type='text' name='username' placeholder='Username' required/>
                   </div>

                   <div>
                    <input type='text' name='email' placeholder='Email' required/>
                   </div>

                   <div>
                   <input type='password' name='password' placeholder='Password' required/>
                   </div>

                   <div>
                   <input type='password' name='password' placeholder='Password Again' required/>
                   </div>

                   <div>
                   <input type='submit' value='Sign Up' className='sign-up'/>
                   </div>

                  
             </form>
             <div>
                <Link to="/login">
                   <button  className='login' > Log into Account </button>
                   </Link>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage