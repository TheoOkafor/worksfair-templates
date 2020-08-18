import React from 'react';

const Testimony = ({ testimony, metadata }) => (
  <div
    className="column is-10-mobile is-6-tablet is-4-widescreen"
    id="testimonials"
  >
    <div className="carousel-item">
      <div className="testimonial-block">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img alt="avatar" className="avatar" src={testimony.avatar} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-size-5">{testimony.name}</p>
            <p
              className={`subtitle is-size-6 has-text-${metadata.themeColour}`}
            >
              {testimony.role}
            </p>
          </div>
        </div>
        <p className="quote">“{testimony.content}”</p>
      </div>
    </div>
  </div>
);

const Testimonials = ({ website }) => {
  const { testimonials, metadata } = website;
  return (
    <section className="section testimonials is-medium">
      <div className="container is-narrow">
        <h1 className="title is-spaced has-text-centered is-size-3-mobile is-size-2-desktop has-font-georgia">
          {testimonials.title}
        </h1>
        <div
          className="columns is-mobile is-centered mt-5"
          style={{ overflowX: 'scroll' }}
        >
          {testimonials.data.map((testimony, index) => (
            <Testimony
              testimony={testimony}
              metadata={metadata}
              key={testimony.avatar + index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
