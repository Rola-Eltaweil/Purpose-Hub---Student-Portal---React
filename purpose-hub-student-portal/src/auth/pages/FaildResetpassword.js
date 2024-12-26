import React from 'react'
import icon1 from "../../assets/LoginPage/images/Group 480956193.png";
import icon2 from "../../assets/LoginPage/images/Group 480956194.png";
import icon3 from "../../assets/LoginPage/images/Group 480956200.png";
import icon5 from "../../assets/LoginPage/images/Group 480956189.png";
import logo from "../../assets/LoginPage/images/purpose-full 1.png";
import Button from "../components/Button";
import imageNewPassword from "../../assets/Faildresetpassword/images/vecteezy_3d-male-character-presenting-to-the-right_24132254.png";
import "../../assets/Faildresetpassword/style/Faildrestpassword.css";
import EyePassword from "../../assets/NewPassword/images/eye-crossed (1).png";
import imageRestFaild from '../../assets/Faildresetpassword/images/Group 1984081761.png'

const FaildResetpassword = () => {
  return (
    <div className="container-section ">
      <div className="circle"></div>

      <div className="container-loginpage">
        <div className="Newpassword-div">
          <div className="toaster">
            <img src={imageRestFaild} className="succses-auth" alt="" />
          </div>
          <div className="icon-conatiner ">
            <img src={icon5} className="icon55" alt="" />
          </div>
          <div className="content">
            <div className="headeing-content">
              <img src={logo} alt="" className="image-logo" />
              <h2 className="title ">Reset Password 🔐</h2>
              <p className="paragraph-login">
                Please, Enter your new password then confirm it ..
              </p>
            </div>
            <form>
              <div className="input-details ">
                <label className="label label-reset">New Password:</label>
                <div className="input-container input-newpassword">
                  <input
                    placeholder="****************"
                    type="password"
                    className="input-password input-rest-success "
                  />
                </div>
                <div className="container-eye">
                  <img src={EyePassword} alt="" className="eye-confirm " />
                </div>
              </div>

              <div className="input-details input-confirmpassword">
                <label className="label">Confirm Password:</label>
                <div className="input-container">
                  <input
                    placeholder="****************"
                    type="password"
                    className="input-password input-rest-success"
                  />
                </div>
                <div className="container-eye ">
                  <img src={EyePassword} alt="" className="eye-icon " />
                </div>
              </div>
              <Button
                ButtonName={"Reset Password"}
                className="btn-success-restpassword"
              />
            </form>
          </div>
        </div>

        <div className="status-image relative right-section">
          <img
            src={imageNewPassword}
            alt="Login Illustration"
            className="image-restpassword"
          />
          <div className="icons-container">
            <img src={icon1} alt="Icon 1" className="small-icon   icon-23" />
            <img src={icon2} alt="Icon 2" className="small-icon  icon-24" />
            <img src={icon3} alt="Icon 3" className="small-icon  icon-25" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaildResetpassword
