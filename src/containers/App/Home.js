import React from 'react';

import { templates } from '../../utils/templates';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero is-blue is-medium">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <h1 className="subtitle mt-4">
                  <b>Worksfair Templates</b>
                </h1>
                <span
                  className="navbar-burger burger"
                  data-target="navbarMenuHeroA"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <Link to="/" className="navbar-item is-active">
                    Home
                  </Link>
                  <span className="navbar-item">
                    <a
                      href="https://github.com/TheoOkafor/worksfair-templates"
                      className="button is-blue is-inverted"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon">
                        <i className="fa fa-github"></i>
                      </span>
                      <span>Github</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Welcome to Worksfair templates</h1>
            <h2 className="subtitle">
              This is a collection of ReactJS-based open-source templates. built
              with Bulma CSS Library
            </h2>
          </div>
        </div>
        <div className="hero-foot"></div>
      </section>
      <footer className="footer is-large is-light">
        <div className="columns mb-5" style={{ justifyContent: 'center' }}>
          <div className="column is-4">
            <h3 className="subtitle has-text-centered">Available Templates</h3>
            <div className="content box">
              <ul>
                {templates.map((template) => (
                  <li key={template.name} className="mt-4">
                    <Link to={`/${template.name}`}>{template.title}</Link>
                    <br />
                    <span className="has-text-grey">
                      Contributor -{' '}
                      <a
                        className="has-text-grey"
                        href={template.contributor.url}
                      >
                        <span className="has-text-grey-dark">{template.contributor.name}</span>
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="has-text-centered">
          <div className="copyright">
            Worksfair Templates
            <span
              className="icon has-white-text"
              // style="vertical-align:middle;"
            >
              <i className="fa fa-copyright"></i>
            </span>
            {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
