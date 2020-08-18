import React from 'react';

const CallToAction = ({ website }) => {
  const { callToAction, metadata } = website;
  return (
    <section className={`section call-to-action is-${metadata.themeColour} has-text-centered`}>
      <div className="container is-narrow">
        <h1 className="title has-font-georgia">{callToAction.title}</h1>

        <p>{callToAction.subtitle}</p>
        <div className="margin-top-30">
          <a
            className={`button is-${metadata.themeColour} is-rounded is-medium`}
            href={`mailto:${metadata.email}?subject=Website: Collaboration Request`}
            target="_top"
          >
            {callToAction.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
