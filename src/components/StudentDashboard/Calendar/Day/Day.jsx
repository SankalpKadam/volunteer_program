import React from 'react'
import './Day.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Day = ({number, task, currentMonth, id}) => {
  return (
    <Link className='day' to={task&&`/studenthome/tasks/${task.task.id}`}>
      <div className='day__date'>
        {number}
      </div>
      {
        task &&
      <div className="day__task">{task.task.task_title}</div>
      }
    </Link>
  )
}

export default Day
