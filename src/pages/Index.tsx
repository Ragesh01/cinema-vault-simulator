
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PCBuilder from '@/components/PCBuilder';
import ChatButton from '@/components/ChatButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      <main>
        <Hero />
        <PCBuilder />
      </main>
      <ChatButton />
    </div>
  );
};

export default Index;
