import React from 'react'

const AuthBtn = (props) => {
  return (
    <section>
      <button className='w-80 h-12 rounded-lg py-3 px-4 bg-[#6b7280] text-white font-semibold text-base text-center'>{props.name}</button>
    </section>
  )
}

export default AuthBtn
