import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import './Forgotpasswordpage.css'
const Forgotpasswordpage = () => {
    const textRef = useRef();
    const [mailSent, setMailSent] = useState(false)
    const showText = (e)=>{
        console.log(e.target);
       setMailSent(true)
       e.preventDefault() 
    }
    useEffect(()=>{
        if(mailSent){
            textRef.current.classList.add('showText')
        }
    },[mailSent])
    return (
        <div className='forgotpasswordpage'>
            <Navbar items={["Login"]} />
            <div className='forgotpasswordpage__content'>
                <div className="forgotpasswordpage__data">

                    <form className='forgotpasswordpage__form'>
                        <label htmlFor="" className='registerpage__label'>
                            <span className='spanStyle'>Email</span>
                            <input type="email" name="" pattern=".+@example\.com" id="emailaddress" className='registerpage__input' required={true} />
                        </label>
                        <button type="submit" className='registerpage__submitBtn' onClick={showText}>Send</button>
                    </form>
                </div>
                <div className='forgotpasswordpage__resetText' ref={textRef}>
                    If this email address exists, then a link has been sent to you to reset your password.
                </div>
            </div>
        </div>
    )
}

export default Forgotpasswordpage
