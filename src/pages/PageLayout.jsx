import React, { useState } from 'react'
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
import MobileForm from '../components/MobileForm'
import MobileFooter from '../components/MobileFooter'
import InterestForm from '../components/InterestForm'
import BrochureForm from '../components/BrochureForm'
import OfferPriceForm from '../components/OfferPriceForm'

const PageLayout = () => {
  const [isInterestFormOpen, setIsInterestFormOpen] = useState(false);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
  const [isOfferPriceFormOpen, setIsOfferPriceFormOpen] = useState(false);

  const handleRequestCallBack = () => {
    setIsInterestFormOpen(true);
  };
  const handleCloseInterestForm = () => {
    setIsInterestFormOpen(false);
  };

  const handleBrochureClick = () => {
    setIsBrochureFormOpen(true);
  };
  const handleCloseBrochureForm = () => {
    setIsBrochureFormOpen(false);
  };

  const handleOfferPriceClick = () => {
    setIsOfferPriceFormOpen(true);
  };
  const handleCloseOfferPriceForm = () => {
    setIsOfferPriceFormOpen(false);
  };


  return (
    <div className="flex w-full min-h-screen">
      
      {/* Left Side */}
      <div className="w-full md:w-[80%]">
        <Header onBrochureClick={handleBrochureClick} />
        {isBrochureFormOpen && <BrochureForm onClose={handleCloseBrochureForm} />}
        <Hero onRequestCallBack={handleRequestCallBack} />
        <MobileForm />
        <About />
        <Price onOfferPriceClick={handleOfferPriceClick} />
        {isOfferPriceFormOpen && <OfferPriceForm onClose={handleCloseOfferPriceForm} />}
        <Amenities />
        <Gallery />
        <FloorPlan onOfferPriceClick={handleOfferPriceClick} />
        <Location />
        <NRIServices />
        <Footer />
        <MobileFooter />
      </div>

      {/* Right Side (Hidden on Mobile) */}
      <div className="hidden md:block md:w-[20%]">
        <RightForm onRequestCallBack={handleRequestCallBack}/>
        {isInterestFormOpen && <InterestForm onClose={handleCloseInterestForm} />}
      </div>

    </div>
  )
}

export default PageLayout
