//References - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth , https://derrickotte.medium.com/how-to-create-a-calendar-from-scratch-in-react-1f2db197454d
import React, { useEffect, useState } from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import './CalendarPage.css'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import createCalendarArray from './CreateCalendar'
import Day from './Day/Day'
const CalendarPage = () => {
    const menuItems = [{
        text: "Home",
        link: "/studenthome"
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

    const [currentDay, setCurrentDay] = useState(new Date());
    const [ daysToAddToCalendar, setDaysToAddToCalendar] = useState([]);
    //using month array to get current month
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    const backMonth = ()=>{
        const prevDate = new Date(currentDay.getFullYear(), currentDay.getMonth()-1,1)
        setCurrentDay(prevDate)
    }
    const nextMonth = ()=>{
        const nextDate = new Date(currentDay.getFullYear(), currentDay.getMonth()+1,1);
        setCurrentDay(nextDate)
    }

    useEffect(()=>{
        setDaysToAddToCalendar(createCalendarArray(currentDay))
    }, [currentDay])
    return (
        <div className='calendarpage'>
            <Navbar items={menuItems.reverse()} />
            <div className="calendarpage__data">
                <div className="calendarpage__title">Calendar</div>
                <div className="calendarpage__currentMonth">
                    <div className="calendarpage__traverse" onClick={backMonth}>

                        <ArrowBackIos fontSize='var(--text-base)'/>
                    </div>
                    <div className="calendarpage__actualMonth">

                        {months[currentDay.getMonth()]} {currentDay.getFullYear()}
                    </div>
                    <div className="calendarpage__traverse" onClick={nextMonth}>

                        <ArrowForwardIos fontSize='var(--text-base)' />
                    </div>
                </div>
                <div className='calendarpage__days'>
                    {
                        days.map((day, index) => <div className='calendarpage__singleDay'>{day}</div>)
                    }
                </div>
                <div className="calendarpage__dates">
                    {
                        daysToAddToCalendar.map((day, index) => <div className='calendarpage__individualDate' key={index}><Day number={day.number} task={day.task}/></div>)
                    }
                
                </div>
            </div>
        </div>
    )
}

export default CalendarPage
