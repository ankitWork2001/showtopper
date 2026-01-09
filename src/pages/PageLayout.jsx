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
import ChatBot from '../chatbot/chatbot'

const PageLayout = () => {
  const [isInterestFormOpen, setIsInterestFormOpen] = useState(false);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
  const [isOfferPriceFormOpen, setIsOfferPriceFormOpen] = useState(false);
  const [openChatBot, setOpenChatBot] = useState(false);


  return (
    <div className="flex w-full min-h-screen">
      
      {/* Left Side */}
      <div className="w-full md:w-[80%]">
        <Header onBrochureClick={() => setIsBrochureFormOpen(true)} />
        {isBrochureFormOpen && <BrochureForm onClose={() => setIsBrochureFormOpen(false)} />}

        <Hero onRequestCallBack={() => setIsInterestFormOpen(true)} />
        <MobileForm />
        <About />

        <Price onOfferPriceClick={() => setIsOfferPriceFormOpen(true)} />
        {isOfferPriceFormOpen && <OfferPriceForm onClose={() => setIsOfferPriceFormOpen(false)} />}

        <Amenities />
        <Gallery />
        <FloorPlan onOfferPriceClick={() => setIsOfferPriceFormOpen(true)} />
        <Location />
        <NRIServices />
        <Footer />
        <MobileFooter />
      </div>

      {/* Right Side (Desktop only) */}
      <div className="hidden md:block md:w-[20%]">
        <RightForm
  onRequestCallBack={() => setIsInterestFormOpen(true)}
  onChatBotClick={() => setOpenChatBot(true)}
/>
      </div>

      {/* ✅ MODALS – GLOBAL (ALL DEVICES) */}
      {isInterestFormOpen && (
        <InterestForm onClose={() => setIsInterestFormOpen(false)} />
      )}
    <ChatBot open={openChatBot} setOpen={setOpenChatBot} />
    </div>
  );
};


export default PageLayout
