import React from 'react'
import google_icon from "../../components/Assets/google 1.png"
import facebook_icon from "../../components/Assets/Group 5.png"

const SocialIcons = () => {
  return (
    <section className='flex items-center gap-5 min-w-full '>
      <button className='w-1/2 mx-auto flex items-center justify-center border border-gray-500/50 py-2 gap-2 px-4 md:px-6 md:w-2/5'><img src={google_icon} alt="" className='w-5 text-center'/> Google</button>
      <button className='w-1/2 mx-auto flex items-center justify-center border border-gray-500/50 py-2 gap-2 px-4 md:px-6 md:w-2/5'><img src={facebook_icon} alt="" className='w-5 text-center'/> Facebook</button>
     
    </section>
  )
}

export default SocialIcons
