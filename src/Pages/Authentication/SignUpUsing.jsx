import React from 'react'

const SignUpUsing = (props) => {
  return (
    <section className='flex items-center gap-2'>
      <hr className='w-20 border border-[#bdbdbd]'/>
      <p className='w-28 h-6 my-auto font-normal text-base text-[#4b5563]'>{props.name}</p>
      <hr className='w-20 border border-[#bdbdbd]'/>
    </section>
  )
}

export default SignUpUsing
