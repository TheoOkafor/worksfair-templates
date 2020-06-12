import React from 'react';

import { website } from '../../utils';

const data = [
  {
    title: 'Construction',
    subtitle: 'We build the best things. From skyscrapers to bungalows to huts. We build the 4th mainland bridge and the 3rd Niger bridge. Iconic stuff.',
    icon: 'building',
  },
  {
    title: 'Consultancy',
    subtitle: 'We build the best things. From skyscrapers to bungalows to huts. We build the 4th mainland bridge and the 3rd Niger bridge. Iconic stuff.',
    icon: 'building-o',
  },
  {
    title: 'Chips Manufacturing',
    subtitle: 'We build the best things. From skyscrapers to bungalows to huts. We build the 4th mainland bridge and the 3rd Niger bridge. Iconic stuff.',
    icon: 'microchip'
  },
]

const Services = () => {
  const { metadata } = website;
  return (
    <section className="section is-medium services" id="services" >
      <div className="container has-text-centered">
        <div className="margin-bottom-50">
          <h1 className={`title is-spaced has-bottomline-${metadata.themeColour} is-uppercase`}>Services</h1>
          <h2 className="subtitle">Some of the things we offer</h2>
        </div>  
        <div className="columns">
          {data.map((item, index) => (<div
            className="column is-half-tablet is-one-third-desktop is-one-third-widescreen"
            key={item.title+index}
          >
            <div className={`service-item animate-fadeUp border-color-${metadata.themeColour}`}>
              <span className={`icon has-text-${metadata.themeColour}`}>
                <i className={`mdi mdi-puzzle-edit-outline mdi-48px`}></i>
              </span>
              <h3 className="is-size-4 margin-top-bottom-15">{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>))}
        </div>
      </div>
    </section>
  );
};

export default Services;
