import React from 'react';
import {BrowserRouter  as Router,Route } from 'react-router-dom';
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
    <Router>
    <div className="App">
      <Header/>
      <Route exact path="/">
        <AboutUs/>
        <Resume/>
        <Portfolio/>
        <CallToAction/>
        <Testimonial/>
        <Contact/>
      </Route>
      <Route exact path="/detail">
        <Contact/>
      </Route>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
