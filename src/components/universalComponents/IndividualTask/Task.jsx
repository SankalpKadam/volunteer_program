import React from 'react'
import { Link } from 'react-router-dom'
import './Task.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCompleted } from '../../../features/tasks/taskSlice'
import axios from 'axios'
const Task = ({title, description, priority, deadline,id}) => {
    const dispatch = useDispatch();

    const setTaskStatus = ()=>{
        
        const api_url = process.env.REACT_APP_API_URL;
        axios.post(api_url+'/updatetaskstatus',{
            "id":id
        }).then((response)=>dispatch(setCompleted({status:true})))
    }
    if (priority == 1){
        priority = "High"
    }
    else if(priority == 2) {
        priority = "Mid"
    }
    else{
        priority = "Low"
    }
  return (
    <Link className='task'>
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
