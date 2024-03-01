//References - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
import React from 'react'
import './LoginPage.css'
import Navbar from '../universalComponents/Navbar/Navbar'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <div className='loginpage'>
      <Navbar items={[{text:"Register",link:"/register"}]}/>
      <div className="loginpage__content">
        <div className="loginpage__title">
            Login
        </div>
        <div className="loginpage__data">
            <form action="" className="loginpage__form">
                <label htmlFor="">
                    <span className='spanStyle'>Email Address</span>
                    <input type="email" name="" pattern=".+@example\.com" id="emailaddress" className='loginpage__input'/>
                </label>
                <label htmlFor="">
                    <span className='spanStyle'>Password</span>
                    <input type="password" name="" id="password" minLength="8" className='loginpage__input'/>
                </label>
                <button type="submit" className='loginpage__submitBtn'>
                    Login
                </button>
            </form>
            <div className="loginpage__forgotpassword">
                <Link to="/forgotpasswd" style={{"textDecoration":"none","color":"var(--text-color)"}}>
                Forgot Password?
                </Link>
            </div>
            <div className="loginpage__register">
                <Link to="/register" style={{"textDecoration":"none","color":"var(--text-color)"}}>
                New User? <b>Register Now</b>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
