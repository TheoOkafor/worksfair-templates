import React from 'react';

import '../components/diamond/diamond.scss';

import Navbar from '../components/diamond/Navbar';
import Hero from '../components/diamond/Hero';
import About from '../components/diamond/About';
import Team from '../components/diamond/Team';
import Footer from '../components/diamond/Footer';
import Services from '../components/diamond/Services';
import Features from './../components/diamond/Features';
import Quote from './../components/diamond/Quote';
import { website } from '../utils';

const Diamond = () => {
  return (
    <>
      <Navbar website={website} />
      <Hero website={website} />
      <About website={website} />
      <Services website={website} />
      <Features website={website} />
      <Team website={website} />
      <Quote website={website} />
      <Footer website={website} />
    </>
  );
};

export default Diamond;
