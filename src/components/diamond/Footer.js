import React from 'react';
import BuiltWith from '../__shared__/BuiltWith';

const renderSocialMedia = (media, index) => (
  <a
    className="footer-link is-medium has-text-light"
    href={media.url}
    target="_blank"
    rel="noopener noreferrer"
    key={media.url + index}
  >
    <i className={`fa fa-${media.name}`} />{' '}
    <span className="social-name"> {media.name} </span>
  </a>
);

const Footer = ({ website }) => {
  const { footer, metadata } = website;
  return (
    <footer className="section is-full-width is-black">
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
        <div className="content has-text-centered">
          <h1 className="title has-text-grey-light is-size-4-touch mb-5">{metadata.name}</h1>
          <p className="mb-5">
            {footer.socialMedia.data.map(renderSocialMedia)}
          </p>
        </div>
        <BuiltWith className="has-text-grey-light" />
      </div>
    </footer>
  );
};

export default Footer;
