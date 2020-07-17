import React from 'react';

const Testimonials = (props) => {
  const { testimonials, metadata } = props.website;

  return (
    <section
      id="testimonials"
      className="section testimonials is-medium is-white has-text-centered has-border-top">
      <div className="container is-narrow">
        <h1 className={`title is-spaced has-bottomline-${metadata.themeColour} is-uppercase`}>
          {testimonials.title}
        </h1>
        <h2 className="subtitle is-size-5-desktop">
          {testimonials.subtitle}
        </h2>
        <div className="columns has-text-centered is-centered">
          {testimonials.data.map((testimony, index) => (
          <div
            key={testimony.avatar+index}
            className={`column is-one-third`}
          >
            <div className="testimonial-block">
              <img alt="avatar" className="avatar" src={testimony.avatar} />

              <p className="is-size-6">
                <span className="margin-right-10">
                  {testimony.name},
                </span>
                <span className={`has-text-${metadata.themeColour}`}>
                  {testimony.role}
                </span>
              </p>
              <p className="is-italic is-size-5">“{testimony.content}”</p>
            </div>
          </div>))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
