import React from 'react'
import './DetailedTask.css'
import { useSelector } from 'react-redux'
const DetailedTask = ({ title="Create Demo", deadline="2024-03-25", description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.", status=false }) => {
    const authUser = useSelector((state)=>state.userData.type)
    return (
        <div className='detailedtask'>
            <div className="studentdashboard__title" style={{"color":"white"}}>Task Details</div>
            <div className="studentdashboard__secondaryTitle" style={{"color":"white"}}>Task Name :
                <div className='detailedtask__info' style={{"color":"black"}}>
                    {title}

                </div>
            </div>
            <div className="studentdashboard__secondaryTitle" style={{"color":"white"}}>Task Start Date :
                <div className='detailedtask__info' style={{"color":"black"}}>
                    {"03/24/24"}

                </div>
            </div>
            <div className="studentdashboard__secondaryTitle" style={{"color":"white"}}>Task End Date :
                <div className='detailedtask__info' style={{"color":"black"}}>
                    {deadline}

                </div>
            </div>
            <div className="studentdashboard__secondaryTitle" style={{"color":"white"}}>Task Details :
                <div className='detailedtask__info' style={{"color":"black","width":"80%","display":"block"}} >
                    {description}

                </div>
            </div>
            <div className="studentdashboard__secondaryTitle" style={{"color":"white"}}>Task Status :
                <div className='detailedtask__info' style={{"color":"black"}}>
                    {status?"Completed":"Pending"}

                </div>
            </div>
            {authUser=="professor" && <button className='detailedtask__submitBtn'>Delete</button>}
        </div>
    )
}

export default DetailedTask
