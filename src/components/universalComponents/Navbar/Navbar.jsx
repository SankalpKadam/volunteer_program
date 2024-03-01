import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useMediaQuery } from 'react-responsive'
const Navbar = ({ items }) => {
    const isSmallScreen = useMediaQuery({ maxWidth: "1024px" })
    const menuRef = useRef();
    function showNavItems() {
        menuRef.current.classList.toggle("responsive__menu")
    }

    return (
        <div className='navbar'>
            <div className='navbar__title'>
                Volunteer Portal
            </div>
            <nav className='navbar__elements'>
                <ul className='navbar__list' ref={menuRef}>
                    {
                        // console.log(items)
                        items.map((item) => 
                            <li className='navbar__listItem'>
                                <Link to="/login" className='navbar__link'>
                                    {item}
                                </Link>
                            </li>
                        )
                    }
                    {/* <li className='navbar__listItem'>
                <Link to="/login" className='navbar__link'>
                    Login
                </Link>
            </li>
            <li className='navbar__listItem'>
                <Link to="/login" className='navbar__link'>
                    Login
                </Link>
            </li>
            <li className='navbar__listItem'>
                <Link to="/login" className='navbar__link'>
                    Login
                </Link>
            </li> */}
                </ul>
            </nav>
            <div className='navbar__hamburger' onClick={showNavItems}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
        </div>
    )
}

export default Navbar
