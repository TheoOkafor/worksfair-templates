import React from 'react';

const Quote = (props) => {
  const { metadata } = props.website;

  return (
    <section className="section">
      <div className="container">
        <h1 className="has-font-verdana quote">"{metadata.tagline}"</h1>
      </div>
    </section>
  );
};

export default Quote;
