import React from 'react';

import { website } from '../../utils';

const Works = () => {
  const { worksSettings, works, metadata } = website;
  const renderWork = (work) => {
    const url = `http://www.worksfair.com/works/${work.slug}`;
    const workUrl = work.has_url ? work.url : url;

    return (
      <div
        key={work.description}
        className="column is-12-mobile is-half-tablet is-one-third-desktop"
        id="works"
      >
        <figure className="image is-3by2">
          <img alt="project icon" className="work" src={work.image} />
          <figcaption className="has-text-centered">
            <h1 className="title is-size-5 is-size-4-widescreen">
              {work.description}
            </h1>
            <a
              className={`button is-${metadata.themeColour}-invert is-outlined is-rounded cto`}
              href={workUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: '0px auto',
              }}
            >
              <span>More details</span>
              <span className="icon">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </figcaption>
          <div
            className={`overlay has-background-${metadata.themeColour}`}
          ></div>
        </figure>
      </div>
    );
  };

  return (
    <section
      id="works"
      className="section projects has-text-centered">
      <div className="container is-narrow">
        <h1
          className={`title has-bottomline-${metadata.themeColour} is-spaced is-size-3-desktop is-size-4-mobile is-uppercase`}
        >
          {worksSettings.title}
        </h1>
        <h2 className="subtitle is-size-5-desktop">{worksSettings.subtitle}</h2>
        <div className="project-grid">
          <div className="columns is-multiline is-mobile">
            {works && works.map(renderWork)}
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column">
            <a
              className={`button is-${metadata.themeColour} is-medium`}
              href={worksSettings.cto.url}
            >
              <span>{worksSettings.cto.title}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
