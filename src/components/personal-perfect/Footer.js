import React from 'react';
import BuiltWith from '../__shared__/BuiltWith';

const renderSocialMedia = (media, index) => (
  <a
    className="button is-medium"
    href={media.url}
    target="_blank"
    rel="noopener noreferrer"
    key={media.url+index}
  >
    <i className={`fa fa-${media.name}`} />
  </a>
);

const Footer = ({ website }) => {
  const { footer, metadata } = website;
  return (
    <footer className={`section is-${metadata.themeColour} is-small has-text-centered`}>
        <div className="container is-narrow">
          {/* { website.icon ?
            <a className="logo" href="/">
              <img
                src={website.icon}
                alt={website.name + ' logo'}
                height="48"
              />
            </a>
            : <h1 className="is-size-4">{website.name}</h1>
          } */}
          <div className="columns is-centered">
            <div className="column is-one-third">
              <h1 className="title is-size-4-touch">
                {metadata.tagline}
              </h1>
            </div>
          </div>
          <div className="social-icons">
            <p className="field">
              {footer.socialMedia.data.map(renderSocialMedia)}
            </p>
          </div>
          <div className="copyright">
            Design was inspired by {' '}
            <a href="https://mattfarley.ca/">mattfarley.ca</a>{' '}
            <span
              className="icon has-white-text"
              // style="vertical-align:middle;"
            >
              <i className="fa fa-copyright"></i>
            </span>
            {new Date().getFullYear()}
          </div>
          <BuiltWith />
        </div>
      </footer>
  );
}

export default Footer;
