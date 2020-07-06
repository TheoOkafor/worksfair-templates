import React from "react";

const renderSocialMedia = (media, index) => (
  <a
    className="footer-link is-medium"
    href={media.url}
    target="_blank"
    rel="noopener noreferrer"
    key={media.url + index}
  >
    <i className={`fa fa-${media.name}`} />{" "}
    <span className="social-name"> {media.name} </span>
  </a>
);

const Footer = ({ website }) => {
  const { footer, metadata } = website;
  return (
    <footer className={`section is-full-width is-black  `}>
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
        <h1 className="is-size-4">{website.name}</h1>
        <div className="columns is-centered">
          <div className="column is-3">
            <h1 className="title is-size-4-touch">{metadata.name}</h1>
          </div>

          <div className="column is-9 social-icons">
            <p className="field">
              {footer.socialMedia.data.map(renderSocialMedia)}
            </p>
          </div>
        </div>
        <div className="copyright  has-text-centered">
          Design with love by <a href="https://worksfair.com/">Worksfair</a>{" "}
          <span
            className="icon has-white-text"
            // style="vertical-align:middle;"
          >
            <i className="fa fa-copyright"></i>
          </span>
          {new Date().getFullYear()}
        </div>
        <div className="made-by-bulma has-text-centered">
          <a href="https://bulma.io">
            <img
              src="https://bulma.io/images/made-with-bulma--white.png"
              alt="Made with Bulma"
              width="163"
              height="31"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
