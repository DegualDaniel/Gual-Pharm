import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './UserForm.css'
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const Userform = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    quantity: "",
    phone: "",
    state: "",
    city: "",
    zipCode: "",
    address: ""
  });

// HANDLING THE DATA CHANGES
const handleChange = (e) => { 
    const {name,value} = e.target;
    setFormData((prev) => ({...prev, [name]:value}));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
}
// FORM VALIDATION
 const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if (!formData.email) newErrors.email = "Email is required";
  if (!formData.firstName) newErrors.firstName = "First name is required";
  if (!formData.lastName) newErrors.lastName = "Last name is required";
  if (!formData.country) newErrors.country = "Country is required";
  if (!formData.quantity) newErrors.quantity = "Quantity is required";
  if (!formData.phone) newErrors.phone = "Phone number is required";
  if (!formData.state) newErrors.state = "State is required";
  if (!formData.city) newErrors.city = "City is required";
  // Add more if you want to validate zipCode, address, etc.
  return newErrors;
}



// HANDLING THE FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }
    console.log("Form Submitted:", formData); 

    alert("Order details submitted successfully!");
    toast.success("Order details submitted successfully!");

      navigate("/checkout", { state: { formData } });
 
  };


  return (
    <div className='order-form'> 
    <div className='order-form-header'>
      <h1>Complete Your Order</h1>
    </div>
    {/* FORM SECTION */}
        <form onSubmit={handleSubmit} >
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span className="form-error">{errors.firstName}</span>}

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span className="form-error">{errors.lastName}</span>}

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />
        {errors.country && <span className="form-error">{errors.country}</span>}

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="1"
        />
        {errors.quantity && <span className="form-error">{errors.quantity}</span>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="form-error">{errors.phone}</span>}

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        {errors.state && <span className="form-error">{errors.state}</span>}

        <input
          type="text"
          name="city"
          placeholder="Town / City"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <span className="form-error">{errors.city}</span>}

        <button className="form-btn" type="submit">
          Continue
        </button>
      </form>
    </div>
  )
}

export default Userform