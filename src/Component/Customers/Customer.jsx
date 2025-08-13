import React from 'react'
import './Customer.css'
import star from '../../assets/five-stars-jade.svg'

const Customer = () => {
  return (
    <div className='customer-cont'> 
        
         <h1> What customers are saying  </h1>

          <div className="comment-sec">
                    <div className="comment-cont">
          <div className='comment-box1'>
            <img src={star} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci, possimus tempora laborum quia assumenda.</h2>
            <p>- Degual D, Gual Pharmaceutical customer</p>
          </div>
        </div>
        {/*  */}
                <div className="comment-cont">
          <div className='comment-box1'>
            <div><img src={star} alt="" /></div>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci, possimus tempora laborum quia assumenda.</h2>
            <p>- Degual D, Gual Pharmaceutical customer</p>
          </div>
        </div>
        {/*  */}
                <div className="comment-cont">
          <div className='comment-box1'>
            <div><img src={star} alt="" /></div>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci, possimus tempora laborum quia assumenda.</h2>
            <p>- Degual D, Gual Pharmaceutical customer</p>
          </div>
        </div>
        {/*  */}
                <div className="comment-cont">
          <div className='comment-box1'>
            <div><img src={star} alt="" /></div>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci, possimus tempora laborum quia assumenda.</h2>
            <p>- Degual D, Gual Pharmaceutical customer</p>
          </div>
        </div>
          </div>
    </div>
  )
}

export default Customer