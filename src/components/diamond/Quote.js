import React from 'react';

const Quote = (props) => {
  const { quote } = props.website;

  return (
    <section className="section  ">
      <div className="container">
        <h1 className="quote">{quote.text}</h1>
      </div>
    </section>
  );
};

export default Quote;
