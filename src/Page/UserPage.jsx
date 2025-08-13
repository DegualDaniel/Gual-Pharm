// import React, { useEffect, useState } from 'react'
import Userform from '../Component/UserForm/Userform'
import { useLocation } from "react-router-dom"; 
// import './UserForm.css' 
import pay1 from "../../src/assets/sponsor2.png"
import pay2 from "../../src/assets/sponsor3.png"
import pay3 from "../../src/assets/sponsor4.png"
import pay4 from "../../src/assets/sponsor5-Paypal.png"



const UserPage = () => { 


  const location = useLocation();
  const selectedDrug = location.state?.drug;

  return (




    <div className='userpage-container'>
        <Userform />

        {/*  */}
        {selectedDrug && (
      <div className="selected-drug">
        <div className="drug-cont">
          <img src={selectedDrug.img} alt={selectedDrug.name} />
       
        </div>
         <p>{selectedDrug.name}</p>
        <p>${selectedDrug.price}</p>




            <div className='payment'>
              <div className='payment-txt'>
                <p>your personal data wou;d be used to 
                  process your order , deliver your product,
                  support your experience throughout this website.
                  
                </p>
                
              <p>WE ACCEPT :</p>
              </div>

              
              <div className='payment-imgCont'>
                <img src={pay1} alt="" />
                <img src={pay2} alt="" />
                <img src={pay3} alt="" />
                <img src={pay4} alt="" />
              </div>
          </div>
      </div>
    )}

 

    </div>
  )
}

export default UserPage
 