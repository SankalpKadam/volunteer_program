import React from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './Servicespage.css'
const Servicespage = () => {
    return (
        <div className='servicespage'>
            <Navbar items={[{text:"Login",link:"/login"}]} />
            <div className='servicespage__content'>
                <div className="servicespage__title">
                    Services offered by the portal
                </div>
                <div className="servicespage__data">
                    <b>
                        User Registration and Authentication:
                    </b>
                    <br />
                    Registration using university email addresses.
                    Email verification for registration.
                    Login using registered credentials.
                    <b>
                    <br />

                        Dashboard for Graduates:
                    </b>
                    <br />
                    Progress tracking, displaying completed tasks, hours worked, and deadlines.
                    Integration of an interactive calendar highlighting start date and task deadlines.
                    Ability to submit weekly reports.
                    <b>
                    <br />

                        Professor's Dashboard:
                    </b>
                    <br />

                    Task assignment to graduates.
                    Review of submitted weekly reports.
                    Feedback provision on reports.
                    Generation of recommendation letters for supervised students.
                    <b>
                    <br />

                        Task Management:
                    </b>
                    <br />

                    View of assigned tasks with details, deadlines, and priorities.
                    Ability to mark tasks as complete and add progress notes.
                    Real-time task status updates.
                    <b>
                    <br />

                        Weekly Reports and AI Anti-Cheating Mechanism:
                    </b>
                    <br />

                    Submission of weekly reports with work summary and justification of hours.
                    Attachment upload for supporting documents.
                    Implementation of anti-cheating measures, including text analysis, suspicious activity monitoring, rate limiting, and regular updates.
                    <b>
                        <br />
                        Chat Functionality:
                    </b>
                    <br />

                    Implementation of a chat feature using Node.js.
                    Communication capability for volunteers among themselves and with supervisors.
                </div>
            </div>
            <footer className='aboutpage__options'>
          <Link to="/about" className='aboutpage__links'>About</Link>
          <Link to="/services" className='aboutpage__links'>Services</Link>
          <Link to="/contact" className='aboutpage__links'>Contact</Link>
          <h5 style={{"color":"white","fontWeight":"normal"}}>

          Copyright Group5 WDM UTA
          </h5>
        </footer>
        </div>
    )
}

export default Servicespage
