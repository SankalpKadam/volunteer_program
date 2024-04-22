import React, { useEffect, useState } from 'react'
import './DetailedTask.css'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const DetailedTask = () => {
    const {id} = useParams();
    const [task, setTask] = useState({});
    const navigate = useNavigate();
    const deleteTask = ()=>{
        axios.post(process.env.REACT_APP_API_URL+'/deleteTask',{
            'id':id
        }).then((response)=>{
            if(response.status == 200){
                navigate('/professorhome/tasks')
            }
            else{
                alert("Task not deleted")
            }
        }).catch((err)=>console.log(err))
    }

    // console.log(id);
    useEffect(() => {
      console.log(id);
      axios.get(process.env.REACT_APP_API_URL + '/getTask', {
          params: {
              'id': id
          }
      }).then((response) => {
          console.log(response);
          setTask(response.data.task)
      }
      );
  },[])
    const authUser = useSelector((state) => state.userData.type)
    return (
        <div className='detailedtask'>
            <div className="studentdashboard__title" style={{ "color": "white" }}>Task Details</div>
            <div className="studentdashboard__secondaryTitle" style={{ "color": "white" }}>Task Name :
                <div className='detailedtask__info' style={{ "color": "black" }}>
                    {console.log(task)}
                    {task.task_title}

                </div>
            </div>
            <div className="studentdashboard__secondaryTitle" style={{ "color": "white" }}>Task Start Date :
                <div className='detailedtask__info' style={{ "color": "black" }}>
                    {task.task_startdate}

                </div>
            </div>
            <div className="studentdashboard__secondaryTitle" style={{ "color": "white" }}>Task End Date :
                <div className='detailedtask__info' style={{ "color": "black" }}>
                    {task.task_deadline}

                </div>
            </div>
            <div className="studentdashboard__secondaryTitle" style={{ "color": "white" }}>Task Details :
                <div className='detailedtask__info' style={{ "color": "black", "width": "80%", "display": "block" }} >
                    {task.task_description}

                </div>
            </div>
            <div className="studentdashboard__secondaryTitle" style={{ "color": "white" }}>Task Status :
                <div className='detailedtask__info' style={{ "color": "black" }}>
                    {task.task_status ? "Completed" : "Pending"}

                </div>
            </div>
            {authUser == "professor" && <button className='detailedtask__submitBtn' onClick={deleteTask}>Delete</button>}
        </div>
    )
}

export default DetailedTask
