import React, { useState } from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import SidebarDetail from '../../universalComponents/SidebarDetail/SidebarDetail'
import './Reports.css'
import { Link } from 'react-router-dom'
const Reports = () => {
    const [feedback, setFeedback] = useState("")
    const menuItems = [
        {
            text: "Home",
            link: "/professorhome"
        },
        {
            text: "Recommendations",
            link: "/professorhome/recommend"
        },
        {
            text: "Reports",
            link: "/professorhome/report"
        },
        {
            text:"Tasks",
            link:"/professorhome/tasks"
        },
        {
            text: "Logout",
            link: "/logout"
        }
    ]
    const deadlines = [
        {
            title: "ask1234",
            secondaryDetail: "View"
        },
        {
            title: "ssk2320",
            secondaryDetail: "View"
        },
        {
            title: "avr4321",
            secondaryDetail: "View"
        },
        {
            title: "xyz4567",
            secondaryDetail: "View"
        }
    ]

    function sendFeedback(e){
        if (feedback){
            e.preventDefault()
            alert("Feedback submitted")
            setFeedback("")
        }
        else{
            alert("Fill all details")
        }
    }
    return (
        <div className='reports'>
            <Navbar items={menuItems.reverse()} />
            <div className="reports__data">
                <div className="reports__metrics">
                    <div className="reports__title">Review Report</div>
                    <div className="reports__reportData">Report ID: ask1234</div>
                    <div className="reports__secondaryTitle">
                        Summary
                    </div>
                    <div className="reports__secondaryData">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta harum animi voluptatem quod ipsa. Similique maxime, soluta suscipit architecto asperiores voluptatibus nisi vitae corrupti error, dicta velit enim est nostrum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequatur maiores esse. Nemo asperiores repudiandae ut, excepturi repellat cumque impedit itaque ipsa, illum dolor vitae nisi recusandae sit veritatis voluptas?
                    </div>
                    <div className="reports__secondaryTitle">
                        Justification of Hours
                    </div>
                    <div className="reports__secondaryData">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta harum animi voluptatem quod ipsa. Similique maxime, soluta suscipit architecto asperiores voluptatibus nisi vitae corrupti error, dicta velit enim est nostrum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequatur maiores esse. Nemo asperiores repudiandae ut, excepturi repellat cumque impedit itaque ipsa, illum dolor vitae nisi recusandae sit veritatis voluptas?
                    </div>
                    <div className="reports__secondaryTitle">
                        Report
                    </div>
                    <button className='submitreport__submitBtn'>View Report</button>
                    <Link className='reports__aiCheck'>Do AI anti-cheating check</Link>
                    <div className='reports__secondaryTitle'>
                        Feedback
                    </div>
                    <textarea name="feedback" id="feedback" value={feedback} onChange={(e)=>setFeedback(e.target.value)}></textarea>
                    <button className='submitreport__submitBtn' onClick={sendFeedback}>Submit</button>

                </div>
                <div className='reports__deadline'>
                    <div className='reports__secondaryTitle'>
                        Submitted Reports
                    </div>
                    {
                        deadlines.map((deadline, index) => <SidebarDetail title={deadline.title} secondaryDetail={deadline.secondaryDetail} key={index} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Reports
