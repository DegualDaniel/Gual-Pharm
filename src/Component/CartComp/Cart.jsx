// import pic1 from '../../assets/wts- 3.png'
import './Cart.css'

import React from 'react'

const Cart = ({img, name, text,para }) => {
  return (
    <div className='cart'> 
    
        <div className="card-cont">
            <div className="card-img"> 
                {img}
            </div>
            <div className="card-text"> 
                <h3>{name}</h3>  
                 <p> {text} </p>    
                <h3>{para}</h3>
            </div>
        </div>
    </div>
  )
}

export default Cart