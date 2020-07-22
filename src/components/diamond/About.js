import React from 'react';

import { templateAddons } from '../../utils/addons';

const About = ({ website }) => {
  const { about, metadata } = website;
  const { aboutContent, aboutDescription } = templateAddons;
  return (
    <section className="section is-medium" id="about">
      <div className={`container is-transparent is-large section-about`}>
        <div className="columns about-us">
          <div className="column is-7 ">
            <h6 className="about-heading">{about.title}</h6>
            <p className="about-paragraph is-size-3-desktop is-size-5-mobile">{aboutDescription}</p>
          </div>
          <div className="column">
            <h2 className="about-head">{about.subtitle}</h2>
            <p className="about-para">{aboutContent}</p>
            <div>
              <a
                href="#services"
                className={`has-text-${metadata.themeColour} has-text-weight-bold`}
              >
                More About Diamond
              </a>
              <hr className="hr-link" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
