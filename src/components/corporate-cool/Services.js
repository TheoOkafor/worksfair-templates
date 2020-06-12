import React from 'react';

import { getOffset } from '../../utils';

const Services = (props) => {
  const { metadata, services } = props.website;
  return (
    <section className="section is-medium services" id="services">
      <div className="container has-text-centered">
        <div className="margin-bottom-50">
          <h1
            className={`title is-spaced has-bottomline-${metadata.themeColour} is-uppercase`}
          >
            {services.title}
          </h1>
          <h2 className="subtitle">{services.subtitle}</h2>
        </div>
        <div className="columns">
          {services.data.map((item, index) => (
            <div
              className={`column is-one-third-desktop ${getOffset(
                services.data.length,
                index
              )}`}
              key={item.title + index}
            >
              <div
                className={`service-item animate-fadeUp border-color-${metadata.themeColour}`}
              >
                <span className={`icon has-text-${metadata.themeColour}`}>
                  <i className={`mdi mdi-puzzle-edit-outline mdi-48px`}></i>
                </span>
                <h3 className="is-size-4 margin-top-bottom-15">{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
