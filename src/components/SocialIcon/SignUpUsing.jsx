import React from 'react'

const SignUpUsing = (props) => {
  return (
    <section className='w-10/12 flex items-center justify-between gap-2 md:w-7/12'>
      <hr className='w-1/3 border border-[#bdbdbd]'/>
      <p className=' h-6 my-auto font-normal text-base text-[#4b5563]'>{props.name}</p>
      <hr className='w-1/3 border border-[#bdbdbd]'/>
    </section>
  )
}

export default SignUpUsing
