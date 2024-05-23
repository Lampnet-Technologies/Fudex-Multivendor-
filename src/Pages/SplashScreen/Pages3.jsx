import React from "react";
import Button from "../../components/Button/Button";
import order_food_pana from "../../components/Assets/Order food-pana (1) 1.png";
import Button1 from "../../components/Button/Button1";
import { NavLink } from "react-router-dom";

const Pages3 = () => {
  return (
    <div>
      <section className='w-10/12 mx-auto mt-12 gap-4 md:w-7/12 md:mx-auto md:flex  md:flex-col  md:justify-center md:py-0 md:gap-2'>
        {/* Hero Image */}
        <div className='flex items-center justify-center'>
          <img src={order_food_pana} alt='' className='w-[200px] h-[347px] ' />
        </div>

        {/* Three dotted cirles */}
        <div className='flex items-center justify-start gap-2 mb-7'>
          <div className='w-3 h-3 rounded-full bg-[#d1d5db]'></div>
          <div className='w-3 h-3 rounded-full bg-[#d1d5db]'></div>
          <div className='w-3 h-3 rounded-full bg-[#f6613f]'></div>
        </div>

        {/*Screen Splash Page 3 Texts */}
        <div className='flex flex-col gap-5 mb-12 md:mb-3'>
          <h2 className='w-80 h-20 font-semibold text-3xl text-[#1f2937] md:w-full'>
            Wide range of Food Categories & more
          </h2>
          <p className='w-80 h-28 text-base font-normal text-[#4B5563] md:w-full'>
            When you're ready to place an order, browse through our
            comprehensive choice of restaurants and dishes, then add the foods
            you want to your cart and check out. It's that simple!
          </p>
        </div>

        <div className='flex items-center justify-center gap-2 mb-5'>
          {/* Skip Button */}
          <NavLink to='/authpage1'>
            <Button1 name='Skip' />
          </NavLink>
          {/*Next Button*/}
          <NavLink to='/AuthPage1'>
            <Button name='Next' />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Pages3;
