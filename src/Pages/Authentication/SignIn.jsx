import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import arrow_left from "../../components/Assets/arrow_left.png";
import SignUpUsing from "../../components/SocialIcon/SignUpUsing";
import SocialIcons from "./SocialIcons";
import AuthBtn from "../../components/Button/AuthBtn";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [contactInfo, setContactInfo] = useState(
    localStorage.getItem("contactInfo") || ""
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [confirmPassword, setConfirmPassword] = useState(
    localStorage.getItem("confirmPassword") || ""
  );
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("isChecked") === "true"
  );
  const [validationMessages, setValidationMessages] = useState({
    contactInfo: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("contactInfo", contactInfo);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);
    localStorage.setItem("isChecked", isChecked);
  }, [name, contactInfo, password, confirmPassword, isChecked]);

  const validateContactInfo = (value) => {
    const phoneRegex = /^[+]?[0-9]{10,14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (phoneRegex.test(value)) {
      return "valid phone number";
    } else if (emailRegex.test(value)) {
      return "valid email address";
    } else {
      return "Invalid input, Please enter a valid phone number or a valid email address";
    }
  };

  const validatePassword = (value) => {
    if (value.length >= 6) {
      return "valid Password";
    } else {
      return "Password must be at least 6 characters long";
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactInfoChange = (event) => {
    const { value } = event.target;
    setContactInfo(value);
    setValidationMessages({
      ...validationMessages,
      contactInfo: validateContactInfo(value),
    });
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setValidationMessages({
      ...validationMessages,
      password: validatePassword(value),
    });
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    if (value === password) {
      setValidationMessages({
        ...validationMessages,
        confirmPassword: "Password match",
      });
    } else {
      setValidationMessages({
        ...validationMessages,
        confirmPassword: "Password do not match",
      });
    }
  };

  const handleCheckBoxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validationForm()) {
      const otp = await generateOtp(contactInfo);
      alert(`OTP sent to ${contactInfo}: ${otp}`);
      await sendUserDataToApi({ name, contactInfo, password, otp });
      // Clear the inputs and localStorage after submission
      setName("");
      setContactInfo("");
      setPassword("");
      setConfirmPassword("");
      setIsChecked(false);
      setValidationMessages({
        contactInfo: "",
        password: "",
        confirmPassword: "",
      });
      localStorage.removeItem("name");
      localStorage.removeItem("contactInfo");
      localStorage.removeItem("password");
      localStorage.removeItem("confirmPassword");
      localStorage.removeItem("isChecked");
      navigate("/otpverification");
    }
  };

  const sendUserDataToApi = async (userData) => {
    try {
      const response = await axios.post("URL", userData);
      console.log("User data successfully sent to the API", response.data);
    } catch (error) {
      console.log("Error sending user to the API:", error);
    }
  };

  const validationForm = () => {
    if (
      name &&
      contactInfo &&
      password &&
      confirmPassword &&
      isChecked &&
      validationMessages.contactInfo.startsWith("valid") &&
      validationMessages.password === "valid Password" &&
      validationMessages.confirmPassword === "Password match"
    ) {
      return true;
    } else {
      alert(
        "Please fill in all fields correctly and accept the terms and conditions."
      );
      return false;
    }
  };

  const generateOtp = (contactInfo) => {
    // simulate OTP generation and sending via an API
    return new Promise((resolve) => {
      setTimeout(() => {
        const otp = Math.floor(100000 + Math.random() * 900000).toString(); // generate a 6-digit OTP
        resolve(otp);
      }, 1000);
    });
  };

  const getBorderColor = (message) => {
    if (
      message.startsWith("Invalid") ||
      message.startsWith("Password do not match")
    ) {
      return "red";
    }

    if (message.startsWith("valid") || message === "Password match") {
      return "green";
    }
    return "black";
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <section className='w-10/12 mx-auto mt-12 gap-4 md:w-7/12 md:mx-auto md:flex md:flex-col md:justify-center md:py-0 md:gap-2'>
      <div>
        <NavLink to='/authpage1'>
          <Header img={arrow_left} name='Sign Up' />
        </NavLink>
      </div>
      <form
        className='flex flex-col items-center gap-6 pb-4'
        onSubmit={handleSubmit}
      >
        {/* Name Input */}
        <input
          type='text'
          value={name}
          onChange={handleNameChange}
          placeholder='Name'
          className='w-80 flex justify-between items-center  h-12  bg-gray-100/50 border border-[#e8e8e8] py-3 px-4 rounded md:w-7/12 '
        />

        {/* Email or Phone number Input */}
        <input
          type='text'
          value={contactInfo}
          onChange={handleContactInfoChange}
          placeholder='Email or Phone Number'
          style={{ borderColor: getBorderColor(validationMessages.contactInfo) }}
          className='w-80 flex justify-between items-center  h-12  bg-gray-100/50 border border-[#e8e8e8] py-3 px-4 rounded md:w-7/12'
        />
        {validationMessages.contactInfo && (
          <p
            style={{ color: validationMessages.contactInfo.startsWith("valid") ? "green" : "red" }}
            className="w-80 md:w-7/12 text-sm"
          >
            {validationMessages.contactInfo}
          </p>
        )}

        {/* Password Input */}
        <div className='w-80 flex flex-col gap-1 h-12   bg-gray-100/50 border border-[#e8e8e8] px-4 rounded md:w-7/12'>
          <div className='w-full flex my-auto items-center justify-between h-12 md:w-full '>
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              style={{
                borderColor: getBorderColor(validationMessages.password),
              }}
              placeholder='Password'
              className='bg-inherit outline-none py-3 px-4 w-full'
            />
            <Button
              icon={passwordVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
              onClick={togglePasswordVisibility}
              style={{ border: "none", background: "none" }}
            />
          </div>
          <p
            style={{
              color:
                validationMessages.password === "valid Password"
                  ? "green"
                  : "red",
            }}
            className='w-full text-sm'
          >
            {validationMessages.password}
          </p>
        </div>

        {/* Confirm Password Input */}
        <div className='w-80 gap-1 flex flex-col h-12 bg-gray-100/50 border border-[#e8e8e8] px-4 rounded md:w-7/12'>
          <div className='w-full flex my-auto items-center justify-between h-12 md:w-full '>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              value={confirmPassword}
              placeholder='Confirm Password'
              onChange={handleConfirmPasswordChange}
              style={{
                borderColor: getBorderColor(validationMessages.confirmPassword),
              }}
              className='bg-inherit outline-none py-3 px-4 w-full'
            />
            <Button
              icon={
                confirmPasswordVisible ? (
                  <EyeTwoTone />
                ) : (
                  <EyeInvisibleOutlined />
                )
              }
              onClick={toggleConfirmPasswordVisibility}
              style={{ border: "none", background: "none" }}
            />
          </div>
          <p
            style={{
              color:
                validationMessages.confirmPassword === "Password match"
                  ? "green"
                  : "red",
            }}
            className='w-full text-sm'
          >
            {validationMessages.confirmPassword}
          </p>
        </div>

        {/* Checkbox */}
        <div className='flex gap-1 mt-4 w-10/12 sm:w-80 md:w-7/12'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckBoxChange}
            className='w-4 h-4 rounded-sm border border-[#bdbdbd]'
          />
          <p className='text-[#4B5563] font-normal text-sm font-sans w-[306px] h-9 md:w-full'>
            Yes, please send me offers for loyalty, discount, and other
            information.
          </p>
        </div>

        <p className='text-xl font-normal w-5 h-5 text-[#4b5563] uppercase'>
          or
        </p>
        {/* Sign up using Either gmail, facebook or apple */}
        <SignUpUsing name='Sign Up using' />
        {/* Social media icons */}
        <SocialIcons />
        {/* Submit Buttons */}
        <AuthBtn name='Sign Up' type='submit' />
        <p className='font-normal text-xl text-[#4b5563]'>
          Already have an account?
          <NavLink to='/login'>
            <span className='font-semibold text-xl text-[#f6613f]'>
              {" "}
              Log In
            </span>
          </NavLink>
        </p>
      </form>
    </section>
  );
};

export default SignIn;
