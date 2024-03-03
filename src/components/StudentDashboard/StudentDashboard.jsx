import React from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import './StudentDashboard.css'
import Table from '../universalComponents/Table/Table'
import SidebarDetail from '../universalComponents/SidebarDetail/SidebarDetail'
import { useSelector } from 'react-redux'
const StudentDashboard = () => {
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
    const allTasks = useSelector((state) => state.taskData.Tasks)

    return (
        <div className='studentdashboard'>
            <Navbar items={menuItems.reverse()} />
            <div className='studentdashboard__data'>
                <div className='studentdashboard__metrics'>
                    <div className="studentdashboard__title">
                        Welcome to the student portal
                    </div>
                    <div className="studentdashboard__welcometext">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta harum animi voluptatem quod ipsa. Similique maxime, soluta suscipit architecto asperiores voluptatibus nisi vitae corrupti error, dicta velit enim est nostrum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequatur maiores esse. Nemo asperiores repudiandae ut, excepturi repellat cumque impedit itaque ipsa, illum dolor vitae nisi recusandae sit veritatis voluptas?
                    </div>
                    <div className="studentdashboard__secondaryTitle">
                        Progress
                    </div>
                    <div className="studentdashboard__table">
                        {/* <Table headings={["Tasks Completed","Hours Worked"]} rows={[["15","20"]]}/> */}
                        <div className='studentdashboard__tableHeader'>
                            <div className="studentdashboard__tableIndividualHeader">
                                Tasks Completed
                            </div>
                            <div className='studentdashboard__tableData'>
                                15
                            </div>
                        </div>
                        <div className='studentdashboard__tableHeader'>
                            <div className="studentdashboard__tableIndividualHeader">
                                Hours Worked
                            </div>
                            <div className='studentdashboard__tableData'>
                                20
                            </div>
                        </div>

                    </div>
                    <div className="studentdashboard__secondaryTitle">
                        Tasks
                    </div>
                    <div className='studentdashboard__tasklist'>

                        <Table heading="Task List" rows={allTasks} />
                    </div>
                </div>
                <div className='studentdashboard__deadline'>
                    <div className='studentdashboard__secondaryTitle'>
                        Deadlines
                    </div>
                    <div className="taskmanagement__taskList">

                        {
                            allTasks.map((deadline, index) => !deadline.status && <SidebarDetail title={deadline.title} secondaryDetail={deadline.deadline} key={index} link={"/studenthome/detailed"} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard
