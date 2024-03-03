import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import './Forgotpasswordpage.css'
const Forgotpasswordpage = () => {
    const textRef = useRef();
    const [mailSent, setMailSent] = useState(false)
    const [emailaddress, setEmailAddress] = useState("")
    const showText = (e)=>{
        if (emailaddress) {
            setEmailAddress("")
            setMailSent(true)
        }else{
            alert("Provide email address")
        }
       e.preventDefault() 
    }
    useEffect(()=>{
        if(mailSent){
            textRef.current.classList.add('showText')
        }
    },[mailSent])
    return (
        <div className='forgotpasswordpage'>
            <Navbar items={[{text:"Login",link:"/login"}]} />
            <div className='forgotpasswordpage__content'>
                <div className="forgotpasswordpage__data">

                    <form className='forgotpasswordpage__form'>
                        <label htmlFor="" className='registerpage__label'>
                            <span className='spanStyle'>Email</span>
                            <input type="email" name="" pattern=".+@example\.com" id="emailaddress" className='registerpage__input' required={true} value={emailaddress} onChange={(e)=>setEmailAddress(e.target.value)}/>
                        </label>
                        <button className='registerpage__submitBtn' onClick={showText}>Send</button>
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
