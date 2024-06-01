import React from 'react'
import EmailValidation from './EmailValidation'
import Image1 from "../../components/Assets/SUCCESS.png"

const PasswordUpdated = () => {
  const gotoLogin = () => {
    window.location.href = "/login";
  }
  
  return (
  <section>
    <EmailValidation 
      img={Image1}
      h2="Password Updated"
      p1="You have successfully reset your password. Please proceed to login using your new password."
      btn="Log In"
      openEmailClient={gotoLogin}
    />
  </section>
  )
}

export default PasswordUpdated
