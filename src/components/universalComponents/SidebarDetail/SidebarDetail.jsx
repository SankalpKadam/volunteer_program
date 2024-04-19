import React from 'react'
import { Link } from 'react-router-dom'
import './SidebarDetail.css'
import { useDispatch } from 'react-redux'
import { clearMessages, setCurrentReport, setMessages } from '../../../features/tasks/taskSlice'
import axios from 'axios'
const SidebarDetail = ({ title, secondaryDetail, description, link, id, report }) => {
    const dispatch = useDispatch();
    const getSingleReport = () => {
        axios.get(process.env.REACT_APP_API_URL + '/getsinglereport', {
            params: {
                'id': id
            }
        }).then((response) => {

            dispatch(setCurrentReport({ ...response.data.reports[0] }))
        })
    }
    const getMessagesForUser = () => {
        axios.get(process.env.REACT_APP_CHAT_API_URL + 'getmessages', {
            params: {
                id: id
            }
        }).then((response) => {
            if (response.status == 200) {
                dispatch(clearMessages())
                response.data.map((message) =>{dispatch(setMessages({message }))})
            }
        }).catch((err) => console.log(err))
    }
    const decider = () => {
        if (report) {
            getSingleReport()
        } else {
            getMessagesForUser()
        }
    }
    return (
        <Link className='sidebardetail' to={link}>
            <div className='sidebardetail__row1'>
                <div className="sidebardetail__title">{title}</div>
                <div className="sidebardetail__secondaryDetail" onClick={decider}>{secondaryDetail ? secondaryDetail : "View"}</div>
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
