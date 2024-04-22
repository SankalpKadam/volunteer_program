import React, { useEffect, useState } from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import './StudentDashboard.css'
import Table from '../universalComponents/Table/Table'
import SidebarDetail from '../universalComponents/SidebarDetail/SidebarDetail'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../../features/tasks/taskSlice'
const StudentDashboard = () => {
    const loggedInStudent = useSelector((state) => state.userData);
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
    const [feedback, setFeedback] = useState("")
    useEffect(() => {
        const api_url = process.env.REACT_APP_API_URL;
        // console.log(userId);
        axios.get(api_url + '/getStudentTasks', {
            params: {
                "id": loggedInStudent.id
            }
        }).then((response) => {
            setallTasks(response.data.tasks)
            // console.log(allTasks);
            response.data.tasks.map((task)=>dispatch(addTask({task})))

        });
        axios.get(api_url + '/getfeedback', {
            params: {
                "id": loggedInStudent.id
            }
        }).then((response) => {
            setFeedback(response.data.feedback)
            // console.log(allTasks);
        });
    }, [])
    return (
        <div className='studentdashboard'>
            <Navbar items={menuItems.reverse()} />
            <div className='studentdashboard__data'>
                <div className='studentdashboard__metrics'>
                    <div className="studentdashboard__title">
                        Welcome {loggedInStudent.username} to the student portal
                    </div>
                    <div className="studentdashboard__welcometext">
                        This is the feedback on your recent report - {feedback}
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

                        <Table heading="Task List" rows={allTasks.slice(0,4)} />
                    </div>
                </div>
                <div className='studentdashboard__deadline'>
                    <div className='studentdashboard__secondaryTitle'>
                        Deadlines
                    </div>
                    <div className="taskmanagement__taskList">

                        {
                            allTasks.map((deadline, index) => !deadline.status && <SidebarDetail title={deadline.task_title} secondaryDetail={deadline.task_deadline} key={deadline.id} link={`tasks/${deadline.id}`} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard
