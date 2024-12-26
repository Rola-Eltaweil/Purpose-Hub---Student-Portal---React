import React from 'react'
import Loginpage from './auth/pages/Loginpage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from './auth/pages/ForgetPassword';
import Emailsend from './auth/pages/Emailsend';
import NewPassword from './auth/pages/NewPassword';
import SuccessResetpassword from './auth/pages/SuccessResetpassword';
import FaildResetpassword from './auth/pages/FaildResetpassword';
import Errorloginpage from './auth/pages/Errorloginpage';

const Provider = () => {
  return (
    <Router>
      {/* تعريف المسارات */}
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/Emailsend" element={<Emailsend />} />
        <Route path="/Restpassword" element={<NewPassword />} />
        <Route
          path="/SuccessResetpassword"
          element={<SuccessResetpassword />}
        />
        <Route path="/FaildResetpassword" element={<FaildResetpassword />} />
        <Route path="/FeildError" element={<Errorloginpage />} />
      </Routes>
    </Router>
  );
}

export default Provider
