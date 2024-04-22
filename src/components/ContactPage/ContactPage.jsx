// References - https://codepen.io/meodai/pen/rNedxBa
import React, { useState } from 'react';
import './ContactPage.css';
import Navbar from '../universalComponents/Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
const ContactPage = () => {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    function sendMessage(e) {
        e.preventDefault()
        if(firstname && lastname && email && message){
            axios.post(process.env.REACT_APP_API_URL+'/contactus',{
                "first_name":firstname,
                'last_name':lastname,
                'email':email,
                'message':message
            }).then((response)=>{console.log(response);}).catch((err)=>console.log(err))
            alert("Message sent")
            setEmail("")
            setFirstName("")
            setLastName("")
            setMessage("")
        }else{
            alert("Fill all the details")
        }
    }
    return (
        <div className='contactpage'>
            <Navbar items={[{text:"Login",link:"/login"}]} />
            <div className="contactpage__content">
                <div className="contactpage__title">
                    Contact Us
                </div>
                <div className="contactpage__data">
                    <h5 style={{ "fontWeight": "normal", "fontStyle": "italic" }}>Type in your details and we will get back to you as soon as possible</h5>
                    <form className='contactpage__form'>
                        <label className='contactpage__custominput'>
                            <span>First Name</span>

                            <input type="text" name="" id="name" className='contactpage__input' placeholder='Type your first name here...' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
                            {/* <span className='contactpage__label'>Type Full Name here...</span> */}
                        </label>
                        <label className='contactpage__custominput'>
                            <span>Last Name</span>
                            <input type="text" name="" id="name" className='contactpage__input' placeholder='Type your last name here...' value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
                            {/* <span className='contactpage__label'>Type Full Name here...</span> */}
                        </label>
                        <label className='contactpage__custominput'>
                            <span>Email Name</span>

                            <input type="text" name="" id="name" className='contactpage__input' placeholder='Type your email here...' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            {/* <span className='contactpage__label'>Type Full Name here...</span> */}
                        </label>
                        <label className='contactpage__custominput'>
                            <span>Message</span>

                            <input type="text" name="" id="name" className='contactpage__input' placeholder='Type your message here...' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                            {/* <span className='contactpage__label'>Type Full Name here...</span> */}
                        </label>
                        <button onClick={sendMessage} className='contactpage__submitBtn'>
                            Send Query
                        </button>
                    </form>
                </div>
            </div>
            <footer className='contactpage__options'>
                <Link to="/about" className='contactpage__links'>About</Link>
                <Link to="/services" className='contactpage__links'>Services</Link>
                <Link to="/contact" className='contactpage__links'>Contact</Link>
                <Link to="https://pxi1063.uta.cloud/blog" className='homepagecomponent__links' >Blog</Link>
                <h5 style={{ "color": "white", "fontWeight": "normal" }}>

                    Copyright Group 5 WDM UTA
                </h5>
            </footer>
        </div>
    )
}

export default ContactPage
