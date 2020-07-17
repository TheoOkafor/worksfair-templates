import React from 'react';

import { website } from '../../utils';
import { templateAddons } from '../../utils/addons';

const About = () => {
  const { about } = website;
  const { aboutContent, aboutDesc } = templateAddons;
  return (
    <section
      className={`container is-transparent is-large section-about`}
      id="about"
    >
      <div className="columns about-us">
        <div className="column is-7 ">
          <h6 className="about-heading">{about.title}</h6>
          <p className="about-paragraph">{aboutDesc}</p>
        </div>
        <div className="column">
          <h2 className="about-head">{about.subtitle}</h2>
          <p className="about-para">{aboutContent}</p>
          <div>
            <a href="/#" className="has-text-gold has-text-weight-bold">
              More About Diamond
            </a>
            <hr className="hr-link" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
