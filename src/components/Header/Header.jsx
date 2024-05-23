import React from 'react'

const Header = (props) => {
  return (
  <section className=' h-12  mx-auto flex items-center justify-between my-6  md:w-9/12'>
    <img src={props.img} alt="" className='w-3 h-5 '/>
    <p className='text-xl font-semibold w-24 h-7 my-auto'>{props.name}</p>
    <div></div>
  </section>
  )
}

export default Header
