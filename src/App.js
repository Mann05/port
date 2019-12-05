import React from 'react';
import './App.css';
import Header from './Header';
import AboutUs from './About';
import Resume from './Resume';
import Portfolio from './PortFolio';
import Testimonial from './Testimonial';
import Footer from './CallToAction';
import CallToAction from './CallToAction';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <Resume/>
      <Portfolio/>
      <CallToAction/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
