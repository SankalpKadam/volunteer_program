import React, { useRef, useState } from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import './Recommendations.css'
const Recommendations = () => {
    const [selectedValue, setSelectedValue] = useState("Click to select student");
    const dropDownref = useRef();
    function toggleDropDown(params) {
        dropDownref.current.classList.toggle("showDropDown")
    }
    const menuItems = [
        {
            text: "Home",
            link: "/professorhome"
        },
        {
            text: "Tasks",
            link: "/professorhome/tasks"
        },
        {
            text: "Reports",
            link: "/professorhome/report"
        },
        {
            text: "Logout",
            link: "/logout"
        }
    ]
    const studentList = [
        "Sankalp Kadam", "Nagendrababu Kalyanapu", "Purva Ingle", "Rajeswari Jeevanrao", "Neeharika Katragadda"
    ]
    return (
        <div className='recommendation'>
            <Navbar items={menuItems.reverse()} />
            <div className="recommendation__data">
                <div className="recommendation__title">Recommendation Form</div>
                <form className="recommendation__form">
                    <label htmlFor="" className='recommendation__label'>
                        <span className='recommendation__inputSpan'>Professor Name</span>
                        <input type="text" name="" pattern="^[A-Za-z\s]*$" id="name" className='recommendation__input' />
                    </label>
                    <label htmlFor="" className='recommendation__label'>
                        <span className='recommendation__inputSpan'>Task Details</span>
                        <textarea name="taskDetails" id="taskDetails" ></textarea>
                    </label>
                    <label htmlFor="" className='recommendation__label'>
                        <span className='submit__spanStyle'>Recommendation For</span>
                        <input type="text" id="proftaskmanagementdate" className='proftaskmanagement__input' placeholder='Click to Select student' onClick={toggleDropDown} value={selectedValue} />
                        <div className="dropdown" ref={dropDownref}>
                            {
                                studentList.map((student, index) => <p className='dropdown__item' key={index} id={student} onClick={() => { setSelectedValue(student); toggleDropDown() }}>{student}</p>)
                            }
                        </div>
                    </label>
                    <button className='submitreport__submitBtn'>Generate Letter</button>

                </form>
            </div>
        </div>
    )
}

export default Recommendations
