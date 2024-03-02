import React from 'react'
import './Day.css'
import { Link } from 'react-router-dom'
const Day = ({number, task, currentMonth, key}) => {
  return (
    <Link className='day' to={"/studenthome/detailedTask/1"}>
      <div className='day__date'>
        {number}
      </div>
      {
        task &&
      <div className="day__task">Task Title</div>
      }
    </Link>
  )
}

export default Day
