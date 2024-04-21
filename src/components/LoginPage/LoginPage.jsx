//References - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
import React, { useEffect, useState } from 'react'
import './LoginPage.css'
import Navbar from '../universalComponents/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../features/login/loginSlice'
import { setAuthUser } from '../../features/auth-user/authUserSlice'
import axios from 'axios';
const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("") //keeps track of entered user email
  const [userPasswd, setUserPasswd] = useState("") //keeps track of entered user password
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loginUser.loggedIn)//sees if a user is logged in or not
  const userType = useSelector((state)=>state.userData.type)
  const [hasNotBeenFilled, setHasNotBeenFilled] = useState({email:false,password:false});
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
      // const getCreds = authAccounts[userEmail]
      
      // if (getCreds && (getCreds.password === userPasswd)){
        // dispatch(login())
        let api_url = process.env.REACT_APP_API_URL
        if(userEmail.includes('mavs.uta.edu')){
          api_url += '/login'
        }
        else{
          if (userEmail.includes('uta.edu')){
            api_url += '/professorlogin'
          }
          else{
            alert("Check your email again")
            setHasNotBeenFilled({email:false,password:false})
            return
          }
        }
        console.log(api_url);
        axios.post(api_url,{
          
          'email':userEmail,
          'password':userPasswd
        }).then((response)=>{
          console.log(response);
          if (response.data.status != 200){
            alert('Email address or password is incorrect')
          }else{
            dispatch(login())
            dispatch(setAuthUser({
              type:response.data.type,
              email:response.data.userInfo.student_email,
              password:response.data.userInfo.student_password,
              username:response.data.userInfo.student_name,
              graduationDate:response.data.userInfo.student_graduation_date,
              id:response.data.userInfo.id
            }))
          }
        })
        setUserEmail("")
        setUserPasswd("")
      // }
      // else{
      //   alert("Email address or password is incorrect")
      // }

    }
    else{
      if(!userEmail && !userPasswd){
        setHasNotBeenFilled({email:true,password:true})
      }
      else if(!userPasswd){
        setHasNotBeenFilled({email:false,password:true})
      }else{
        setHasNotBeenFilled({email:true, password:false})
      }
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
                    <input type="email" name="" pattern="^\w+@(mavs\.uta\.edu|uta\.edu)$" id="emailaddress" required className={`loginpage__input ${hasNotBeenFilled.email ?"input__border":null}`} value={userEmail} onChange={(e)=>{
                      setUserEmail(e.target.value)
                    }}/>
                </label>
                <label htmlFor="">
                    <span className='spanStyle'>Password</span>
                    <input type="password" name="" id="password" minLength="8" required className={`loginpage__input ${hasNotBeenFilled.password ?"input__border":null}`} value={userPasswd} onChange={(e)=>{
                      setUserPasswd(e.target.value)
                    }}/>
                </label>
                <button type="submit" className='loginpage__submitBtn' onClick={Login}>
                    Login
                </button>
            </form>
            {/* <div className="loginpage__forgotpassword">
                <Link to="/forgotpasswd" style={{"textDecoration":"none","color":"var(--text-color)"}}>
                Forgot Password?
                </Link>
            </div> */}
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
