import React from 'react'

const Button1 = (props) => {
  return (
    <section>
      {/* Skip Button */}
      <button className='w-40 h-9  rounded border border-[#f6613f] bg-white text-[#6b7280] md:w-72'>{props.name}</button>
    </section>
  )
}

export default Button1
