import React, { useRef, useState } from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import SidebarDetail from '../../universalComponents/SidebarDetail/SidebarDetail'
import Task from '../../universalComponents/IndividualTask/Task'
import './ProfTaskManagement.css'
const ProfTaskManagement = () => {
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
            text: "Recommendations",
            link: "/professorhome/recommend"
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
    const deadlines = [
        {
            title: "Task 1",
            secondaryDetail: "01/23/24",
            description: "Lorem ipsum genereted demo description to help with displaying the text",
            priority: "High"
        },
        {
            title: "Task 2",
            secondaryDetail: "01/23/24",
            description: "Lorem ipsum genereted demo description to help with displaying the text",
            priority: "Low"
        },
        {
            title: "Task 3",
            secondaryDetail: "01/23/24",
            description: "Lorem ipsum genereted demo description to help with displaying the text",
            priority: "Mid"
        },
        {
            title: "Task 4",
            secondaryDetail: "01/23/24",
            description: "Lorem ipsum genereted demo description to help with displaying the text",
            priority: "High"
        }
    ]
    const studentList = [
        "Sankalp Kadam", "Nagendrababu Kalyanapu", "Purva Ingle", "Rajeswari Jeevanrao", "Neeharika Katragadda"
    ]
    return (
        <div className='taskmanagement'>
            <Navbar items={menuItems.reverse()} />
            <div className="studentdashboard__data">
                <div className="studentdashboard__metrics">

                    <div className="studentdashboard__title">Task Management</div>
                    <div className="studentdashboard__secondaryTitle">
                        Create New Task
                    </div>
                    <form className='proftaskmanagement__form'>
                        <label htmlFor="" className='proftaskmanagement__label'>
                            <span className='submit__spanStyle'>Task Title</span>
                            <input type="text" name="" pattern="^[A-Za-z\s]*$" id="taskTitle" className='proftaskmanagement__input' />
                        </label>
                        <label htmlFor="" className='proftaskmanagement__label'>
                            <span className='submit__spanStyle'>Task Details</span>
                            <textarea name="taskDetails" id="taskDetails" ></textarea>
                        </label>
                        <label htmlFor="" className='proftaskmanagement__label'>
                            <span className='submit__spanStyle'>Submission Date</span>
                            <input type="date" id="proftaskmanagementdate" className='proftaskmanagement__input' />
                        </label>
                        <label htmlFor="" className='proftaskmanagement__label'>
                            <span className='submit__spanStyle'>Submission Date</span>
                            <input type="text" id="proftaskmanagementdate" className='proftaskmanagement__input' placeholder='Click to Select student' onClick={toggleDropDown} value={selectedValue} />
                            <div className="dropdown" ref={dropDownref}>
                                {
                                    studentList.map((student, index) => <p className='dropdown__item' key={index} id={student} onClick={() => { setSelectedValue(student); toggleDropDown() }}>{student}</p>)
                                }
                            </div>
                        </label>
                        <button className='submitreport__submitBtn'>Assign</button>
                    </form>

                </div>
                <div className='studentdashboard__deadline'>
                    <div className='studentdashboard__secondaryTitle'>
                        Assigned Tasks
                    </div>
                    {
                        deadlines.map((deadline, index) => <SidebarDetail title={deadline.title} secondaryDetail={deadline.secondaryDetail} description={deadline.description} key={index} />)
                    }
                </div>
            </div>

        </div>
    )
}

export default ProfTaskManagement
