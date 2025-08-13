// import pic1 from '../../assets/wts- 3.png'
import './Cart.css'

import React from 'react'

const Cart = ({img, name, text,para }) => {
  return (
    <div className='cart'> 
    
        <div className="card-cont">
            <div className="card-img">
                {/* <img src={pic1} alt="" /> */}
                {/* <img src={img} alt="" /> */}
                {img}
            </div>
            <div className="card-text">
                {/* <h3>Prime Savings</h3> */}
                <h3>{name}</h3>
                {/* <p>Save Up to 80%* with discount for
                    Prime <br/> members.
                </p> */}


                 <p> {text} </p>   
                {/* <p><a href="#">{text}</a></p> */}
                {/* <h3><a href="#">
                    Learn more about Prime savings     
                </a></h3> */}
                <h3>{para}</h3>
            </div>
        </div>
    </div>
  )
}

export default Cart