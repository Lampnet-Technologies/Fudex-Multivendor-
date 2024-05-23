import React, { useState, useEffect } from "react";
import arrow_left from "../../components/Assets/arrow_left.png";
import edit from "../../components/Assets/Edit.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [otpInputs, setOtpInputs] = useState(new Array(6).fill(""));
  const [contactInfo, setContactInfo] = useState("");
  const [serverOtp, setServerOtp] = useState(null);
  const [otpValid, setOtpValid] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedContactInfo = localStorage.getItem("contactInfo");
    if (storedContactInfo) {
      setContactInfo(storedContactInfo);
      fetchOtpFromServer(storedContactInfo);
    }
  }, []);

  const fetchOtpFromServer = async (contactInfo) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", { contactInfo });
      const otp = response.data.id.toString().padStart(6, "0"); // Simulate a 6-digit OTP
      setServerOtp(otp);
    } catch (error) {
      console.error("Error fetching OTP from the server:", error);
      alert("Failed to fetch OTP, please try again later.");
    }
  };

  const handleOtpChange = (index, event) => {
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = event.target.value;
    setOtpInputs(newOtpInputs);
    setOtpValid(null);
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    const enteredOtp = otpInputs.join("");

    if (enteredOtp === serverOtp) {
      setOtpValid(true);
      alert("OTP verified successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 500); // Delay navigation to show feedback
    } else {
      setOtpValid(false);
      alert("Invalid OTP. Please try again.");
    }
  };

  const otpInputStyle = (index) => {
    if (otpValid === null) return {};
    return {
      borderColor:
        otpValid === false ? "red" : otpInputs[index] ? "green" : "initial",
    };
  };

  return (
    <section>
      <img src={arrow_left} alt='' />
      <h2>Verify Phone Number</h2>
      <p>
        We have sent you a 6-digit code. Please enter it here to verify your number.
      </p>
      <div className='flex items-center justify-start gap-3'>
        <p className='w-40 h-9 p-2 bg-[#f3f4f6]'>
          {contactInfo.includes("@") ? "Email" : "Phone number"}: {contactInfo}
        </p>
        <img src={edit} alt='' className='w-[17px] h-[15.11px]' />
      </div>

      {/* OTP inputs */}
      <form onSubmit={handleOtpSubmit}>
        <div className='flex gap-2'>
          {otpInputs.map((otpInput, index) => (
            <input
              key={index}
              type='text'
              value={otpInput}
              onChange={(event) => handleOtpChange(index, event)}
              maxLength='1'
              style={{
                width: "42px",
                textAlign: "center",
                borderRadius: "14px",
                ...otpInputStyle(index),
              }}
            />
          ))}
        </div>
        <p>I haven't received a code (0.23)</p>
        <button type='submit'>Submit</button>
      </form>
      {otpValid === false && <p style={{ color: "red" }}>Invalid OTP. Please try again.</p>}
    </section>
  );
};

export default OtpVerification;
