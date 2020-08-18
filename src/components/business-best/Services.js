import React from 'react';

const Services = (props) => {
  const { metadata, services } = props.website;
  return (
    <section className="section is-medium services" id="services">
      <div className="container has-text-centered">
        <div className="columns is-multiline is-centered">
          {services.map((item, index) => (
            <div
              className="column is-half-tablet is-one-third-desktop is-one-quarter-fullhd"
              key={item.title + index}
            >
              <a href={`/services/${item.slug}`} style={{ color: 'inherit' }}>
                <div className="service-item animate-fadeUp">
                  <h3
                    className={`title has-bottomline-${metadata.themeColour} is-size-4 has-font-georgia`}
                  >
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
