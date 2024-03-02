//References - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
import React, { useEffect, useState } from 'react'
import './LoginPage.css'
import Navbar from '../universalComponents/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../features/login/loginSlice'
import { setUser } from '../../features/auth-user/authUserSlice'
const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("")
  const [userPasswd, setUserPasswd] = useState("")
  const dispatch = useDispatch();
  const Login =(e)=>{
    e.preventDefault()
    if (userEmail && userPasswd){
      dispatch(login())
      dispatch(setUser({
        type:"student",
        email:userEmail,
        password:userPasswd
      }))
      setUserEmail("")
      setUserPasswd("")
    }
    else{
      alert("Fill in the necessary details")
    }
  }
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
                    <input type="email" name="" pattern=".+@example\.com" id="emailaddress" className='loginpage__input' value={userEmail} onChange={(e)=>{
                      setUserEmail(e.target.value)
                    }}/>
                </label>
                <label htmlFor="">
                    <span className='spanStyle'>Password</span>
                    <input type="password" name="" id="password" minLength="8" className='loginpage__input' value={userPasswd} onChange={(e)=>{
                      setUserPasswd(e.target.value)
                    }}/>
                </label>
                <button type="submit" className='loginpage__submitBtn' onClick={Login}>
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
