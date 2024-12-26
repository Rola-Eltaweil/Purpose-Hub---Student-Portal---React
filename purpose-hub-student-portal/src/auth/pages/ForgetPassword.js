import React from 'react'
import icon1 from "../../assets/LoginPage/images/Group 480956193.png";
import icon2 from "../../assets/LoginPage/images/Group 480956194.png";
import icon3 from "../../assets/LoginPage/images/Group 480956200.png";
import icon5 from "../../assets/LoginPage/images/Group 480956189.png";
import Button from '../components/Button';
import Input from '../components/Input';
import imageForgetPassword from '../../assets/ForgetPassword/Images/vecteezy_3d-male-character-thinking-and-working-on-a-laptop_24387906 1.png'
import '../../assets/ForgetPassword/style/ForgetPassword.css'
const ForgetPassword = () => {
  return (
    <div className="container-section ">
      <div className="circle"></div>

      <div className="container-loginpage">
        <div className="forgetPassword-div">
          <div className="icon-conatiner ">
            <img src={icon5} className="icon55" alt="" />
          </div>
          <div className="headeing-content">
            <h2 className="title ">Forgot password? 💭</h2>
            <p className="paragraph-login">
              Please, Enter your email to reset your password
            </p>
          </div>
          <form className="forgetPassword ">
            <Input InputName={"Email:"} customClass="input-forgetpassword" />
            <Button ButtonName={"Send"} customClass="btn-send" />
          </form>
        </div>

        <div className="right-section-fpassword  ">
          <img
            src={imageForgetPassword}
            alt="Login Illustration"
            className="image-fortgettnpassword "
          />
          <div className="icons-container">
            <img
              src={icon1}
              alt="Icon 1"
              className="small-icon    icon-11 "
            />
            <img src={icon2} alt="Icon 2" className="small-icon   icon-22" />
            <img src={icon3} alt="Icon 3" className="small-icon  icon-33" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword
