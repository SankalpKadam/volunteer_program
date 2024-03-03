import React from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import './ProfessorDashboard.css'
import Table from '../universalComponents/Table/Table'
import { useSelector } from 'react-redux'
const ProfessorDashboard = () => {
    const allTasks = useSelector((state)=>state.taskData.Tasks)
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
    return (
        <div className='professordashboard'>
            <Navbar items={menuItems.reverse()} />
            <div className="professordashboard__data">
                <div className="professordashboard__content">

                    <div className="professordashboard__title">
                        Welcome to the Professor portal
                    </div>
                    <div className="professordashboard__welcometext">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta harum animi voluptatem quod ipsa. Similique maxime, soluta suscipit architecto asperiores voluptatibus nisi vitae corrupti error, dicta velit enim est nostrum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequatur maiores esse. Nemo asperiores repudiandae ut, excepturi repellat cumque impedit itaque ipsa, illum dolor vitae nisi recusandae sit veritatis voluptas?
                    </div>
                    <div className="professordashboard__tables">
                        <div className="professordashboard__table1">

                            <Table heading="Task List" rows={allTasks} />
                        </div>
                        <div className="professordashboard__table1">

                            <Table heading="Students" rows={["Sankalp Kadam", "Purva Ingle", "Neeharika Kattragadda", "Rajeswari Jeevanrao", "Nagendrababu Kalyanapu"]} />
                        </div>
                        <div className="professordashboard__table1">

                            <Table heading="Reports" rows={[{title:"Report 1",link:"/professorhome/reportviewer"}, {title:"Report 2",link:"/professorhome/reportviewer"}, {title:"Report 3",link:"/professorhome/reportviewer"}, {title:"Report 4",link:"/professorhome/reportviewer"}]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessorDashboard
