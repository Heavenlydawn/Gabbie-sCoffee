import React from 'react'
import Hero from '../Home/Hero'
import ExploreCoffee from './ExploreCoffee'
import SubHero from '../Home/SubHero'
import SubHeroGallery from '../Home/SubHeroGallery'
import Footer from '../Footer/Footer'

const Explore = () => {
  return (
    <div>
        <Hero/>
        <ExploreCoffee />
        <SubHero />
        <SubHeroGallery />
        <Footer />
    </div>
  )
}

export default Explore