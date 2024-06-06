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
    className={`w-3 h-3 rounded-sm border md:w-4 md:h-4 ${
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [validationMessages, setValidationMessages] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(
      name &&
      email &&
      password &&
      isChecked &&
      validationMessages.email === "valid email address" &&
      validationMessages.password === "valid Password"
    );
  }, [name, email, password, isChecked, validationMessages]);

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

  const handleNameChange = (event) => {
    setName(event.target.value);
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
      await sendUserDataToApi({ name, email, password });
      // Clear the inputs after submission
      setName("");
      setEmail("");
      setPassword("");
      setIsChecked(false);
      setValidationMessages({
        email: "",
        password: "",
      });
      navigate("/emailverified", { state: { email } });
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
    <section className='w-10/12 mx-auto py-8  md:w-10/12'>
      <div>
        <NavLink to='/'>
          <Header name='Back to home page'  />
        </NavLink>
      </div>
      <div className='w-full flex flex-col mx-auto h-4/6 my-auto shadow-lg gap-4 p-8 md:w-7/12 md:p-16 md:gap-8'>
        {/* Sign up text  */}
        <div>
          <h2 className='font-bold text-2xl text-[#111827] font-sans mb-2 md:text-3xl '>
            Sign Up!
          </h2>
          <p className='font-normal text-[#4b5563] text-sm font-opensans md:text-lg'>
            Create an account to continue...
          </p>
        </div>
        <form className='flex flex-col gap-6 pb-4' onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label className='capitalize font-medium text-sm text-[#444]'>
              Full Name
            </label>
            <input
              type='text'
              value={name}
              onChange={handleNameChange}
              placeholder="What's your fullname"
              className='flex justify-between items-center h-12 bg-gray-100/50 border border-[#e8e8e8] py-3 px-4 rounded w-full'
            />
          </div>

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
          <div className="mb-6">
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
                  className='bg-inherit outline-none py-3 px-4 w-11/12  '
                />
                <Button
                  icon={
                    passwordVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined
                    />
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
          <div className='flex gap-3'>
            <CustomCheckbox
              checked={isChecked}
              onChange={handleCheckBoxChange}
            />
            <p className='text-[#4B5563] font-normal text-sm font-sans w-[306px] h-9 md:w-full'>
              I agree with the <span className="text-[#ff6613]"> terms of service </span> and <span className="text-[#ff6613]"> privacy policy.</span>
            </p>
          </div>
          <AuthBtn title='Sign Up' name='Sign Up' disabled={!isFormValid} />
          <div className='flex flex-col gap-6 mt-5'>
            <SocialIcons />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
