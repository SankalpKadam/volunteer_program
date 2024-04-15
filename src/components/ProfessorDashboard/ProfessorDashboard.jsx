import React, { useEffect, useState } from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import './ProfessorDashboard.css'
import Table from '../universalComponents/Table/Table'
import { useSelector } from 'react-redux'
import axios from 'axios'
const ProfessorDashboard = () => {
    const [allTasks, setAllTasks] = useState([]);
    const [allStudents, setAllStudent] = useState([]);
    const [allReports, setAllReport] = useState([]);
    const loggedInProfessor = useSelector((state)=>state.userData) 
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
    useEffect(()=>{
        const api_url = process.env.REACT_APP_API_URL;
        axios.get(api_url+'/getProfessorTasks',{
            params:{
                'id':loggedInProfessor.id
            }
        }).then((response)=>setAllTasks(response.data.tasks))
        axios.get(api_url+"/volunteerstudents",{
            params:{
               'id':loggedInProfessor.id 
            }
        }).then((response)=>setAllStudent(response.data.students));
        axios.get(api_url+"/getreports",{
            params:{
               'id':loggedInProfessor.id 
            }
        }).then((response)=>setAllReport(response.data.reports));
    },[])
    return (
        <div className='professordashboard'>
            <Navbar items={menuItems.reverse()} />
            <div className="professordashboard__data">
                <div className="professordashboard__content">

                    <div className="professordashboard__title">
                        Welcome to the Professor portal
                    </div>
                    <div className="professordashboard__welcometext">
                        Hello welcome to the professor portal. Here you can assign tasks to the students, see their submitted reports, give them feedback and many more functions. Get started
                    </div>
                    <div className="professordashboard__tables">
                        <div className="professordashboard__table1">
                            <Table heading="Task List" rows={allTasks} />
                        </div>
                        <div className="professordashboard__table1">

                            <Table heading="Students" rows={allStudents} />
                        </div>
                        <div className="professordashboard__table1">

                            <Table heading="Reports" rows={allReports} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessorDashboard
