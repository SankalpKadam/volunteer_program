//References- https://www.w3schools.blog/spaces-letters-alphabets-validation-javascript-js
import React, { useState } from 'react'
import './RegisterPage.css'
import Navbar from '../universalComponents/Navbar/Navbar'
import { Link, useAsyncError, useNavigate } from 'react-router-dom'
import axios from 'axios';
const RegisterPage = () => {
    const [name, setName] = useState("");
    const [professorName, setProfessorName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [gradDate, setGradDate] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [hasBeenSetname, sethasBeenSetName] = useState(false);
    const [hasBeenSetprofessorName, sethasBeenSetProfessorName] = useState(false);
    const [hasBeenSetnewEmail, sethasBeenSetNewEmail] = useState(false);
    const [hasBeenSetphonenumber, sethasBeenSetPhoneNumber] = useState(false);
    const [hasBeenSetgradDate, sethasBeenSetGradDate] = useState(false);
    const [hasBeenSetpassword, sethasBeenSetPassword] = useState(false);
    const [hasBeenSetconfirmpassword, sethasBeenSetConfirmPassword] = useState(false);
    const navigate = useNavigate()
    function registerUser(e) {
        const api_url = process.env.REACT_APP_API_URL;
        e.preventDefault()
        if (name && newEmail && phonenumber && gradDate && password && confirmpassword && professorName) {
            sethasBeenSetName(false)
            sethasBeenSetProfessorName(false)
            sethasBeenSetNewEmail(false)
            sethasBeenSetGradDate(false)
            sethasBeenSetPassword(false)
            sethasBeenSetConfirmPassword(false)
            sethasBeenSetPhoneNumber(false)
            if (password === confirmpassword) {
                axios.post(api_url + '/register', {
                    'student_name': name,
                    'student_password': password,
                    'student_graduation_date': gradDate + '-10',
                    'student_email': newEmail,
                    'student_phone_number': phonenumber,
                    'student_professor_id': professorName
                }).then((response) => {
                    if (response.data.status != 200) {
                        alert('User Not added')
                        console.log(response);
                    }
                    else {
                        setConfirmPassword("")
                        setGradDate("")
                        setName("")
                        setNewEmail("")
                        setPassword("")
                        setPhoneNumber("")
                        setProfessorName("")
                        alert("A verification email has been sent to you")
                        navigate("/login")
                    }
                })


            } else {
                alert("Password and confirm password do not match")
            }
        } else {
            if (!name) {
                sethasBeenSetName(true)
                // document.getElementById('name').style.border = "3px solid red"
            }
            if (name) {
                sethasBeenSetName(false)
                // document.getElementById('name').style.border = "3px solid red"
            }
            if (!newEmail) {
                sethasBeenSetNewEmail(true)
                // document.getElementById('emailaddress').style.border = "3px solid red"
            }
            if (newEmail) {
                sethasBeenSetNewEmail(false)
                // document.getElementById('emailaddress').style.border = "3px solid red"
            }
            if (!password) {
                sethasBeenSetPassword(true)
                // document.getElementById('password').style.border = "3px solid red"
            }
            if (password) {
                sethasBeenSetPassword(false)
                // document.getElementById('password').style.border = "3px solid red"
            }
            if (!confirmpassword) {
                sethasBeenSetConfirmPassword(true)
                // document.getElementById('confirmpasswd').style.border = "3px solid red"
            }
            if (confirmpassword) {
                sethasBeenSetConfirmPassword(false)
                // document.getElementById('confirmpasswd').style.border = "3px solid red"
            }
            if (!phonenumber) {
                sethasBeenSetPhoneNumber(true)
                // document.getElementById('phonenumber').style.border = "3px solid red"
            }
            if (phonenumber) {
                sethasBeenSetPhoneNumber(false)
                // document.getElementById('phonenumber').style.border = "3px solid red"
            }
            if (!professorName) {
                sethasBeenSetProfessorName(true)
                // document.getElementById('professorId').style.border = "3px solid red"
            }
            if (professorName) {
                sethasBeenSetProfessorName(false)
                // document.getElementById('professorId').style.border = "3px solid red"
            }
            if (!gradDate) {
                sethasBeenSetGradDate(true)
                // document.getElementById('gdate').style.border = "3px solid red"
            }
            if (gradDate) {
                sethasBeenSetGradDate(false)
                // document.getElementById('gdate').style.border = "3px solid red"
            }
            alert("Fill all details")
        }
    }
    return (
        <div className='registerpage'>
            <Navbar items={[{ text: "Login", link: "/login" }]} />
            <div className='registerpage__content'>
                {/* <div className="registerpage__title">
            Register
        </div> */}
                <div className="registerpage__data">
                    <form action="" className="registerpage__form">
                        <div className="registerpage__formRow">
                            <label htmlFor="" className='registerpage__label'>
                                <span className='spanStyle'>Name</span>
                                <input type="text" name="" pattern="^[A-Za-z\s]*$" id="name" className={`${hasBeenSetname ? "input__border":null} registerpage__input`} value={name} onChange={(e) => setName(e.target.value)} />
                            </label>
                            <label htmlFor="" className='registerpage__label'>
                                <span className='spanStyle'>Email</span>
                                <input type="email" name="" pattern="^\w+@(mavs\.uta\.edu|uta\.edu)$" id="emailaddress" className={`${hasBeenSetnewEmail ? "input__border":null} registerpage__input`} value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                            </label>
                        </div>
                        <div className="registerpage__formRow">
                            <label htmlFor="" className='registerpage__label'>
                                <span className='spanStyle'>Phone Number</span>
                                <input type="tel" name="" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" id="phonenumber" className={`registerpage__input ${hasBeenSetphonenumber ? "input__border" : null}`} value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            </label>
                            <label htmlFor="" className='registerpage__label'>
                                <span className='spanStyle'>Graduation Date</span>
                                <input type="month" name="" id="gdate" className={`${hasBeenSetgradDate ? "input__border":null} registerpage__input`} onChange={(e) => setGradDate(e.target.value)} />
                            </label>
                        </div>
                        <div className="registerpage__formRow">
                            <label htmlFor="" className='registerpage__label'>
                                <span className='spanStyle'>Password</span>
                                <input type="password" name="" id="password" minLength="8" className={`${hasBeenSetpassword ? "input__border":null} registerpage__input`} value={password} onChange={(e) => setPassword(e.target.value)} />
                            </label>
                            <label htmlFor="" className='registerpage__label'>
                                <span className='spanStyle'>Confirm Password</span>
                                <input type="password" name="" id="confirmpasswd" minLength="8" className={`${hasBeenSetconfirmpassword ? "input__border":null} registerpage__input`} value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </label>
                        </div>
                        <div className="registerpage__formRow">
                            <label htmlFor="" className='registerpage__label'>
                                <span className='spanStyle'>Professor Id</span>
                                <input type="text" name="" pattern="[0-9]{1}" id="professorId" className={`${hasBeenSetprofessorName ? "input__border":null} registerpage__input`} value={professorName} onChange={(e) => setProfessorName(e.target.value)} />
                            </label>
                        </div>
                        <button className='registerpage__submitBtn' onClick={registerUser}>
                            Register
                        </button>
                    </form>
                    <div className="loginpage__forgotpassword">
                        <Link to="/login" style={{ "textDecoration": "none", "color": "var(--text-color)" }}>
                            Already have an account? <b>Login</b>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage
