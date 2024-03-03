import React from 'react'
import { Link } from 'react-router-dom'
import './Task.css'
const Task = ({title, description, priority, deadline}) => {
  return (
    <Link className='task' to={"detailed"}>
            <div className='task__row1'>
                <div className="task__title">{title}
                {/* <span style={{"marginLeft":"1rem","fontSize":"var(--text-sm)","fontWeight":"normal"}}>Priority:</span>  */}
                <span className={`task__${priority} task__priority`}>{priority}</span></div>
                <div className="task__secondaryDetail">{deadline}</div>
                <button className='task__completedBtn'>Mark as Completed</button>
            </div>
            {
                description &&
                <div className="task__row2">
                    {description}
                </div>
            }
    </Link>
  )
}

export default Task
