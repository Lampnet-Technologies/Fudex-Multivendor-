import React from "react";

const EmailValidation = (props) => {
  
  return (
    <section className='w-full h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-8 px-4 w-10/12 h-10/12 mx-auto md:px-20 md:w-6/12 md:h-6/12'>
        <img src={props.img} alt='' className='w-12 h-12 mx-auto' />
        <div className='flex flex-col gap-2'>
          <h2 className='font-sans font-bold capitalize text-3xl text-[#111827] text-center'>
            {props.h2}
          </h2>
          <p className='text-center '>{props.p1}</p>
        </div>
        <button
          className='h-12 w-full rounded-full text-white font-medium text-lg bg-[#ff6344]'
          onClick={props.openEmailClient}
        >
          {props.btn}
        </button>
        <p className='font-normal text-sm text-[#4b5563] text-center md:text-base'>
          {props.p2}
        </p>
      </div>
    </section>
  );
};

export default EmailValidation;
