import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Games } from './components/Games';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import Popup from './components/Popup'; 

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Popup />           
      <Navigation />
      <Hero />
      <About />
      <Games />
      <Pricing />
      <Contact />
    </div>
  );
}
