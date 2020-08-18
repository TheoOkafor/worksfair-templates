import React from 'react';

const Services = (props) => {
  const { services, servicesSettings, metadata } = props.website;
  return (
    <section className="section is-medium offers" id="services">
      <div className="container ">
        <h6 className="about-head">{servicesSettings.title}</h6>
        <hr className="offers-hr" />
        <div className="is-centered">
          {services.map((item, index) => (
            <div key={item.title + index}>
              <div className="columns" style={{ justifyContent: 'center' }}>
                <div className={`column is-4 title-area`}>
                  <h1 className="title-heading">{item.title}</h1>
                  <div>
                    <a
                      href="#services"
                      className={`mt-3 has-text-${metadata.themeColour} has-text-weight-bold`}
                      style={{ display: 'flex' }}
                    >
                      <span className="mr-1">Discover More</span>
                      <svg
                        style={{ width: '25px', height: '25px',  }}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M6,13V11H14L10.5,7.5L11.92,6.08L17.84,12L11.92,17.92L10.5,16.5L14,13H6M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z"
                        />
                      </svg>
                    </a>
                    
                  </div>
                </div>
                <div className="column is-8 desc-area">
                  <p className="about-para">{item.description}</p>
                </div>
              </div>
              <img
                src={item.image}
                alt="service"
                width="100%"
                className="service-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
