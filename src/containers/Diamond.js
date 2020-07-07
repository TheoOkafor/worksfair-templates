import React from 'react';
import Navbar from '../components/diamond/Navbar';
import Hero from '../components/diamond/Hero';
// import "../components/corporate-cool/corporate-cool.scss";
import '../components/diamond/diamond.scss';
import About from '../components/diamond/About';
import Team from '../components/diamond/Team';
import Footer from '../components/diamond/Footer';
import Services from '../components/diamond/Services';
import { website } from '../utils';
import Features from './../components/diamond/Features';
import Quote from './../components/diamond/Quote';
import { BrowserRouter as Router } from 'react-router-dom';

const Diamond = () => {
  return (
    <>
      <Router>
        <Navbar website={website} />
        <Hero website={website} />
        <About website={website} />
        <Services website={website} />
        <Features website={website} />
        <Team website={website} />
        <Quote website={website} />
        <Footer website={website} />
      </Router>
    </>
  );
};

export default Diamond;
