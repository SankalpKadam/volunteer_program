import React from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import './ProfessorDashboard.css'
import Table from '../universalComponents/Table/Table'
const ProfessorDashboard = () => {
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

                            <Table heading="Task List" rows={["Task 1", "Task 2", "Task 3", "Task 4"]} />
                        </div>
                        <div className="professordashboard__table1">

                            <Table heading="Students" rows={["Sankalp Kadam", "Purva Ingle", "Neeharika Kattragadda", "Rajeswari Jeevanrao", "Nagendrababu Kalyanapu"]} />
                        </div>
                        <div className="professordashboard__table1">

                            <Table heading="Reports" rows={["Report 1", "Report 2", "Report 3", "Report 4"]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessorDashboard
