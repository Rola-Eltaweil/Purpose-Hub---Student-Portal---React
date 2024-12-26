import React from 'react'
import icon1 from "../../assets/LoginPage/images/Group 480956193.png";
import icon2 from "../../assets/LoginPage/images/Group 480956194.png";
import icon3 from "../../assets/LoginPage/images/Group 480956200.png";
import icon5 from "../../assets/LoginPage/images/Group 480956189.png";
import logo from "../../assets/LoginPage/images/purpose-full 1.png";
import imagedownload from '../../assets/Emailsend/images/download (2) 1.png'
import imagesendEmail from "../../assets/Emailsend/images/vecteezy_3d-male-character-happy-working-on-a-laptop_24387908.png";
import '../../assets/Emailsend/style/Emailsend.css'
const Emailsend = () => {
  return (
    <div className="container-section ">
      <div className="circle"></div>

      <div className="container-loginpage">
        <div className="Emailsend-div">
             <div className="icon-conatiner ">
              <img src={icon5} className="icon55" alt="" />
           </div>
          <div className="headeing-content">
            <img src={logo} alt="" className="image-logo" />
            <h2 className="title ">Check Your email</h2>
            <img src={imagedownload} alt="" className="image-download" />
            <p className="paragraph-Emailsend">
              we have sent an email to <span>sameerrshams95@gmail.com</span> to
              reset your password, please check your email
            </p>
            <p className="paragraph-Emailsend2">
              Not received the email?{" "}
              <a className="resend" href="">
                Resend it.
              </a>
            </p>
          </div>
        </div>
        <div className="right-section right-section-Emailsend relaltive ">
          <img
            src={imagesendEmail}
            alt="Login Illustration"
            className="image-login image-sendemail"
          />
          <div className="icons-container">
            <img
              src={icon1}
              alt="Icon 1"
              className="small-icon   icon-email-1"
            />
            <img
              src={icon2}
              alt="Icon 2"
              className="small-icon i icon-email-2"
            />
            <img
              src={icon3}
              alt="Icon 3"
              className="small-icon  icon-email-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emailsend
