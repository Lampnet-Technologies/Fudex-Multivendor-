import React from "react";
import { useLocation } from "react-router-dom";
import EmailValidation from "./EmailValidation";
import Image1 from "../../components/Assets/Group 286.png";

const EmailVerification = () => {
  const location = useLocation();
  const { email } = location.state || {}; 

  return (
    <section>
      <EmailValidation
        img={Image1}
        h2="Account Verified"
        p1={`The email address ${email} has been verified successfully. Thank you for helping us keep your account verified.`}
        btn="Continue"
        openEmailClient={() => (window.location.href = "/login")}
      />
    </section>
  );
};

export default EmailVerification;
