import React, { useRef, useEffect, useState } from 'react';

import { website } from '../../utils';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleNavClick = (event) => {
      event.preventDefault();
      setActiveNav(!activeNav);
    }
    const navBurger = ref.current;
    navBurger.addEventListener('click', handleNavClick);
    return () => {
      navBurger.removeEventListener('click', handleNavClick);
    }
  }, [ref, activeNav, setActiveNav]);

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
          <span className="navbar-burger burger" ref={ref} data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" className={`navbar-menu ${activeNav ? 'is-active' : ''}`}>
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

export default Navbar;
