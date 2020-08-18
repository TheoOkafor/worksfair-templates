import React from 'react';

const About = (props) => {
  const { about, metadata } = props.website;

  return (
    <section className="section is-medium" id="about">
      <div className="container">
        <div className="columns is-6">
          <div className="margin-bottom-50 has-text-centered column is-6">
            <img src={about.image} alt="" />
          </div>
          <div className="column content">
            <h6 className={`title is-spaced has-text-${metadata.themeColour}`}>{about.title}</h6>
            <h2 className="subtitle has-font-georgia">{about.descriptionTitle}</h2>
            <p className="is-size-5 has-text-grey">{about.aboutDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
