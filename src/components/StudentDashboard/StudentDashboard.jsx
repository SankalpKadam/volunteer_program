import React from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import './StudentDashboard.css'
import Table from '../universalComponents/Table/Table'
const StudentDashboard = () => {
    const menuItems = [{
        text: "Calendar",
        link: "calendar"
    },
    {
        text: "Submit Reports",
        link: "submitreport"
    },
    {
        text: "Your Tasks",
        link: "tasks"
    },
    {
        text: "Logout",
        link: "/logout"
    }
    ]


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
                        <Table />
                    </div>
                </div>
                <div className='studentdashboard__deadline'>

                </div>
            </div>
        </div>
    )
}

export default StudentDashboard
