import React from 'react';

const SkillItem = ({ skill, metadata }) => (
  <>
    <h1 className="title is-size-4 is-spaced">{skill.title}</h1>
    <p>{skill.subtitle}</p>
    <p
      className={`list-title has-text-${
        skill.colour || metadata.themeColour
      } has-text-weight-normal`}
    >
      {skill.techTitle}:
    </p>
    <p>{skill.techSubtitle}</p>
    <p
      className={`list-title has-text-${
        skill.colour || metadata.themeColour
      } has-text-weight-normal`}
    >
      {skill.techToolsTitle}
    </p>
    <p>{skill.techTools}</p>
  </>
);

const Skills = ({ website }) => {
  const { skills, metadata } = website;
  return (
    <section className={`section is-none skills has-text-centered`}>
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              {skills.data.map((skill, index) => (
                <div className="column" key={skill.title + index}>
                  <SkillItem skill={skill} metadata={metadata} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
