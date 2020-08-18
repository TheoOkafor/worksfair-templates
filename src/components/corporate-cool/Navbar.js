import React from 'react';

import { website } from '../../utils';
import withNavbar from '../__shared__/withNavbar';

const Navbar = (props) => {
  const { metadata, navbar } = website;
  return (
    <nav className={`navbar is-${metadata.themeColour}`}>
      <div className="container">
        <div className="navbar-brand">
          <a href="#home" className="navbar-item">
            {navbar.logo.url ? (
              <img
                src={navbar.logo.url}
                alt={`${metadata.name} logo`}
                height="48"
              />
            ) : (
              <h2 className={`is-size-4`}>
                <strong>{metadata.name}</strong>
              </h2>
            )}
          </a>
          <span className="navbar-burger burger" ref={props.navRef} data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" className={`navbar-menu ${props.activeNav ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a href="/" className="navbar-item is-active">
              Home
            </a>
            <a href="#services" className="navbar-item">
              Services
            </a>
            <a href="#testimonials" className="navbar-item">
              Testimonial
            </a>
            <span className="navbar-item">
              <a href="#works" className={`button is-${metadata.themeColour} is-inverted`}>
                <span>Works</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withNavbar(Navbar);
