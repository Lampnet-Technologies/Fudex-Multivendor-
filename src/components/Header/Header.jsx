import React from 'react'
import { LeftOutlined } from "@ant-design/icons"

const Header = (props) => {
  return (
  <section className='flex items-center md:mb-0 gap-2 mb-4'>
    <LeftOutlined className="text-xl text-[#f6613f]"/>
    <p className='font-medium text-lg text-[#f6613f]'>{props.name}</p>
    <div></div>
  </section>
  )
}

export default Header
