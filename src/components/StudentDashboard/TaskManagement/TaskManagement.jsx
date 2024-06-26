import React, { useEffect, useState } from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import './TaskManagement.css'
import SidebarDetail from '../../universalComponents/SidebarDetail/SidebarDetail'
import Task from '../../universalComponents/IndividualTask/Task'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addTask, setCompleted } from '../../../features/tasks/taskSlice'
const TaskManagement = () => {
    const loggedInStudent = useSelector((state) => state.userData)
    const isChanged = useSelector((state) => state.taskData.statuschanged)
    const dispatch = useDispatch();

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

    const [allTasks, setallTasks] = useState([]);
    useEffect(() => {
        const api_url = process.env.REACT_APP_API_URL;
        axios.get(api_url + '/getStudentTasks', {
            params: {
                "id": loggedInStudent.id
            }
        }).then((response) => {

            setallTasks(response.data.tasks)
            dispatch(setCompleted({status:false}))
            response.data.tasks.map((task)=>dispatch(addTask({task})))
        });
    }, [isChanged])
    return (
        <div className='taskmanagement'>
            <Navbar items={menuItems.reverse()} />
            <div className="studentdashboard__data">
                <div className="studentdashboard__metrics">

                    <div className="studentdashboard__title">Task Management</div>
                    <div className="studentdashboard__secondaryTitle">
                        Pending Tasks
                    </div>
                    <div className="taskmanagement__taskList">

                        {
                            allTasks.map((deadline, index) => !deadline.task_status && <Task title={deadline.task_title} deadline={deadline.task_deadline} priority={deadline.task_priority} description={deadline.task_description} id={deadline.id} key={deadline.id}/>)
                        }
                    </div>
                </div>
                <div className='studentdashboard__deadline'>
                    <div className='studentdashboard__secondaryTitle'>
                        Completed Tasks
                    </div>
                    <div className="taskmanagement__taskList">
                        {
                            allTasks.map((deadline, index) => deadline.task_status ? <SidebarDetail title={deadline.task_title} secondaryDetail={deadline.task_deadline} description={deadline.task_description.slice(0,50) + "...."} key={index} link={`${deadline.id}`} />:null)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskManagement
