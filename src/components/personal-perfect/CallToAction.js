import React from 'react';

const CallToAction = ({ website }) => {
  const { callToAction, metadata } = website;
  return (
    <section className={`section call-to-action is-${metadata.themeColour} has-text-centered`}>
      <div className="container is-narrow">
        <div className="box">
          <div className="columns level">
            <div className="column level-item">
              <h1 className="title">{callToAction.title}</h1>
            </div>
            <div className="column level-item">
              <p>{callToAction.subtitle}</p>
            </div>
            <div className="column level-item">
              <a
                className={`button is-${metadata.themeColour} is-outlined is-rounded is-medium`}
                href={`mailto:${metadata.email}?subject=Website: Collaboration Request`}
                target="_top"
              >
                {callToAction.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
