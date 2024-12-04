import React from 'react'
import Hero from '../components/Hero';
import SignupWithHabot from '../components/SignupWithHabot';
import VideoBuyer from '../components/VideoBuyer';
import GetVerified from '../components/GetVerified';
import HowItWorks from '../components/HowItWorks';


const HomePage = () => {
  return (
    <div>
        <Hero/>
        <SignupWithHabot/>
        <VideoBuyer/>
        <GetVerified/>
        <HowItWorks/>
    </div>
  )
}

export default HomePage