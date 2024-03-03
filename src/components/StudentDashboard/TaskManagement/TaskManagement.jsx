import React from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import './TaskManagement.css'
import SidebarDetail from '../../universalComponents/SidebarDetail/SidebarDetail'
import Task from '../../universalComponents/IndividualTask/Task'
const TaskManagement = () => {
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
                            deadlines.map((deadline, index) => <Task title={deadline.title} deadline={deadline.secondaryDetail} priority={deadline.priority} description={"Lorem ipsum genereted demo description to help with displaying the text"} />)
                        }
                    </div>

                </div>
                <div className='studentdashboard__deadline'>
                    <div className='studentdashboard__secondaryTitle'>
                        Completed Tasks
                    </div>
                    <div className="taskmanagement__taskList">

                        {
                            deadlines.map((deadline, index) => <SidebarDetail title={deadline.title} secondaryDetail={deadline.secondaryDetail} description={deadline.description} key={index} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskManagement
