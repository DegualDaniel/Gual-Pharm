import Button from "../Button" 
import Bg from '../../assets/hero_packet.png'
import "./Home.css" 
import { useNavigate } from "react-router-dom"




const Home = () => {


  const navigate = useNavigate(); // <-- Add this hook
  
  const handleGoToPill = () => {
    navigate("/about");
  };












  return (
    <div className="home"> 

        <div className="home-cont">
          <h1>  Save Time, Save money, <br/> Stay healthy.  </h1>
          <h3> PillPack is now available on Gual Pharmacy.
            <span><a href="#"> Learn More </a></span> 
          </h3>
          <button onClick={handleGoToPill} className="btn-home">Get Started</button>

          {/* <Button className="btn-home" btnName='Sign up | Sign in ' /> */}
          <h4><a href="#">check if we accept your your 
            insurance </a>
          </h4>
          <p>
            {/* <img src={logo} alt="" /> */}
            Your health information is always protected 
          </p>
        </div>

        <div className="home-img">
            <img src={Bg} alt="" />
        </div>
    </div>
  )
}

export default Home