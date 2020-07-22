import React from 'react';

const Works = ({ website }) => {
  const { works, worksSettings, metadata } = website;
  const maxWorks = works.slice(0, 4);
  return (
    <section className="section features is-medium" id="features">
      <div className="slider is-full-width">
        {maxWorks.map((item, index) => (
          <input
            key={item.title + index}
            id={`carousel-${index + 1}`}
            type="radio"
            name="carousel"
            defaultChecked={index === 0}
          />
        ))}
        <input id="carousel-2" type="radio" name="carousel" />
        <div className="carousel-slides">
          <div className="carousel-inner">
            {maxWorks.map((item, index) => (
              <div
                className="carousel-item"
                key={item.title + index}
                style={{
                  backgroundImage: `linear-gradient(
                      rgba(0, 0, 0, 0.5),
                      rgba(0, 0, 0, 0.5)
                    ), url(${item.image})`,
                }}
              >
                <div className="container feat features-head">
                  <h6 className="about-head has-text-light">{worksSettings.title}</h6>
                  <hr className="offers-hr" />
                </div>
                <div className="container feat feat-main">
                  <h2 className="title-heading has-text-grey-lighter">{item.title}</h2>
                  <p className="about-para feat-para has-text-grey-light">{item.description}</p>
                </div>

                <div className="container feat feat-bottom">
                  <a
                    href={item.url}
                    className={`has-text-${metadata.themeColour} has-text-weight-bold is-uppercase`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About {item.title}
                  </a>
                  <hr className="feat-link has-background-grey" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-nav">
          {maxWorks.map((item, index) => (
            <label
              key={item.title + index}
              htmlFor={`carousel-${index + 1}`}
              className={`has-background-${metadata.themeColour}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
