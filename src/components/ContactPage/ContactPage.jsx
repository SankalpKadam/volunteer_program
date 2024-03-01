// References - https://codepen.io/meodai/pen/rNedxBa
import React from 'react';
import './ContactPage.css';
import Navbar from '../universalComponents/Navbar/Navbar';
import { Link } from 'react-router-dom';
const ContactPage = () => {
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

                            <input type="text" name="" id="name" className='contactpage__input' placeholder='Type your first name here...' />
                            {/* <span className='contactpage__label'>Type Full Name here...</span> */}
                        </label>
                        <label className='contactpage__custominput'>
                            <span>Last Name</span>
                            <input type="text" name="" id="name" className='contactpage__input' placeholder='Type your last name here...' />
                            {/* <span className='contactpage__label'>Type Full Name here...</span> */}
                        </label>
                        <label className='contactpage__custominput'>
                            <span>Email Name</span>

                            <input type="text" name="" id="name" className='contactpage__input' placeholder='Type your email here...' />
                            {/* <span className='contactpage__label'>Type Full Name here...</span> */}
                        </label>
                        <label className='contactpage__custominput'>
                            <span>Message</span>

                            <input type="text" name="" id="name" className='contactpage__input' placeholder='Type your message here...' />
                            {/* <span className='contactpage__label'>Type Full Name here...</span> */}
                        </label>
                        <button type="submit" className='contactpage__submitBtn'>
                            Send Query
                        </button>
                    </form>
                </div>
            </div>
            <footer className='contactpage__options'>
                <Link to="/about" className='contactpage__links'>About</Link>
                <Link to="/services" className='contactpage__links'>Services</Link>
                <Link to="/contact" className='contactpage__links'>Contact</Link>
                <h5 style={{ "color": "white", "fontWeight": "normal" }}>

                    Copyright Group5 WDM UTA
                </h5>
            </footer>
        </div>
    )
}

export default ContactPage
