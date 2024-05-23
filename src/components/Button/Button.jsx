import React from 'react'

const Button = (props) => {
  return (
    <section className=''>
      {/* Next Button */}
      <button className='bg-[#f6613f] text-white md:w-72 h-9 rounded py-2 px-4 '>{props.name}</button>
    </section>
  )
}

export default Button
