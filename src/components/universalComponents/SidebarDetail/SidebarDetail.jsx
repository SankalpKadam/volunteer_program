import React from 'react'
import { Link } from 'react-router-dom'
import './SidebarDetail.css'
const SidebarDetail = ({ title, secondaryDetail, description, link }) => {
    return (
        <Link className='sidebardetail' to={link}>
            <div className='sidebardetail__row1'>
                <div className="sidebardetail__title">{title}</div>
                <div className="sidebardetail__secondaryDetail">{secondaryDetail}</div>
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
