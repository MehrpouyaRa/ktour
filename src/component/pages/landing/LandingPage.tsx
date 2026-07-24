import React from 'react'
import Hero from './parts/Hero'
import LandingForm from './parts/form/Form'
import LandingMessage from './parts/LandingMessage'
import Footer from '@/component/layout/Footer'

function LandingPage() {
  return (
    <div className='flex flex-col gap-6 md:gap-10'>
      <Hero />
      <LandingForm />
      <LandingMessage />
      <Footer />
    </div>
  )
}

export default LandingPage