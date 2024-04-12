import React from 'react'
import { Link } from 'react-router-dom'
import './SidebarDetail.css'
import { useDispatch } from 'react-redux'
import { setCurrentReport } from '../../../features/tasks/taskSlice'
import axios from 'axios'
const SidebarDetail = ({ title, secondaryDetail, description, link, id }) => {
    const dispatch = useDispatch();
    return (
        <Link className='sidebardetail' to={link}>
            <div className='sidebardetail__row1'>
                <div className="sidebardetail__title">{title}</div>
                <div className="sidebardetail__secondaryDetail" onClick={()=>{
                axios.get(process.env.REACT_APP_API_URL+'/getsinglereport',{
                    params:{
                        'id':id
                    }
                }).then((response)=>{

                    dispatch(setCurrentReport({...response.data.reports[0]}))
                })
        }}>{secondaryDetail? secondaryDetail:"View"}</div>
            </div>
            {
                description &&
                <div className="sidebardetail__row2">
                    {description}
                </div>
            }
        </Link>
    )
}

export default SidebarDetail
