import React from "react";
import "../../assets/Input.css";

const Input = ({ InputName, customClass }) => {
  return (
    <div className="input-details">
      <label className="label">{InputName}</label>
      <input
        placeholder="example@gmail.com"
        type="text"
        name="email"
        className={`input-email ${customClass}`} 
      />
    </div>
  );
};

export default Input;
