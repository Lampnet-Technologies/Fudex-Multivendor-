import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Image from "../../components/Assets/Group 286.png";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [validationMessages, setValidationMessages] = useState({ email: "" });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value)
      ? "valid email address"
      : "Invalid email address";
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    const validationMessage = validateEmail(value);
    setValidationMessages({ email: validationMessage });
    setIsEmailValid(validationMessage === "valid email address");
    setEmailExists(false); // Reset email existence status on change
    setIsSubmitted(false); // Reset submission status on change
  };

  const checkEmailInDatabase = async (email) => {
    try {
      const response = await axios.post(
        "https://imaginary-api.com/check-email",
        { email }
      );
      return response.data.exists; // Assume API response has an 'exists' property
    } catch (error) {
      console.error("Error checking email in the database:", error);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEmailValid) {
      const exists = await checkEmailInDatabase(email);
      setEmailExists(exists);
      setIsSubmitted(true);
      if (exists) {
        navigate("/forgetpasswordmailmessage"); // Navigate to ForgetPasswordMailMessage component
      }
    }
  };

  const getBorderColor = (message) => {
    if (message === "Invalid email address") {
      return "red";
    }
    if (message === "valid email address") {
      return "green";
    }
    return "gray-100/50";
  };

  return (
    <section className='w-full h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-12 px-4 w-10/12 h-10/12 mx-auto md:px-20 md:w-6/12 md:h-6/12'>
        <img src={Image} alt='' className='w-12 h-12 mx-auto' />
        <div className='flex flex-col gap-2'>
          <h2 className='font-sans font-bold capitalize text-3xl text-[#111827] text-center'>
            Forget Password?
          </h2>
          <p className='text-center text-[#4B5563] font-normal'>
            Enter the email address associated with your account & we'll send
            you a link to reset your password.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='capitalize font-medium text-sm text-[#444]'>
              Email Address
            </label>
            <input
              type='text'
              value={email}
              onChange={handleEmailChange}
              placeholder='Email'
              style={{ borderColor: getBorderColor(validationMessages.email) }}
              className='flex justify-between items-center h-12 bg-gray-100/50 border py-3 px-4 rounded w-full'
            />
            {validationMessages.email && (
              <p
                className={`w-80 md:w-7/12 text-sm ${
                  validationMessages.email === "valid email address"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {validationMessages.email}
              </p>
            )}
          </div>
          <button
            className={`h-12 w-full rounded-full text-white font-medium text-lg mt-12 ${
              isEmailValid ? "bg-[#ff6433]" : "bg-[#6b7280]"
            }`}
            disabled={!isEmailValid}
          >
            Reset Password
          </button>
        </form>
        {isSubmitted && !emailExists && (
          <p className='font-normal text-sm text-red-500 text-center md:text-base'>
            Email not found
          </p>
        )}
      </div>
    </section>
  );
};

export default ForgetPassword;
