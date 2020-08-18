import React from 'react';

import Navbar from './Navbar';

const Hero = ({ website }) => {
  const { metadata, hero } = website;
  return (
    <section className="slider">
      {hero.data.map((item, index) => (
        <input
          key={item.subtitle + index}
          id={`carousel-${index + 1}`}
          type="radio"
          name="carousel"
          defaultChecked={index === 0}
        />
      ))}
      <div className="carousel-slides">
        <div className="carousel-inner">
          {hero.data.map((item, index) => (
            <div
              className={`hero carousel-item is-${metadata.themeColour} is-large`}
              key={item.title + index}
              style={{
                backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(${item.backgroundImage})`,
              }}
            >
              <div className="hero-head">
                <Navbar website={website} />
              </div>
              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title is-size-3-mobile is-size-1 has-font-lucida-console">{item.title}</h1>
                  <h2 className="subtitle has-font-georgia">{item.subtitle}</h2>
                </div>
              </div>
              <div className="hero-footer"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-nav">
        {hero.data.map((item, index) => (
          <label
            key={item.backgroundImage + index}
            htmlFor={`carousel-${index + 1}`}
            className={`has-background-${metadata.themeColour}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
