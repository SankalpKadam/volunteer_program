import React from 'react'
import { Link } from 'react-router-dom'
import './SidebarDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearMessages, setChatWith, setCurrentReport, setMessages } from '../../../features/tasks/taskSlice'
import axios from 'axios'
const SidebarDetail = ({ title, secondaryDetail, description, link, id, report }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state)=>state.userData);
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
        dispatch(setChatWith({
            id:id,
            name:title
        }))
        axios.get(process.env.REACT_APP_CHAT_API_URL + 'getmessages', {
            params: {
                userid: id,
                senderid:isLoggedIn.id
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
