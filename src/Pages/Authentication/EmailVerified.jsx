import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Image1 from '../../components/Assets/Group 286.png';
import EmailValidation from './EmailValidation'


const EmailVerified = () => {
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      // Handle the case where email is not available, e.g., redirect back to sign in
      console.log('No email provided');
    }
  }, [email]);

  const openEmailClient = () => {
    window.location.href = `mailto:${email}`;
  };

  const sendVerificationEmail = () => {
    fetch('https://imaginary-api.com/api/v2/users/accountVerify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), 
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Verification email sent') {
          openEmailClient();
        } else {
          alert('Failed to send verification email');
        }
      })
      .catch((error) => {
        console.error('Error sending verification email:', error);
        alert('Failed to send verification email');
      });
  };

  return (
    <section>
      <EmailValidation
        img={Image1}
        h2='Check your mail!'
        p1='We have sent you a mail. Please click on the link in the message to verify your email address so that you can access the app.'
        btn='Open Email App!'
        p2="Didn't receive the mail? Check your spam folder"
        openEmailClient={sendVerificationEmail}
      />
    </section>
  );
};

export default EmailVerified;
