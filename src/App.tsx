import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;