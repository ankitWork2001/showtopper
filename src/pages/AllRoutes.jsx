import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Price from '../components/Price'
import Amenities from '../components/Amenities'
import FloorPlan from '../components/FloorPlan'
import Location from '../components/Location'
import RightForm from '../components/RightForm'
import Gallery from '../components/GalleryPage'
import NRIServices from '../components/NRIServices'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AllRoutes = () => {
  return (
    // 'w-full' ensures it spans the screen, 'flex' enables the layout
    <div className='flex w-full min-h-screen'>
        
        {/* Left Side: 80% width */}
        <div className='w-[80%]'>
            <Header />
            <Hero />
            <About />
            <Price />
            <Amenities />
            <Gallery />
            <FloorPlan />
            <Location />
            <NRIServices />
            <Footer />
        </div>

        {/* Right Side: 20% width */}
        <div className='w-[20%]'>
            <RightForm />
        </div>

    </div>
  )
}

export default AllRoutes