import React, { useEffect } from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import './HomepageComponent.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const HomepageComponent = () => {
  const navigate = useNavigate();
  const loggedin = useSelector((state) => state.loginUser.email) //use state.<name_of_reducer>
  const dispatch = useDispatch()
  // useEffect(() => {
  //   console.log(loggedin);
  //   if (!loggedin) {
  //     navigate("/login")
  //   }
  // }, [])
  return (
    <div className='homepagecomponent'>
      <Navbar items={["Login"]} />
      <div className='homepagecomponent__content'>
        <div className='homepagecomponent__img'>

          <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_b8826cc01484bd77dfb2070118eacbd0/volunteerhub.png" alt=" Volunteering Image" />
        </div>
        <div className="homepagecomponent__bgclass">

          <div className="homepagecomponent__title">
            Welcome to the Volunteer portal
          </div>
          <div className='homepagecomponent__data'>
            Welcome to our comprehensive portal aimed at addressing the challenging transition recent graduates face in finding employment. Our platform serves as a multifaceted solution, specifically designed to support international students who often encounter obstacles in securing jobs post-graduation. Through strategic collaboration with various government departments, we've established a robust volunteer program overseen by professors, offering graduates valuable opportunities to gain experience and enhance their skills while contributing to meaningful projects. The portal streamlines the process of registration, task allocation, progress monitoring, and reporting, fostering a conducive environment for both graduates and professors to engage effectively. With user-friendly interfaces and intuitive functionalities, our portal endeavors to empower graduates in navigating the intricate landscape of job hunting, ultimately facilitating their transition into the workforce
          </div>
        </div>
      </div>
      <footer className='homepagecomponent__options'>
        <Link to="/about" className='homepagecomponent__links'>About</Link>
        <Link to="/services" className='homepagecomponent__links'>Services</Link>
        <Link to="/contact" className='homepagecomponent__links'>Contact</Link>
        <h5 style={{ "color": "white", "fontWeight": "normal" }}>
          Copyright Group5 WDM UTA
        </h5>
      </footer>
    </div>
  )
}

export default HomepageComponent
