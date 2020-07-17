import React from 'react';

import { website } from '../../utils';

const Features = () => {
  const { features } = website;
  return (
    <section className={`features is-large`} id="features">
      <div className="slider is-full-width">
        {features.data.map((item, index) => (
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
            {features.data.map((item, index) => (
              <div
                className="carousel-item"
                key={item.title + index}
                style={{
                  backgroundImage: ` url(${item.backgroundImage})`,
                }}
              >
                <div className="container feat features-head">
                  <h6 className="about-head">{features.title}</h6>
                  <hr className="offers-hr" />
                </div>
                <div className="container feat feat-main">
                  <h2 className="title-heading">{item.title}</h2>
                  <p className="about-para feat-para">{item.subtitle}</p>
                </div>

                <div className="container feat feat-bottom">
                  <a href="/#" className="text-black">
                    {item.linkdesc}
                  </a>
                  <hr className="feat-link" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-nav">
          {features.data.map((item, index) => (
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

export default Features;
