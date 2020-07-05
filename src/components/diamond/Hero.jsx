import React from "react";

import { website } from "../../utils";

const Hero = () => {
  const { metadata, hero } = website;
  return (
    <section className={`hero is-transparent is-large`}>
      <hr className="nav-hr" />

      <div className="columns">
        <div className="column is-7 banner-text">
          <h1 className="banner-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eum
            porro dicta velit eaque asperiores
          </h1>
          <h2 className="banner-sub-heading">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            ea vitae eius saepe minima cupiditate!Sit nesciunt commodi
            recusandae magni.
          </h2>
          <div>
            <a href="" className="text-gold">
              Discover Diamond
            </a>
            <hr className="hr-link" />
          </div>
        </div>
        <div className="column">
          <img
            className="banner-img"
            src="https://bit.ly/31w7nGK"
            alt="Banner Image"
            width="100%"
            height="900px"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
