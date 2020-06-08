import React from 'react';

const Introduction = ({ website }) => {
  const { introduction } = website;
  return (
    <section
      className={`section 
      is-${introduction.size}
      is-${introduction.colour || website.metadata.themeColour}
      has-text-centered is-long`}
    >
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
              {introduction.title}
            </h1>
            <h2 className="subtitle is-size-5-desktop">
              {introduction.subtitle}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
