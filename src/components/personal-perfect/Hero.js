import React from 'react';

export default ({ website }) => {
  const { hero } = website;
  return (
    <section
      className={`hero is-${
        hero.colour || website.metadata.themeColour
      } has-text-centered animate-fadeUp`}
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column has-text-centered">
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                {hero.title}
              </h1>
              <h2 className="subtitle is-size-4-desktop">{hero.subtitle}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container">
          <img
            alt="hero"
            className="is-bottom"
            width="500"
            src={hero.clipArt}
          />
        </div>
      </div>
    </section>
  );
};
