import React from 'react';

const Navbar = ({ website }) => {
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
              <h2
                className={`webpage-title is-size-4 has-text-${website.metadata.themeColour}`}
              >
                <strong>{website.metadata.name}</strong>
              </h2>
            )}
          </a>
          <a
            className="navbar-burger"
            role="button"
            aria-label="menu"
            aria-expanded="false"
            data-target="#navMenu"
            href="#navMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item">
              <a
                className={`button is-${website.metadata.themeColour} is-outlined is-rounded`}
                href="#works"
              >
                {website.navbar.cto.title || 'View my works'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
