import React from 'react';

const Team = (props) => {
  const { teams } = props.website;

  return (
    <section className="section is-medium offers " id="team">
      <div className="container">
        <div className=" columns">
          <div className="margin-bottom-50 has-text-centered column is-6">
            <img src={teams.image} alt="" />
          </div>
          <div className="column margin-left-50">
            <h6 className={`title is-spaced about-head`}>{teams.title}</h6>
            <h2 className="subtitle">{teams.subtitle}</h2>
            <p className="is-size-5 has-text-grey">{teams.description}</p>
            <div className="margin-top-70">
              <a href="/#" className="has-text-gold has-text-weight-bold">
                {teams.linkdesc}
              </a>
              <hr className="hr-link" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
