import React, { useRef, useState } from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import SidebarDetail from '../../universalComponents/SidebarDetail/SidebarDetail'
import Task from '../../universalComponents/IndividualTask/Task'
import './ProfTaskManagement.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../../../features/tasks/taskSlice'
const ProfTaskManagement = () => {
    const [selectedValue, setSelectedValue] = useState("Click to select student");
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [submissionDate, setSubmissionDate] = useState("")
    
    const dropDownref = useRef();
    const allTasks = useSelector((state)=>state.taskData.Tasks);
    const dispatch = useDispatch();

    function toggleDropDown(params) {
        dropDownref.current.classList.toggle("showDropDown")
    }
    function addNewTask(e) {
        e.preventDefault();
        if (selectedValue!="Click to select student" && taskTitle && taskDescription && submissionDate) {
            dispatch(addTask({
                id:allTasks.length,
                title:taskTitle,
                description:taskDescription,
                deadline:submissionDate,
            }))
            setSelectedValue("Click to select student")
            setTaskDescription("")
            setTaskTitle("")
            setSubmissionDate("")
        }
        else{
            alert("Fill all the details");
        }
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
            text:"Tasks",
            link:"/professorhome/tasks"
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
                            <input type="text" name="" pattern="^[A-Za-z\s]*$" id="taskTitle" className='proftaskmanagement__input' value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}}/>
                        </label>
                        <label htmlFor="" className='proftaskmanagement__label'>
                            <span className='submit__spanStyle'>Task Details</span>
                            <textarea name="taskDetails" id="taskDetails" value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}></textarea>
                        </label>
                        <label htmlFor="" className='proftaskmanagement__label'>
                            <span className='submit__spanStyle'>Submission Date</span>
                            <input type="date" id="proftaskmanagementdate" className='proftaskmanagement__input' onChange={(e)=>{
                                setSubmissionDate(e.target.value);
                            }}/>
                        </label>
                        <label htmlFor="" className='proftaskmanagement__label'>
                            <span className='submit__spanStyle'>Submission Date</span>
                            <input type="text" id="proftaskmanagementdate" className='proftaskmanagement__input' placeholder='Click to Select student' onClick={toggleDropDown} value={selectedValue} onChange={(e)=>{
                                setSelectedValue(selectedValue)
                            }}/>
                            <div className="dropdown" ref={dropDownref}>
                                {
                                    studentList.map((student, index) => <p className='dropdown__item' key={index} id={student} onClick={() => { setSelectedValue(student); toggleDropDown() }}>{student}</p>)
                                }
                            </div>
                        </label>
                        <button className='submitreport__submitBtn' onClick={addNewTask}>Assign</button>
                    </form>

                </div>
                <div className='studentdashboard__deadline'>
                    <div className='studentdashboard__secondaryTitle'>
                        Assigned Tasks
                    </div>
                    <div className="taskmanagement__taskList">

                    {
                        allTasks.map((deadline, index) => <SidebarDetail title={deadline.title} secondaryDetail={deadline.deadline} description={deadline.description.slice(0,50)+"..."} key={index} link={"/professorhome/detailed"}/>)
                    }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfTaskManagement
