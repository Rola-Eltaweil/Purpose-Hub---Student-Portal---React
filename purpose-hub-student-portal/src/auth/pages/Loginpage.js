import React from 'react'
import EyePassword from "../../assets/LoginPage/images/eye-crossed (1).png";
import Google from "../../assets/LoginPage/images/google (4) 1.png";
import image from "../../assets/LoginPage/images/vecteezy_3d-male-character-got-an-idea-while-working-on-a-laptop_24387917 1 (1).png";
import logo from '../../assets/LoginPage/images/purpose-full 1.png'
import '../../assets/LoginPage/style/Login/login.css'
import icon1 from '../../assets/LoginPage/images/Group 480956193.png'
import icon2 from '../../assets/LoginPage/images/Group 480956194.png'
import icon3 from '../../assets/LoginPage/images/Group 480956200.png'
import icon5 from '../../assets/LoginPage/images/Group 480956189.png'
import Button from '../components/Button';
import Input from '../components/Input';
const Loginpage = () => {
 return (
   <div className="container-section ">
     <div className="circle"></div>

     <div className="container-loginpage">
       <div className="login-div">
         <div className="icon-conatiner ">
           <img src={icon5} className="icon55" alt="" />
         </div>
         <div className="headeing-content">
           <img src={logo} alt="" className="image-logo" />
           <h2 className="title ">Login to your account! 👋🏻</h2>
           <p className="paragraph-login">
             Please, Login to your account and start discover our world
           </p>
         </div>
         <form>
           <Input InputName={"Email:"} />

           <div className="input-details">
             <label className="label">Password</label>
             <div className="input-container">
               <input
                 placeholder="Enter Password..."
                 type="password"
                 className="input-password "
               />
             </div>
             <div className="container-eye">
               <img src={EyePassword} alt="" className="eye-icon" />
             </div>
           </div>
           <div className="container-forget">
             <p className="forget-pass">Forget password?</p>
           </div>
           <Button ButtonName={"Login"} />

           <div class="or-container">
             <div class="line"></div>
             <span class="or-text">OR</span>
             <div class="line"></div>
           </div>

           <div className="Google">
             <img src={Google} alt="" className="google-image" />
             <p>Login with Google account</p>
           </div>
         </form>
       </div>

       <div className="right-section relaltive ">
         <img src={image} alt="Login Illustration" className="image-login " />
         <div className="icons-container">
           <img src={icon1} alt="Icon 1" className="small-icon  icon-1" />
           <img src={icon2} alt="Icon 2" className="small-icon icon-2" />
           <img src={icon3} alt="Icon 3" className="small-icon icon-3" />
         </div>
       </div>
     </div>
   </div>
 );
  
}


export default Loginpage
  