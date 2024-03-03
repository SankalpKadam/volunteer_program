import React from 'react'
import './Day.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Day = ({number, task, currentMonth, id}) => {
  return (
    <Link className='day' to={"/studenthome/tasks"}>
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
