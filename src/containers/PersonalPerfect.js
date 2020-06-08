import React from 'react';
import { Helmet } from 'react-helmet';

import '../components/personal-perfect/personal-perfect.scss';

// import 'font-awesome/scss/font-awesome.scss';
// import '../css/font-awesome-4.7.0/scss/font-awesome.scss';

import Navbar from "../components/personal-perfect/Navbar"
import Hero from "../components/personal-perfect/Hero";
import Introduction from "../components/personal-perfect/Introduction";
import Skills from "../components/personal-perfect/Skills";
import Works from "../components/personal-perfect/Works";
import Clients from '../components/personal-perfect/Clients';
import Testimonials from '../components/personal-perfect/Testimonials';
import CallToAction from '../components/personal-perfect/CallToAction';
import Footer from '../components/personal-perfect/Footer';
import { website } from '../utils';

const PersonalPerfect = () => {
  // an array of the arranged sections
  const arrangement = website.metadata.arrangement;

  const sections = {
    hero: <Hero website={website} />,
    introduction: <Introduction website={website} />,
    skills: <Skills website={website} />,
    worksSettings: <Works website={website} />,
    clients: <Clients website={website} />,
    testimonials: <Testimonials website={website} />,
    callToAction: <CallToAction website={website} />,
  };

  const isEnabled = (section) => website[section.id].enabled;

  return (
    <div>
      {/* Head */}
      <Helmet>
        <title>Personal Perfect Template</title>
      </Helmet>
      {/* Body */}
      <Navbar website={website} />
      {arrangement.map(
        (section) =>
          isEnabled(section) && (
            <div key={section.id}>
              {sections[section.id]}
            </div>
          )
      )}
      <Footer website={website} />
    </div>
  );
}

export default PersonalPerfect;
