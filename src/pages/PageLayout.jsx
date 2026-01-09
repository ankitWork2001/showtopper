import React, { useState } from "react";

import RightForm from "../components/RightForm";
import InterestForm from "../components/InterestForm";
import ChatBot from "../chatbot/Chatbot";
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPage from "./PrivacyPage";
import Header from "../components/Header";

const PageLayout = () => {
  const [isInterestFormOpen, setIsInterestFormOpen] = useState(false);
  const [openChatBot, setOpenChatBot] = useState(false);

  return (
    <div className="flex w-full min-h-screen">
      {/* Left Side */}
      <div className="w-full md:w-[80%]">
        <BrowserRouter>
        <Header onBrochureClick={() => setIsInterestFormOpen(true)} />
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        </BrowserRouter>
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

export default PageLayout;
