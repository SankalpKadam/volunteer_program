//References- https://www.w3schools.blog/spaces-letters-alphabets-validation-javascript-js
import React from 'react'
import './RegisterPage.css'
import Navbar from '../universalComponents/Navbar/Navbar'
import { Link } from 'react-router-dom'
const RegisterPage = () => {
  return (
    <div className='registerpage'>
      <Navbar items={["Login"]}/>
      <div className='registerpage__content'>
        {/* <div className="registerpage__title">
            Register
        </div> */}
        <div className="registerpage__data">
            <form action="" className="registerpage__form">
            <div className="registerpage__formRow">
                <label htmlFor="" className='registerpage__label'>
                    <span className='spanStyle'>Name</span>
                    <input type="text" name="" pattern="^[A-Za-z\s]*$" id="name" className='registerpage__input'/>
                </label>
                <label htmlFor="" className='registerpage__label'>
                    <span className='spanStyle'>Email</span>
                    <input type="email" name="" pattern=".+@example\.com" id="emailaddress" className='registerpage__input'/>
                </label>
                </div>
                <div className="registerpage__formRow">
                <label htmlFor="" className='registerpage__label'>
                    <span className='spanStyle'>Phone Number</span>
                    <input type="tel" name="" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="phonenumber" className='registerpage__input'/>
                </label>
                <label htmlFor="" className='registerpage__label'>
                    <span className='spanStyle'>Graduation Date</span>
                    <input type="month" name="" id="gdate" className='registerpage__input'/>
                </label>
                </div>
                <div className="registerpage__formRow">
                <label htmlFor="" className='registerpage__label'>
                    <span className='spanStyle'>Password</span>
                    <input type="password" name="" id="password" minLength="8" className='registerpage__input'/>
                </label>
                <label htmlFor="" className='registerpage__label'>
                    <span className='spanStyle'>Confirm Password</span>
                    <input type="password" name="" id="confirmpasswd" minLength="8" className='registerpage__input'/>
                </label>
                </div>
                <button type="submit" className='registerpage__submitBtn'>
                    Register
                </button>
            </form>
            <div className="loginpage__forgotpassword">
                <Link to="/login" style={{"textDecoration":"none","color":"var(--text-color)"}}>
                Already have an account? <b>Login</b>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
