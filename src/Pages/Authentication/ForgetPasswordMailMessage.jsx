import React from 'react'
import { useLocation } from "react-router-dom";
import EmailValidation from "./EmailValidation";
import Image1 from "../../components/Assets/Group 286.png";

const ForgetPasswordMailMessage = () => {
  const location = useLocation();
  const { email } = location.state || {};

  const handleContinue = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <EmailValidation
        img={Image1}
        h2="Check Your Mail!"
        p1={`Check your e-mail, we have sent a password recovery instruction to ${email}.`}
        btn="Continue"
        openEmailClient={handleContinue}
        p2=" Didn't receive the mail? Check your spam folder"
      />
      
    </section>
  );
}

export default ForgetPasswordMailMessage;
