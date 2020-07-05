import React from "react";

import { website } from "../../utils";

const About = () => {
  const { metadata, about } = website;
  return (
    <section
      className={`container is-transparent is-large section-about`}
      id="about"
    >
      <div className="columns about-us">
        <div className="column is-7 ">
          <h6 className="about-heading">{about.title}</h6>
          <p className="about-paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            ea vitae eius saepe minima cupiditate!Sit nesciunt commodi
            recusandae magni. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Possimus ullam doloribus deserunt officiis
            blanditiis minus
          </p>
        </div>
        <div className="column">
          <h2 className="about-head">{about.subtitle}</h2>
          <p className="about-para">{about.desc}</p>
          <div>
            <a href="" className="text-gold">
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
