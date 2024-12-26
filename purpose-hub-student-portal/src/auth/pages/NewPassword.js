import React from 'react'
import icon1 from "../../assets/LoginPage/images/Group 480956193.png";
import icon2 from "../../assets/LoginPage/images/Group 480956194.png";
import icon3 from "../../assets/LoginPage/images/Group 480956200.png";
import icon5 from "../../assets/LoginPage/images/Group 480956189.png";
import logo from "../../assets/LoginPage/images/purpose-full 1.png";
import Button from "../components/Button";
import imageNewPassword from "../../assets/NewPassword/images/image 4.png";
import EyePassword from '../../assets/NewPassword/images/eye-crossed (1).png'
import '../../assets/NewPassword/style/NewPassword.css'

const NewPassword = () => {
  return (
    <div className="container-section ">
      <div className="circle"></div>

      <div className="container-loginpage">
        <div className="Resetpassword-div">
          <div className="icon-conatiner ">
            <img src={icon5} className="icon55" alt="" />
          </div>
          <div className="content">
            <div className="headeing-content ">
              <img src={logo} alt="" className="image-logo" />
              <h2 className="title ">Reset Password 🔐</h2>
              <p className="paragraph-login ">
                Please, Enter your new password then confirm it ..
              </p>
            </div>
            <form>
              <div className="input-details">
                <label className="label">New Password:</label>
                <div className="input-container input-newpassword">
                  <input
                    placeholder="Enter new password..."
                    type="password"
                    className="input-password "
                  />
                </div>
                <div className="container-eye">
                  <img
                    src={EyePassword}
                    alt=""
                    className="eye-password"
                  />
                </div>
              </div>

              <div className="input-details input-confirmpassword">
                <label className="label">Confirm Password:</label>
                <div className="input-container">
                  <input
                    placeholder="Confirm new password..."
                    type="password"
                    className="input-password "
                  />
                </div>
                <div className="container-eye">
                  <img src={EyePassword} alt="" className="eye-icon" />
                </div>
              </div>
              <div className="new-btn-restpassword">
                <Button
                  ButtonName={"Reset Password"}
                  customClass="btn-background "
                />
              </div>
            </form>
          </div>
        </div>

        <div className="right-section-Newpassword  relaltive ">
          <img
            src={imageNewPassword}
            alt="Login Illustration"
            className=" new-section"
          />
          <div className="icons-container">
            <img src={icon1} alt="Icon 1" className="small-icon  icon-44" />
            <img src={icon2} alt="Icon 2" className="small-icon icon-55" />
            <img src={icon3} alt="Icon 3" className="small-icon icon-66" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPassword
