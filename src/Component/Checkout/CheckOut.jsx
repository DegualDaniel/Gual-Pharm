import React from 'react'
import './Checkout.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CheckOut = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state?.formData;
    const handleGoHome = () => {
        toast.success("Order successful, kindly check your mail.");
        setTimeout(() => {
            navigate("/");
        }, 2600);
    }

    const handleEdit = () => {
        toast.error("Opps!!");
        setTimeout(() => {
            navigate("/userform");
        }, 1300);
    }





  return (
    <div className='checkout-sec'>


      {formData ? (
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>Quantity:</strong> {formData.quantity}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>State:</strong> {formData.state}</p>
          <p><strong>City:</strong> {formData.city}</p>
          {/* Add more fields if needed */}
        </div>
      ) : (
        <p>No order data found.</p>
      )}
      

        <div className='checkout-btnCont'>
            <button className="btn-home" onClick={handleEdit}>Edit</button>
            <button className="btn-home" onClick={handleGoHome}>Confirm</button>
             
        </div>
        <ToastContainer />
    </div>
  )
}

export default CheckOut