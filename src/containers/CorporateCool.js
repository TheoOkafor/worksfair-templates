import React from 'react';
import Navbar from '../components/corporate-cool/Navbar';
import Hero from '../components/corporate-cool/Hero';
import '../components/corporate-cool/corporate-cool.scss';
import Services from '../components/corporate-cool/Services';
import Works from '../components/corporate-cool/Works';
import Testimonials from '../components/corporate-cool/Testimonials';
import Footer from '../components/corporate-cool/Footer';
import About from '../components/corporate-cool/About';
import { website } from '../utils';

const MultiMuah = () => {
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

export default MultiMuah;
