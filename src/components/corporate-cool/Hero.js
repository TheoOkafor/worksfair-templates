import React from 'react';

import { website } from '../../utils';

const Hero = () => {
  const { metadata, hero } = website;
  return (
    <section className={`hero is-${metadata.themeColour} is-large`}>
      <div className="slider">
        {hero.data.map((item, index) => (
          <input
            key={item.subtitle + index}
            id={`carousel-${index + 1}`}
            type="radio"
            name="carousel"
            defaultChecked={index === 0}
          />
        ))}
        <input id="carousel-2" type="radio" name="carousel" />
        <div className="carousel-slides">
          <div className="carousel-inner">
            {hero.data.map((item, index) => (
              <div
                className="carousel-item"
                key={item.title + index}
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(${item.backgroundImage})`,
                }}
              >
                <div className="container has-text-centered">
                  <p className="title is-uppercase">{item.title}</p>
                  <p className="subtitle">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-nav">
          {hero.data.map((item, index) => (
            <label
              key={item.backgroundImage + index}
              htmlFor={`carousel-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
