import React from 'react';

import '../components/business-best/business-best.scss';

import Hero from '../components/business-best/Hero';
import Services from '../components/business-best/Services';
import Works from '../components/business-best/Works';
import Testimonials from '../components/business-best/Testimonials';
import About from '../components/business-best/About';
import CallToAction from '../components/business-best/CallToAction';
import Footer from '../components/business-best/Footer';
import { website } from '../utils';

const BusinessBest = () => {
  return (
    <>
      <Hero website={website} />
      <Services website={website} />
       <Works website={website} />
      <Testimonials website={website} />
      <About website={website} />
      <CallToAction website={website} />
      <Footer website={website} />
    </>
  );
};

export default BusinessBest;
