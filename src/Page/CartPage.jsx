// import './Cart.css'
// import '../Component/Cart.css'


import React from 'react'
import Cart from '../Component/CartComp/Cart'
import Img from '../assets/wts3.png'
import Img1 from '../assets/wts4.png'
import Img2 from '../assets/wts5.png' 
import Button from '../Component/Button'

const CartPage = () => {

    const card =[
                {
            img:<img src={Img} alt="" />,
            name:'Prime Savings',
            text:'Save Up to 80%* with discount for Prime members',
            para:'Learn more about Prime savings', 
        },
        {
            img:<img src={Img1} alt="" />,
            name:'RxPass',
            text:'Prime members, get as many eligible meds as you take for one $5-a-month subscription.** ',
            para:'Learn more about RxPass',
            // text:'Learn more about RxPass >',
        },
        {
            img:<img src={Img2} alt="" />,
            name:'Coupons',
            text:'We automatically apply eligible manufacturer coupons at checkout',
            para:'Learn more about coupons',
        }

    ]
  return (
    <div className='cards-container'>
        <div className="card-title">
            <h1>More ways to spend less</h1>
            <h3>From coupons to Prime member savings, we work hard
                to find you low prices. </h3>
        </div>
        <div className="card-wrapper">
        {
            card.map((item, idx) => 
                <Cart item{...item} />
            )
        }
        </div>
        <div>
            <Button className='style' btnName=' Explore all ways to save' />
           {/* <button className="btn-home">Sign up | Sign in </button> */}
        </div>

    </div>
  )
}

export default CartPage