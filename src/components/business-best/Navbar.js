import React from 'react';
import withNavbar from '../__shared__/withNavbar';

const Navbar = (props) => {
  const { website } = props;
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            {website.navbar.logo.url ? (
              <img
                src={website.navbar.logo.url}
                alt={`${website.name} logo`}
                height="48"
              />
            ) : (
              <h2 className={`webpage-title is-size-4`}>
                <strong>{website.metadata.name}</strong>
              </h2>
            )}
          </a>
          <a
            className="navbar-burger"
            role="button"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenuHeroB"
            href="#navMenu"
            ref={props.navRef}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarMenuHeroB" className={`navbar-menu ${props.activeNav ? 'is-active' : ''}`}>
          <div className="navbar-end is-uppercase">
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
              <a className="button is-outlined is-rounded" href="#works">
                Works
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withNavbar(Navbar);
