// References - https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button , https://blog.logrocket.com/implement-recaptcha-react-application/
import React, { useState } from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import './SubmitReport.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import ReCAPTCHA from "react-google-recaptcha"
const SubmitReport = () => {
    const [summary, setSummary]=useState("");
    const [accomplishments, setAccomplishments]=useState("");
    const [justificationOfHours, setJustificationOfHours]=useState("");
    const [submissiondate, setDate] = useState(`${year}-${month}-${date}`);
    const [fileUpload, setFileUpload] = useState(null);
    const [verified, setVerified] = useState(false);
    const [timer, setTimer] = useState(true)
    const loggedInStudent = useSelector((state)=>state.userData);
    const menuItems = [
        {
            text: "Home",
            link: "/studenthome"
        },
        {
            text: "Calendar",
            link: "/studenthome/calendar"
        },
        {
            text: "Submit Reports",
            link: "/studenthome/submitreport"
        },
        {
            text: "Your Tasks",
            link: "/studenthome/tasks"
        },
        {
            text: "Logout",
            link: "/logout"
        },
        {
            text:"Chat",
            link:"/studenthome/chat"
        }
    ]
    const getTodayDate = new Date();
    var month = `${getTodayDate.getMonth()+1}`;
    var year = `${getTodayDate.getFullYear()}`;
    var date = `${getTodayDate.getDate()}`;
    console.log();
    if(month.length < 2){
        month = `0${month}`
    }
    if(date.length < 2){
        date = `0${date}`
    }

    const submitReport = (e)=>{
        e.preventDefault();
        console.log(e);
        if (summary && justificationOfHours && submissiondate && accomplishments &&fileUpload){
            const api_url = process.env.REACT_APP_API_URL;
            const formData = new FormData();
            formData.append('file',fileUpload)
            formData.append('content',summary)
            formData.append('accomplishments',accomplishments)
            formData.append('justification', justificationOfHours)
            formData.append('graduate_id',loggedInStudent.id)
            axios.post(api_url+'/savereport',formData,{headers:{
                "Content-Type":"multipart/form-data",
            }}).then((response)=>console.log(response)).catch((err)=>console.log(err));
            setAccomplishments("");
            setDate(`${year}-${month}-${date}`);
            setFileUpload(false)
            setJustificationOfHours("")
            setSummary("")
            setVerified(false)
            setTimeout(()=>setTimer(true),60000);
        }
        else{
            alert("Fill all the details");
        }
    }
    // console.log(`${year}-${month}-${date}`);
    return (
        <div className='submitreport'>
            <Navbar items={menuItems.reverse()} />
            <div className="submitreport__data">
                <div className="submitreport__title">Weekly Report Submission</div>
                <div className="submitreport__formRow">
                    <form action="" className="submitreport__form">
                        <div className="submitreport__row">

                            <label htmlFor="" className='submitreport__label'>
                                <span className='submit__spanStyle'>Summary</span>
                                <textarea name="summary" id="summary" onChange={(e)=>{setSummary(e.target.value)}} value={summary}></textarea>
                                {/* <input type="text" name="" pattern="^[A-Za-z\s]*$" id="emailaddress" className='loginpage__input' /> */}
                            </label>
                            <label htmlFor="" className='submitreport__label'>
                                <span className='submit__spanStyle'>Submission Date</span>
                                <input type="date" value={`${year}-${month}-${date}`} id="date" className='loginpage__input' contentEditable={false} onChange={(e)=>setDate(e.target.value)}/>
                            </label>
                        </div>
                        <div className="submitreport__row">

                            <label htmlFor="" className='submitreport__label'>
                                <span className='submit__spanStyle'>Accomplishments</span>
                                <textarea name="accomplishments" id="accomplishments" onChange={(e)=>{setAccomplishments(e.target.value)}} value={accomplishments}></textarea>
                                {/* <input type="email" name="" pattern=".+@example\.com" id="emailaddress" className='loginpage__input' /> */}
                            </label>
                            <label htmlFor="" className='submitreport__label'>
                                <span className='spanStyle'>Report</span>
                                <input type="file" name="report" id="report" accept='.pdf' className='submitreport__fileInput' onChange={(e)=>{
                                    
                                    setFileUpload(e.target.files[0])}}/>
                            </label>
                        </div>
                        <div className="submitreport__row">
                            <label htmlFor="" className='submitreport__label'>
                                <span className='submit__spanStyle'>Justification Of Hours</span>
                                <textarea name="justification" id="justification" onChange={(e)=>{setJustificationOfHours(e.target.value)}} value={justificationOfHours}></textarea>
                            </label>
                            {/* <label htmlFor="" className='submitreport__label' style={{"visibility":"hidden"}}>
                                <span className='spanStyle'>Justification Of Hours</span>
                                <textarea name="justification" id="justification"></textarea>
                            </label> */}
                            <div className='submitreport__label'>
                                  <ReCAPTCHA sitekey="6Lcw2MIpAAAAAKIZQFLB1brUPPRZZiwYP8Wm4qUw" onChange={()=>{setVerified(true); setTimer(false)}}/>  
                            </div>
                        </div>
                        <div className="submitreport__submit">
                        <button type="submit" className='submitreport__submitBtn' onClick={submitReport} disabled={!verified && timer}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubmitReport
