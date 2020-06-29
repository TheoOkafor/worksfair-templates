import React from 'react';

const About = (props) => {
  const { about, metadata } = props.website;

  return (
    <section className="section about is-medium">
      <div className="container">
        <div className="margin-bottom-50 has-text-centered">
          <h1 className={`title is-spaced has-bottomline-${metadata.themeColour} is-uppercase`}>{about.title}</h1>
          <h2 className="subtitle">{about.subtitle}</h2>
        </div>  
      <div className="tile is-ancestor">
        <div className="tile is-parent is-vertical has-text-right has-text-centered-mobile">
          <div className="tile is-child content">
            <h2>{about.left.title}</h2>
            <p>{about.left.content}</p>
          </div>
          <div className="tile is-child">
            <img src={about.left.image} alt="imabong" />
          </div>
        </div>

        <div className="tile is-parent is-vertical has-text-left has-text-centered-mobile">
          <div className="tile is-child">
            <img src={about.right.image} alt="imabong" />
          </div>
          <div className="tile is-child content">
            <h2>{about.right.title}</h2>
            <p>{about.right.content}</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About;
