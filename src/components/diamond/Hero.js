import React from 'react';

const Hero = ({ website }) => {
  const { hero, metadata } = website;
  return (
    <section className="hero is-transparent is-large">
      <hr className="nav-hr" />

      <div className="columns">
        <div className="column is-6.5 banner-text">
          <h1 className="banner-heading">{hero.title}</h1>
          <h2 className="banner-sub-heading">{hero.subtitle}</h2>
          <div>
            <a href="#services" className={`has-text-${metadata.themeColour} has-text-weight-bold`}>
              Discover Diamond
            </a>
            <hr className="hr-link" />
          </div>
        </div>
        <div className="column">
          <img
            className="banner-img"
            src={hero.heroImage}
            alt="Banner"
            width="100%"
            height="800"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
