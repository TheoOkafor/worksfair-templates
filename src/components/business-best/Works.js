import React from 'react';

const Works = ({ website }) => {
  const { worksSettings, works, metadata } = website;
  const renderWork = (work) => {
    const url = `http://www.worksfair.com/works/${work.slug}`;
    const workUrl = work.has_url ? work.url : url;

    return (
      <div
        key={work.description}
        className="column is-half-tablet is-one-third-widescreen"
      >
        <figure className="image is-3by2">
          <img alt="project icon" className="work" src={work.image} />
          <figcaption className={`has-text-centered`}>
            <h1 className="title is-size-5 is-size-4-widescreen has-text-light has-font-georgia">
              {work.title}
            </h1>
            <h5 className="subtitle is-size-6 is-size-5-widescreen has-text-light">
              {work.description}
            </h5>
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
      className="section projects is-medium is-light has-text-centered"
      id="works"
    >
      <div className="container">
        <h1 className="title is-spaced is-size-3-mobile is-size-2-desktop has-font-georgia">
          {worksSettings.title}
        </h1>
        <h2 className="subtitle is-size-5-desktop">{worksSettings.subtitle}</h2>
        <div className="project-grid">
          <div className="columns is-multiline is-centered">
            {works && works.map(renderWork)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
