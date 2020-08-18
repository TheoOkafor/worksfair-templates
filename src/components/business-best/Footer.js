import React from 'react'
import BuiltWith from '../__shared__/BuiltWith';


const Footer = ({website}) => {
  const { metadata, footer, about } = website;
  
  const renderSocialMedia = (media, index) => (
    <a
      className={`margin-15 has-text-${metadata.themeColour}`}
      href={media.url}
      target="_blank"
      rel="noopener noreferrer"
      key={media.url+index}
    >
      <i className={`fa fa-${media.name}`} />
    </a>
  );
  return (
    <footer className="footer is-medium is-light">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <h3 className={`is-size-4 has-text-${metadata.themeColour} has-font-georgia`}>{metadata.name}</h3>
            <p className="margin-top-20">{about.aboutDescription}</p>
          </div>
          <div className="column is-half-tablet is-one-quarter-desktop">
            <h5 className="is-size-5 margin-bottom-5 has-font-georgia">Quick Links</h5>
            <ul className={`content quick-links has-text-${metadata.themeColour}`}>
              <li><a href="#home" alt="home" >Home</a></li>
              <li><a href="#service" alt="services" >Services</a></li>
              <li><a href="#works" alt="works" >Works</a></li>
              <li><a href="#about" alt="about" >About</a></li>
            </ul>
          </div>
          <div className="column is-one-third-desktop">
            <div className="content margin-bottom-20">
                <p className="has-text-grey-dark">
                  <span className="icon">
                    <i className="fa fa-map-marker" />
                  </span>
                  {metadata.address}
                </p>
                <p className="has-text-grey-dark">
                  <span className="icon">
                    <i className="fa fa-mobile" />
                  </span>
                  {metadata.phone}
                </p>
                <p className="has-text-grey-dark">
                  <span className="icon">
                    <i className="fa fa-envelope-o" />
                  </span>
                  {metadata.email}
                </p>
                <p className="field">
                  {footer.socialMedia.data.map(renderSocialMedia)}
                </p>
            </div>
          </div>
        </div>      
        <BuiltWith />
      </div>
    </footer>
  )
}

export default Footer;
