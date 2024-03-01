import React from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import './HomepageComponent.css'
import { Link } from 'react-router-dom'
const HomepageComponent = () => {
  return (
    <div className='homepagecomponent'>
      <Navbar items={["Login"]}/>
      <div className='homepagecomponent__content'>
        <div className='homepagecomponent__img'>

          <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_b8826cc01484bd77dfb2070118eacbd0/volunteerhub.png" alt=" Volunteering Image" />
        </div>
        <div className="homepagecomponent__title">
          Welcome to the Volunteer portal
        </div>
        <div className='homepagecomponent__data'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam aliquid modi corporis ipsa, minus reprehenderit ullam, commodi possimus delectus beatae est ipsam soluta, harum aut aperiam culpa fuga provident!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem ratione cum ullam? Accusamus molestias perferendis deleniti, ullam quia incidunt quisquam dolorem autem ratione laudantium delectus, perspiciatis voluptas praesentium modi fuga?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique expedita adipisci illum velit perferendis ut sint atque officiis placeat a aspernatur, aliquam, reprehenderit, numquam iure suscipit vero. Quas, eius et!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, fugiat esse quaerat eligendi nihil expedita harum quo est modi tenetur illum quia omnis, rerum accusantium deserunt sint? Cum, eius sunt.
        </div>
      </div>
        <footer className='homepagecomponent__options'>
          <Link to="/about" className='homepagecomponent__links'>About</Link>
          <Link to="/services" className='homepagecomponent__links'>Services</Link>
          <Link to="/contact" className='homepagecomponent__links'>Contact</Link>
          <h5 style={{"color":"white","fontWeight":"normal"}}>

          Copyright Group5 WDM UTA
          </h5>
        </footer>
    </div>
  )
}

export default HomepageComponent
