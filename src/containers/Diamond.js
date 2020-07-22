import React from 'react';

import '../components/diamond/diamond.scss';

import Navbar from '../components/diamond/Navbar';
import Hero from '../components/diamond/Hero';
import About from '../components/diamond/About';
import Team from '../components/diamond/Team';
import Footer from '../components/diamond/Footer';
import Services from '../components/diamond/Services';
import Works from '../components/diamond/Works';
import Quote from './../components/diamond/Quote';
import { website } from '../utils';

const Diamond = () => {
  return (
    <div className={`has-font-${website.metadata.font}`}>
      <Navbar website={website} />
      <Hero website={website} />
      <About website={website} />
      <Services website={website} />
      <Works website={website} />
      <Team website={website} />
      <Quote website={website} />
      <Footer website={website} />
    </div>
  );
};

export default Diamond;
