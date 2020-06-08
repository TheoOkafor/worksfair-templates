import React from 'react';

const renderTestimony = (testimony, index) => (
  <div className="carousel-item" key={testimony.avatar + index}>
    <div className="testimonial-block">
      <img alt="avatar" className="avatar" src={testimony.avatar} />
      <p className="quote">“{testimony.content}”</p>
      <h1 className="title is-size-5">{testimony.name}</h1>
      <h2 className="subtitle is-size-6">{testimony.role}</h2>
    </div>
  </div>
);

const Testimonials = ({ website }) => {
  const { testimonials, metadata } = website;
  return (
    <section className="section testimonials is-medium is-white has-text-centered has-border-top">
      <div className="container is-narrow">
        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
          {testimonials.title}
        </h1>
        <h2 className="subtitle is-size-5-desktop">{testimonials.subtitle}</h2>
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <div className="testimonials-slider">
              <input
                id="carousel-1"
                type="radio"
                name="carousel"
                defaultChecked
              />
              <input id="carousel-2" type="radio" name="carousel" />
              <input id="carousel-3" type="radio" name="carousel" />
              <div className="carousel-slides">
                <div className="carousel-inner">
                  {testimonials.data.map(renderTestimony)}
                </div>
              </div>
              <div className="carousel-nav">
                <label
                  htmlFor="carousel-1"
                  className={`has-background-${metadata.themeColour}`}
                ></label>
                <label
                  htmlFor="carousel-2"
                  className={`has-background-${metadata.themeColour}`}
                ></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
