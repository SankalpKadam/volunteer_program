import React from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import './AboutPage.css'
import { Link } from 'react-router-dom'
const AboutPage = () => {
    return (
        <div className='aboutpage'>
            <Navbar items={[{text:"Login",link:"/login"}]} />
            <div className='aboutpage__content'>
                <div className='aboutpage__title'>
                    About the Portal
                </div>
                <div className="aboutpage__data">
                    1. Our portal represents a pivotal initiative devised to address the pressing issue of post-graduation unemployment, particularly among international students. Rooted in the government's commitment to supporting students in their professional endeavors, our volunteer program operates under the purview of academic departments, ensuring rigorous oversight and mentorship from experienced professors. <br /> <br /> 2. Graduates are encouraged to register using their university email addresses, subsequently undergoing email verification to authenticate their accounts. Upon accessing the platform, graduates are greeted with personalized dashboards, offering comprehensive insights into their assigned tasks, deadlines, and progress. Furthermore, the platform facilitates seamless communication between graduates and professors, enabling task assignment, submission of weekly reports, and constructive feedback mechanisms. Leveraging cutting-edge technologies such as React for frontend development and Laravel and Node for backend infrastructure, our project is meticulously planned and executed by a dedicated team of five members. Each team member is assigned specific responsibilities aligned with high-level requirements, ensuring the smooth integration of diverse functionalities and the implementation of robust security measures. <br /> <br /> 3. Notably, our platform incorporates AI-powered cheating detection mechanisms to safeguard the integrity of student reports, underscoring our commitment to fostering a transparent and ethical volunteering environment. With a steadfast focus on user experience and functionality, our portal represents a beacon of opportunity for graduates embarking on their professional journeys, offering them invaluable support and resources to thrive in today's competitive job market.
                </div>
            </div>
            <footer className='aboutpage__options'>
                <Link to="/about" className='aboutpage__links'>About</Link>
                <Link to="/services" className='aboutpage__links'>Services</Link>
                <Link to="/contact" className='aboutpage__links'>Contact</Link>
                <Link to="https://pxi1063.uta.cloud/blog" className='homepagecomponent__links' >Blog</Link>
                <h5 style={{ "color": "white", "fontWeight": "normal" }}>

                    Copyright Group 5 WDM UTA
                </h5>
            </footer>
        </div>
    )
}

export default AboutPage
