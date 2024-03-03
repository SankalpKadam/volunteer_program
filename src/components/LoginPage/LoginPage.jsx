//References - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
import React, { useEffect, useState } from 'react'
import './LoginPage.css'
import Navbar from '../universalComponents/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../features/login/loginSlice'
import { setAuthUser } from '../../features/auth-user/authUserSlice'
const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("") //keeps track of entered user email
  const [userPasswd, setUserPasswd] = useState("") //keeps track of entered user password
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loginUser.loggedIn)//sees if a user is logged in or not
  const userType = useSelector((state)=>state.userData.type)
  const navigate = useNavigate();
  const authAccounts = {
    "sdt1234@mavs.uta.edu":{
      type:"student",
      password:"student123"
    },
    "prof4321@uta.edu":{
      type:"professor",
      password:"professor123"
    }
  }

  const Login =(e)=>{
    e.preventDefault()
    if (userEmail && userPasswd){
      const getCreds = authAccounts[userEmail]
      
      if (getCreds && (getCreds.password === userPasswd)){
        dispatch(login())
        dispatch(setAuthUser({
          type:getCreds.type,
          email:userEmail,
          password:userPasswd,
          username:"John Doe",
          graduationDate:"May 2024"
        }))
        setUserEmail("")
        setUserPasswd("")
      }
      else{
        alert("Email address or password is incorrect")
      }

    }
    else{
      alert("Fill in the necessary details")
    }
  }
  useEffect(()=>{
    if(isLoggedIn){
      userType=="student"?navigate("/studenthome"):navigate("/professorhome")
    }
  })
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
