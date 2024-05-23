import React from "react";
import Header from "../../components/Header/Header";
import arrow_left from "../../components/Assets/arrow_left.png";
import add_to_cart from "../../components/Assets/Add to Cart-amico 1.png";
import { NavLink } from "react-router-dom";

const AuthPage1 = () => {
  return (
    <section className='w-10/12 mx-auto mt-12 gap-4 md:w-7/12 md:mx-auto md:flex md:flex-col md:justify-center md:py-0 md:gap-2'>
      {/* Header */}
      <div>
        <NavLink to="/page3"><Header img={arrow_left} name='Hello!' /></NavLink>
      </div>
      {/* Hero Image */}
      <div>
        <img src={add_to_cart} alt='' className="flex items-center justify-center w-[#361px] h-[361px] mb-12"/>
      </div>
      {/* Log in Button */}
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <NavLink to="/login"><button className="w-80 h-12 rounded-lg py-3 px-4 bg-[#f6613f] text-white md:w-7/12 ">Log In</button> </NavLink>

        <p className="uppercase font-normal text-base text-[#4b5563]">or</p>

        {/* Sign up Button */}
       <NavLink to="/signup"> <button className="w-[330px] h-12 rounded-lg py-3 px-4 border border-[#f6613f] bg-white text-[#f6613f] ">Sign Up</button></NavLink>

       {/* Bottom Text */}
      <p className="text-[#4b5563] font-normal text-base">Continue as guest</p>
      </div>
    </section>
  );
};

export default AuthPage1;
