import React, { useState } from "react";
import Image1 from "../../components/Assets/RESET.png";
import { Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const CreateNewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [validationMessages, setValidationMessages] = useState({
    password: "",
    confirmPassword: "",
  });

  const validatePassword = (value) => {
    return value.length >= 6
      ? "valid Password"
      : "Password must be at least 6 characters long";
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setValidationMessages({
      ...validationMessages,
      password: validatePassword(value),
      confirmPassword:
        confirmPassword && value !== confirmPassword
          ? "Passwords do not match"
          : value === confirmPassword
          ? "Password match"
          : validationMessages.confirmPassword,
    });
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    setValidationMessages({
      ...validationMessages,
      confirmPassword:
        value !== password ? "Passwords do not match" : "Password match",
    });
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

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <section className='w-full h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-8 px-4 w-10/12 h-10/12 mx-auto md:px-20 md:w-6/12 md:h-6/12'>
        <img src={Image1} alt='' className='w-12 h-12 mx-auto' />
        <div className='flex flex-col gap-2'>
          <h2 className='font-sans font-bold capitalize text-3xl text-[#111827] text-center'>
            Create New Password
          </h2>
          <p className='text-center '>
            You can set a new password for your account. Note that your new
            password must be different from the previous password.
          </p>
        </div>
        <form>
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

          <div className='mt-8'>
            <label className='capitalize font-medium text-sm text-[#444]'>
              Confirm Password
            </label>
            <div className='flex flex-col justify-between items-center h-12 bg-gray-100/50 border border-[#e8e8e8] px-4 rounded min-w-full'>
              <div className='flex items-center justify-between h-12 min-w-full'>
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  style={{
                    borderColor: getBorderColor(
                      validationMessages.confirmPassword
                    ),
                  }}
                  placeholder='Confirm Password'
                  className='bg-inherit outline-none py-3 px-4 w-11/12'
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
                className={`w-full text-sm ${
                  validationMessages.confirmPassword === "Password match"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {validationMessages.confirmPassword}
              </p>
            </div>
          </div>

          <button
            className={`h-12 w-full rounded-full text-white font-medium text-lg mt-12 ${
              validationMessages.password === "valid Password" &&
              validationMessages.confirmPassword === "Password match"
                ? "bg-[#ff6433]"
                : "bg-[#4B5563]"
            }`}
            disabled={
              !(
                validationMessages.password === "valid Password" &&
                validationMessages.confirmPassword === "Password match"
              )
            }
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateNewPassword;
