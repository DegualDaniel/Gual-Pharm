import React, { use } from 'react'
import './About.css'
import { useNavigate } from 'react-router-dom'




const About = () => {
  const navigate = useNavigate();
  const handleServices = () => {
    navigate("/pill");
  }

  return (
    <div className='about-sec'>
        <div className="about-title">
            <h3>
                About Us
            </h3>
        </div>
        <div className="abt-cont">
  
            <div className="about-text">
                <p>
                    We are a leading pharmaceutical company dedicated to improving global health through innovative medicines and healthcare solutions. Our mission is to provide high-quality, affordable medications that enhance the quality of life for patients worldwide. With a commitment to research and development, we strive to address unmet medical needs and contribute to the advancement of healthcare.
                </p>
                <p> 
                        Your health, our priority — bringing trusted medication to your door. 
                </p>
            </div>
        </div>
        <div className="abt-service">
            <button onClick={handleServices}>Our Services</button>
        </div>
    </div>
  )
}

export default About