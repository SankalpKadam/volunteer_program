import React from 'react'
import './AICheck.css'
import Navbar from '../../universalComponents/Navbar/Navbar'
const AICheck = () => {
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
            text: "Tasks",
            link: "/professorhome/tasks"
        },
        {
            text: "Logout",
            link: "/logout"
        }
    ]
    return (
        <div className='aicheck'>
            {/* <Navbar items={menuItems.reverse()} /> */}
            <div className="aicheck__data">
                <div className="studentdashboard__title">AI Check Report</div>
                <div className="aicheck__secondaryTitle" style={{"fontWeight":"normal"}}>Use of CHAT GPT: <span className='task__Low' style={{"fontWeight":"bold","marginLeft":"1rem"}}>Low</span></div>
                <div className="aicheck__secondaryTitle" style={{"fontWeight":"normal"}}>Plagiarism: <span className='task__Low' style={{"fontWeight":"bold","marginLeft":"1rem"}}>Low</span></div>
                <div className="aicheck__secondaryTitle" style={{"fontWeight":"normal"}}>Relevance: <span className='task__High' style={{"fontWeight":"bold","marginLeft":"1rem"}}>High</span></div>
                <div className="aicheck__secondaryTitle" style={{"fontWeight":"normal"}}>Multiple Submissions: <span className='task__Low' style={{"fontWeight":"bold","marginLeft":"1rem"}}>No</span></div>
                <div className="aicheck__secondaryTitle" style={{"fontWeight":"normal"}}>Similarity to preious reports: <span className='task__Mid' style={{"fontWeight":"bold","marginLeft":"1rem"}}>Mid</span></div>
                
            </div>
        </div>
    )
}

export default AICheck
