// References - https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button
import React from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import './SubmitReport.css'
const SubmitReport = () => {
    const menuItems = [{
        text: "Home",
        link: "/studenthome"
    },
    {
        text: "Calendar",
        link: "/studenthome/calendar"
    },
    {
        text: "Your Tasks",
        link: "/studenthome/tasks"
    },
    {
        text: "Logout",
        link: "/logout"
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
    console.log(`${year}-${month}-${date}`);
    return (
        <div className='submitreport'>
            <Navbar items={menuItems} />
            <div className="submitreport__data">
                <div className="submitreport__title">Weekly Report Submission</div>
                <div className="submitreport__formRow">
                    <form action="" className="submitreport__form">
                        <div className="submitreport__row">

                            <label htmlFor="" className='submitreport__label'>
                                <span className='submit__spanStyle'>Summary</span>
                                <textarea name="summary" id="summary"></textarea>
                                {/* <input type="text" name="" pattern="^[A-Za-z\s]*$" id="emailaddress" className='loginpage__input' /> */}
                            </label>
                            <label htmlFor="" className='submitreport__label'>
                                <span className='submit__spanStyle'>Email Address</span>
                                <input type="date" value={`${year}-${month}-${date}`} id="date" className='loginpage__input' contentEditable={false}/>
                            </label>
                        </div>
                        <div className="submitreport__row">

                            <label htmlFor="" className='submitreport__label'>
                                <span className='submit__spanStyle'>Accomplishments</span>
                                <textarea name="accomplishments" id="accomplishments"></textarea>
                                {/* <input type="email" name="" pattern=".+@example\.com" id="emailaddress" className='loginpage__input' /> */}
                            </label>
                            <label htmlFor="" className='submitreport__label'>
                                <span className='spanStyle'>Report</span>
                                <input type="file" name="report" id="report" accept='.pdf' className='submitreport__fileInput' />
                            </label>
                        </div>
                        <div className="submitreport__row">
                            <label htmlFor="" className='submitreport__label'>
                                <span className='submit__spanStyle'>Justification Of Hours</span>
                                <textarea name="justification" id="justification"></textarea>
                            </label>
                            <label htmlFor="" className='submitreport__label' style={{"visibility":"hidden"}}>
                                <span className='spanStyle'>Justification Of Hours</span>
                                <textarea name="justification" id="justification"></textarea>
                            </label>
                        </div>
                        <div className="submitreport__submit">

                        <button type="submit" className='submitreport__submitBtn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubmitReport
