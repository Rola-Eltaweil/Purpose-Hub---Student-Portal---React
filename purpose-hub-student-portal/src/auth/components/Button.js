import React from "react";
import "../../assets/Button.css";

const Button = ({ ButtonName, customClass }) => {
  return (
    <div className={`login-btn btn-background ${customClass}`}>
      <button className={`btn-login btn-send btn-background ${customClass}`}>
        {ButtonName}
      </button>
    </div>
  );
};

export default Button;
