import React from 'react'
import { Link } from 'react-router-dom'
import './Task.css'
import { useDispatch } from 'react-redux'
const Task = ({title, description, priority, deadline}) => {
    const dispatch = useDispatch();
    const setTaskStatus = ()=>{
        
    }
  return (
    <Link className='task' to={"detailed"}>
            <div className='task__row1'>
                <div className="task__title">{title}
                {/* <span style={{"marginLeft":"1rem","fontSize":"var(--text-sm)","fontWeight":"normal"}}>Priority:</span>  */}
                <span className={`task__${priority} task__priority`}>{priority}</span></div>
                <div className="task__secondaryDetail">{deadline}</div>
                <button className='task__completedBtn' onClick={setTaskStatus}>Mark as Completed</button>
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
