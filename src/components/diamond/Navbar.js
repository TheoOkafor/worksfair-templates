import React, { useState } from 'react';

const Navbar = ({ website }) => {
  const [open, setOpen] = useState(false);

  const { metadata, navbar } = website;
  return (
    <header className={`navbar is-transparent container`}>
      <div className={open ? 'nav-open' : 'hide'}>
        <button
          className={`nav-toggle has-text-${website.metadata.themeColour}`}
          onClick={() => setOpen(!open)}
          aria-label="toggle navigation"
        >
          <span className="hamburger"></span>
        </button>
        <nav className="navv">
          <ul onClick={() => setOpen(false)} className="nav__list">
            <li className="nav__item">
              <a href="/diamond" className="nav__link">
                Home.
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                {website.servicesSettings.title}.
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
              {website.about.title}.
              </a>
            </li>
            <li className="nav__item">
              <a href="#features" className="nav__link">
                {website.worksSettings.title}.
              </a>
            </li>
            <li className="nav__item">
              <a href="#team" className="nav__link">
                {website.teams.title}.
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          {navbar.logo.url ? (
            <img
              src={navbar.logo.url}
              alt={`${metadata.name} logo`}
              height="48"
            />
          ) : (
            <h2 className={`webpage-title is-size-4 has-text-black`}>
              <strong>{metadata.name}</strong>
            </h2>
          )}
        </a>
      </div>
    </header>
  );
};

export default Navbar;
