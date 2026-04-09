import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Hero />
      <Gallery />
      <About />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
