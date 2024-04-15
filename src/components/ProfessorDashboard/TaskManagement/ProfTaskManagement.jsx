import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import SidebarDetail from '../../universalComponents/SidebarDetail/SidebarDetail'
import Task from '../../universalComponents/IndividualTask/Task'
import './ProfTaskManagement.css'
import { useDispatch, useSelector } from 'react-redux'
// import { addTask } from '../../../features/tasks/taskSlice'
import axios from 'axios'
const ProfTaskManagement = () => {
    const [selectedValue, setSelectedValue] = useState("Click to select student");
    const [taskTitle, setTaskTitle] = useState("");
    const [selectedName, setSelectedName] = useState("Click to select student");
    const [taskDescription, setTaskDescription] = useState("");
    const [submissionDate, setSubmissionDate] = useState("")
    const [allTasks, setAllTasks] = useState([]);
    const loggedInProfessor = useSelector((state)=>state.userData);
    const dropDownref = useRef();
    const dropDownref2 = useRef();
    const dispatch = useDispatch();
    const [priority, setPriority] = useState(0); 
    function toggleDropDown(params) {
        dropDownref.current.classList.toggle("showDropDown")
    }
    function toggleDropDown2(){

        dropDownref2.current.classList.toggle("showDropDown")
    }
    function addNewTask(e) {
        e.preventDefault();
        if (selectedValue!="Click to select student" && taskTitle && taskDescription && submissionDate && priority) {
            const api_url = process.env.REACT_APP_API_URL+'/savetask';
            axios.post(api_url,{
                'title':taskTitle,
                'description':taskDescription,
                'deadline':submissionDate,
                'graduate_id':selectedValue,
                'priority':priority,
                'professor_id':loggedInProfessor.id
            }).then((response)=>{
                console.log(response.data);
                if(response.data.status != 200){
                    alert("New task was not added")
                }else{

                    // dispatch(addTask({
                    //     id:allTasks.length,
                    //     title:taskTitle,
                    //     description:taskDescription,
                    //     deadline:submissionDate,
                    // }))
                }
            })
            setSelectedValue("Click to select student")
            setSelectedName("Click to select student")
            setTaskDescription("")
            setTaskTitle("")
            setSubmissionDate("")
            setPriority(0)
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
        },
        {
            text:"Chat",
            link:"/professorhome/chat"
        }
    ]
    
    // const studentList = [
    //     "Sankalp Kadam", "Nagendrababu Kalyanapu", "Purva Ingle", "Rajeswari Jeevanrao", "Neeharika Katragadda"
    // ]
    const [studentList, setStudentList] = useState([]);
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_URL+'/volunteerstudents').then((response)=>{
            setStudentList(response.data.students);
        })
        axios.get(process.env.REACT_APP_API_URL+'/getProfessorTasks',{params:{
            'id':loggedInProfessor.id
        }}).then((response)=>{
            setAllTasks(response.data.tasks);
        })
    },[])
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
                            <input type="date" id="proftaskmanagementdate" className='proftaskmanagement__input'
                            pattern="\d{4}-\d{2}-\d{2}" onChange={(e)=>{
                                setSubmissionDate(e.target.value);
                            }}/>
                        </label>
                        <label htmlFor="" className='proftaskmanagement__label'>
                            <span className='submit__spanStyle'>Select Student</span>
                            <input type="text" id="proftaskmanagementdate" className='proftaskmanagement__input' placeholder='Click to Select student' onClick={toggleDropDown} value={selectedName} onChange={(e)=>{
                                setSelectedName(selectedName)
                            }}/>
                            <div className="dropdown" ref={dropDownref}>
                                {
                                    studentList.map((student, index) => <p className='dropdown__item' key={student.id} id={student.id} onClick={() => { setSelectedValue(student.id);setSelectedName(student.student_name); toggleDropDown() }}>{student.student_name}</p>)
                                }
                            </div>
                        </label>
                        <label htmlFor="" className='proftaskmanagement__label'>
                            <span className='submit__spanStyle'>Select Priority</span>
                            <input type="text" id="proftaskmanagementdate" className='proftaskmanagement__input' placeholder='Click to Select student' onClick={toggleDropDown2} value={priority} onChange={(e)=>{
                                setPriority(priority)
                            }}/>
                            <div className="dropdown" ref={dropDownref2}>
                                {
                                    [1,2,3].map((priority, index) => <p className='dropdown__item' key={priority} id={priority} onClick={() => { setPriority(priority); toggleDropDown2() }}>{priority}</p>)
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
                                {console.log(allTasks)}
                    {
                        allTasks.map((deadline, index) => <SidebarDetail title={deadline.task_title} secondaryDetail={deadline.task_deadline} description={deadline.task_description.slice(0,50)+"..."} key={index} link={`${deadline.id}`}/>)
                    }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfTaskManagement
