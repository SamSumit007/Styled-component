import React, { useRef, useState } from "react";
import CreditCard from "./CreditCard";
import "./styles.css";
import swal from 'sweetalert';

function CreditCardForm() {
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({});
  const form = useRef();

  const handleChange = (e) => {
    const inpName = e.target.name;
    setData({ ...data, [inpName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.reset();
    console.log(data);
    //handleChange();
    setFormData(data);

    swal({
        title: "Congratulations",
        text: "Your Card is Ready",
        icon: "success",
        button: "Ok",
      });
  };






  return (
    <div className="container">
      

      <div className="credit">
        <CreditCard formData={formData} />
      </div>

      <form className="form" onSubmit={handleSubmit} ref={form}>
        <h1>Payment details</h1>
        <div className="block-div">
          <label>CARDHOLDER NAME</label>
          <div className="child">
            <img
              className="user"
              src="https://cdn-icons-png.flaticon.com/512/875/875610.png"
              alt="user"
            />
            <input
              type="text"
              placeholder="cardholder name"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="block-div">
          <label>CARD NUMBER</label>
          <div className="child">
            <img
              className="user"
              src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
              alt="user"
            />
            <input
              type="number"
              placeholder="card number"
              name="number"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-div">
          <div className="block-div mm">
            <label>EXPIRY MONTH</label>
            <input
              type="text"
              placeholder="XX"
              name="cardMonth"
              onChange={handleChange}
              maxLength="2"
              className="x"
            />
          </div>

          <div className="block-div mm">
            <label>EXPIRY YEAR</label>
            <input
              type="text"
              placeholder="XXXX"
              name="cardYear"
              onChange={handleChange}
              maxLength="4"
              className="x"
            />
          </div>
          <div className="block-div mm">
            <label>CVV</label>
            <input
              type="number"
              placeholder="CVV"
              name="cvv"
              onChange={handleChange}
              maxLength="3"
              className="x"
            />
          </div>
        </div>
        <div className="submit-div">
          <h2>
            Payment amount: <span> ₹ 12 300</span>
          </h2>
          <button className="submit-btn">PAY</button>
        </div>
      </form>
    </div>
  );
  
}

export default CreditCardForm;