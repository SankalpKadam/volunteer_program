import React, { useEffect } from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import './TaskManagement.css'
import SidebarDetail from '../../universalComponents/SidebarDetail/SidebarDetail'
import Task from '../../universalComponents/IndividualTask/Task'
import { useSelector } from 'react-redux'
const TaskManagement = () => {
    const allTasks = useSelector((state)=>state.taskData.Tasks)
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
        }
    ]
    
    useEffect(()=>{
        console.log(allTasks);
    },[])
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
                            allTasks.map((deadline, index) => !deadline.status && <Task title={deadline.title} deadline={deadline.deadline} priority={deadline.priority} description={deadline.description} id={index}/>)
                        }
                    </div>

                </div>
                <div className='studentdashboard__deadline'>
                    <div className='studentdashboard__secondaryTitle'>
                        Completed Tasks
                    </div>
                    <div className="taskmanagement__taskList">

                        {
                            allTasks.map((deadline, index) => deadline.status && <SidebarDetail title={deadline.title} secondaryDetail={deadline.deadline} description={deadline.description.slice(20,80)+"...."} key={index} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskManagement
