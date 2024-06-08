import React from 'react';
import ImageSection from '../../components/ImageSection/ImageSection';
import LandingPageHeader from '../../components/LandingPageHeader/LandingPageHeader';
import Footer from '../../components/LandingPageFooter/LandingPageFooter';


const Payment = () => {
  return (
    <div>
      <LandingPageHeader />
      <ImageSection imageUrl="/images/orange3" />
      <Footer />
    </div>
  )
}

export default Payment