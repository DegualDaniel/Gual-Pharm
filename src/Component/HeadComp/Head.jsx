import "./Head.css"
import Logo from "../../assets/Logo.svg"
import Menu from "../../assets/menuu.svg"
import Button from "../Button"
import { Link } from "react-router-dom"

const Head = () => {

  return (

        <nav>
            <div className="logo">
            <img src={Logo} alt=""/>
                <p> Gual </p> 
            </div>

            <ul>
                <li><Link to="/">Home</Link></li>
                {/* <li><a href="#">Home</a></li> */} 
                <li><Link to="/pill">PillPack</Link></li>
                <li><Link to="/">Health</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className="btn">
                {/* ADDING A BUTTON PROP */}
                <Button btnName='Sign Up | Sign In' /> 
            </div>
            <li className="menu"><a href="#"> 
                <img src={Menu} alt=""/>
            </a></li>
        </nav>
        
  )
}

export default Head




















