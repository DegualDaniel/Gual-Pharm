import "./Pill.css";
import drug1 from "../../assets/drug6.jpg";
import drug3 from "../../assets/drug6.jpg";
import drug4 from "../../assets/drug5.jpg";
import drug5 from "../../assets/drug3.jpg";  
import React from "react";
import { useNavigate } from "react-router-dom";

const Pill = () => {
  const drugs = [
    { name: "Acetaminophen", price: 130, img: drug1 },
    { name: "Ibuprofen", price: 80, img: drug5 },
    { name: "Bupropion", price: 113, img: drug3 },
    { name: "Ciprofloxacin", price: 210, img: drug4 },
  ];

  const navigate = useNavigate();
  
  const handlePurchase = (drug) => {
    // navigate("/userform",);
    navigate("/userform", { state: { drug } });
  };

  function DrugCard({ name, price, img, onPurchase }) {
    return (
      <div className="pill-bx1">
        <div className="drug-imgCont">
          <img src={img} alt={name} />
        </div>
        <div className="pill-box">
          <div className="pill-price">
            <p>{name}</p>
            <p>${price}</p>
          </div>
          <div className="pill-btn">
            {/* <button onClick={onPurchase}>Purchase</button> */}
          <button onClick={() => onPurchase({ name, price, img })}>Purchase</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pill-sec">
      <div className="pill-text-cont">
        <div className="pill-text">
          <h1>PILL PACK</h1>
          <h1>Prescription Made Easy</h1>
          <p>Your meds, fast, secure, and delivered to your door.</p>
        </div>
      </div>
      <div className="cards">
        <div className="pill-cont1-txt">
          <p>Available Stocks</p>
        </div>
        <div className="pill-cards">
          {drugs.map((drug, idx) => (
            <DrugCard
              key={idx}
              name={drug.name}
              price={drug.price}
              img={drug.img}
              onPurchase={handlePurchase}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pill;








