import React, { useState } from "react";
import Header from "../../components/Header/Header";
import arrow_left from "../../components/Assets/arrow_left.png";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import SignUpUsing from "../../components/SocialIcon/SignUpUsing";
import SocialIcons from "./SocialIcons"
import AuthBtn from "../../components/Button/AuthBtn"
import { NavLink } from "react-router-dom";
import axios from "axios";

const LogIn = () => {
  const [contactInfo, setContactInfo] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [validationMessages, setValidationMessages] = useState({
    contactInfo: "",
    password: "",
  });

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

  const handleLogin = async (event) => {
    event.preventDefault();
    if (
      validationMessages.contactInfo.startsWith("valid") &&
      validationMessages.password === "valid Password"
    ) {
      try {
        const response = await axios.get("URL"); // Replace with actual URL
        const users = response.data;

        const user = users.find(
          (user) => user.contactInfo === contactInfo && user.password === password
        );

        if (user) {
          window.location.href = "/success";
        } else {
          setError(
            "Invalid Email or Password. Please Sign up if you do not have an account"
          );
        }
      } catch (error) {
        setError("An error occurred. Please try again later.");
      }
    } else {
      setError("Please enter valid credentials.");
    }
  };

  const getBorderColor = (message) => {
    if (message.startsWith("Invalid") || message === "Password must be at least 6 characters long") {
      return "red";
    }

    if (message.startsWith("valid")) {
      return "green";
    }
    return "black";
  };

  return (
    <section className="w-10/12 mx-auto mt-12 md:w-7/12 md:mx-auto md:flex md:flex-col md:justify-center md:py-0">
      <div className="flex flex-col">
        <div className="mb-5">
          <NavLink to="/authpage1">
            <Header img={arrow_left} name="Log In" className="mb-9" />
          </NavLink>
        </div>
        <h1 className="w-10/12 mx-auto font-semibold text-start text-2xl text-[#4b5563] md:w-7/12 md:mx-auto">
          Welcome back!
        </h1>
      </div>
      <form
        className="flex flex-col items-center gap-3 pb-4"
        onSubmit={handleLogin}
      >
        {/* Contact Info (Email or Phone Number) */}
        <input
          type="text"
          value={contactInfo}
          onChange={handleContactInfoChange}
          placeholder="Email or Phone Number"
          style={{ borderColor: getBorderColor(validationMessages.contactInfo) }}
          className="w-80 h-12 bg-gray-100/50 border border-[#e8e8e8] py-3 px-4 rounded md:w-7/12"
        />
        {validationMessages.contactInfo && (
          <p
            style={{ color: validationMessages.contactInfo.startsWith("valid") ? "green" : "red" }}
            className="w-80 md:w-7/12 text-sm"
          >
            {validationMessages.contactInfo}
          </p>
        )}

        {/* Password */}
        <div className="w-80 flex flex-col gap-1 h-12 bg-gray-100/50 border border-[#e8e8e8] px-4 rounded md:w-7/12">
          <div className="w-full flex my-auto items-center justify-between h-12 md:w-full">
            <input
              type={visible ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              style={{ borderColor: getBorderColor(validationMessages.password) }}
              className="bg-inherit outline-none py-3 px-4 w-full"
            />
            <div onClick={() => setVisible(!visible)}>
              {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </div>
          </div>
          {validationMessages.password && (
            <p
              style={{ color: validationMessages.password === "valid Password" ? "green" : "red" }}
              className="w-full text-sm"
            >
              {validationMessages.password}
            </p>
          )}
        </div>

        <button
          type="button"
          className="text-end font-normal text-lg text-[#bdbdbd]"
        >
          Forgot your password?
        </button>
        <p className="text-xl font-normal w-5 h-5 text-[#4b5563] uppercase">or</p>
        <AuthBtn name="Log In" type="submit" />
        <SignUpUsing name="Sign In Using" />
        <SocialIcons />
        <p className="font-normal text-xl text-[#4b5563]">
          Need An Account?{" "}
          <NavLink to="/signup">
            <span className="font-semibold text-xl text-[#f6613f]"> Sign Up</span>
          </NavLink>
        </p>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </section>
  );
};

export default LogIn;
