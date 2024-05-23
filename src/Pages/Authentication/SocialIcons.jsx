import React from 'react'
import apple_icon from "../../components/Assets/apple 1.png"
import google_icon from "../../components/Assets/google 1.png"
import facebook_icon from "../../components/Assets/Group 5.png"

const SocialIcons = () => {
  return (
    <section className='flex items-center gap-2'>
      <img src={apple_icon} alt="" />
      <img src={google_icon} alt="" />
      <img src={facebook_icon} alt="" />
    </section>
  )
}

export default SocialIcons
