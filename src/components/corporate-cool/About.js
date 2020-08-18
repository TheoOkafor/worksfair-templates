import React from 'react';

const About = (props) => {
  const { about, metadata } = props.website;
  
  return (
    <section className="section about is-medium">
      <div className="container">
        <div className="margin-bottom-50 has-text-centered">
          <h1
            className={`title is-spaced has-bottomline-${metadata.themeColour} is-uppercase`}
          >
            {about.title}
          </h1>
          <h2 className="subtitle">{about.subtitle}</h2>
          <img
            alt="about"
            width="50%"
            src={about.image}
            style={{ borderRadius: '4px' }}
          />
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical has-text-right has-text-centered-mobile">
            <div className="tile is-child content">
              <h2>{about.descriptionTitle}</h2>
              <p>{about.aboutDescription}</p>
            </div>
          </div>

          <div className="tile is-parent is-vertical has-text-left has-text-centered-mobile">
            <div className="tile is-child content">
              <h2>{about.contentTitle}</h2>
              <p>{about.aboutContent}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
