import React from 'react';

import '../components/corporate-cool/corporate-cool.scss';

import Navbar from '../components/corporate-cool/Navbar';
import Hero from '../components/corporate-cool/Hero';
import Services from '../components/corporate-cool/Services';
import Works from '../components/corporate-cool/Works';
import Testimonials from '../components/corporate-cool/Testimonials';
import Footer from '../components/corporate-cool/Footer';
import About from '../components/corporate-cool/About';
import { website } from '../utils';

const CorporateCool = () => {
  return (
    <>
      <Navbar website={website} />
      <Hero website={website} />
      <About website={website} />
      <Services website={website} />
      <Works website={website} />
      <Testimonials website={website} />
      <Footer website={website} />
    </>
  );
};

export default CorporateCool;
