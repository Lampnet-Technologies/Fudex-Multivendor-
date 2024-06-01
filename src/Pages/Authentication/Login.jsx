import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import SocialIcons from "./SocialIcons";
import AuthBtn from "../../components/Button/AuthBtn";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios from "axios";

const CustomCheckbox = ({ checked, onChange }) => (
  <div
    onClick={() => onChange(!checked)}
    className={`w-4 h-4 rounded-sm border ${
      checked ? "bg-[#ff6613]" : "bg-transparent"
    } border-[#8d4444] flex items-center justify-center cursor-pointer`}
  >
    {checked && (
      <svg
        width='12'
        height='12'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M20 6L9 17L4 12'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    )}
  </div>
);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [validationMessages, setValidationMessages] = useState({
    email: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setIsChecked(true);
    }
  }, []);

  useEffect(() => {
    setIsFormValid(
      email &&
        password &&
        isChecked &&
        validationMessages.email === "valid email address" &&
        validationMessages.password === "valid Password"
    );
  }, [email, password, isChecked, validationMessages]);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value)
      ? "valid email address"
      : "Invalid email address";
  };

  const validatePassword = (value) => {
    return value.length >= 6
      ? "valid Password"
      : "Password must be at least 6 characters long";
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setValidationMessages({
      ...validationMessages,
      email: validateEmail(value),
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

  const handleCheckBoxChange = (checked) => {
    setIsChecked(checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid) {
      await sendUserDataToApi({ email, password });
      // Clear the inputs after submission
      setEmail("");
      setPassword("");
      setIsChecked(false);
      setValidationMessages({
        email: "",
        password: "",
      });
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      navigate("/completeprofile");
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

  const getBorderColor = (message) => {
    if (
      message.startsWith("Invalid") ||
      message.startsWith("Passwords do not match")
    ) {
      return "red";
    }

    if (message.startsWith("valid") || message === "Password match") {
      return "green";
    }
    return "gray-100/50";
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className='w-10/12 mx-auto py-8 md:w-10/12'>
      <div>
        <NavLink to='/'>
          <Header name='Back to home page' />
        </NavLink>
      </div>
      <div className='w-full flex flex-col mx-auto h-4/6 my-auto shadow-lg gap-4 p-8 md:w-7/12 md:p-16 md:gap-8'>
        {/* Sign up text  */}
        <div>
          <h2 className='font-bold text-2xl text-[#111827] font-sans mb-2 md:text-3xl'>
            Welcome Back!
          </h2>
          <p className='font-normal text-[#4b5563] text-sm font-opensans md:text-lg'>
            Log in to your accout to continue...
          </p>
        </div>
        <form className='flex flex-col gap-6 pb-4' onSubmit={handleSubmit}>
          {/* Email Input */}
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

          {/* Password Input */}
          <div className=''>
            <label className='capitalize font-medium text-sm text-[#444]'>
              Password
            </label>
            <div className='flex flex-col justify-between items-center h-12 bg-gray-100/50 border border-[#e8e8e8] px-4 rounded min-w-full'>
              <div className='flex items-center justify-between h-12 min-w-full'>
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  style={{
                    borderColor: getBorderColor(validationMessages.password),
                  }}
                  placeholder='Password'
                  className='bg-inherit outline-none py-3 px-4 w-11/12'
                />
                <Button
                  icon={
                    passwordVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  onClick={togglePasswordVisibility}
                  style={{ border: "none", background: "none" }}
                />
              </div>
              <p
                className={`w-full text-sm ${
                  validationMessages.password === "valid Password"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {validationMessages.password}
              </p>
            </div>
          </div>

          {/* Checkbox */}
          <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
              <CustomCheckbox
                checked={isChecked}
                onChange={handleCheckBoxChange}
              />
              <p className='text-[#4B5563] font-normal text-sm font-sans'>
                keep me signed in
              </p>
            </div>
            <NavLink to='/forgetpassword'>
              <p className='capitalize font-semibold text-sm text-[#f6613f]'>
                forget password
              </p>
            </NavLink>
          </div>
          
          <AuthBtn title='Log in' name='Log In' disabled={!isFormValid} />
          <div className='flex flex-col gap-6 mt-5'>
            <p className='font-normal text-base text-[#444] text-center'>
              Don't have an account?{" "}
              <span className='text-[#f6613f] font-semibold text-base'>
               <NavLink to='/signup'> Sign Up </NavLink>
              </span>
            </p>
            <SocialIcons />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
