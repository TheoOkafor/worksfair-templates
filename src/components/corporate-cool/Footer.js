import React from 'react'
import BuiltWith from '../__shared__/BuiltWith';


const Footer = ({website}) => {
  const { metadata, footer } = website;
  
  const renderSocialMedia = (media, index) => (
    <a
      className={`button is-medium has-background-${metadata.themeColour}`}
      href={media.url}
      target="_blank"
      rel="noopener noreferrer"
      key={media.url+index}
    >
      <i className={`fa fa-${media.name}`} />
    </a>
  );
  return (
    <footer className="section is-light">
      <div className="container">
        <div className="columns is-centered has-text-centered">
          <div className="column is-one-third-desktop">
            <h3 className={`is-size-4 has-text-${metadata.themeColour}`}>{metadata.name}</h3>
          </div>
          <div className="column is-half-tablet is-one-quarter-desktop">
            <h5 className="is-size-5 margin-bottom-5">Quick Links</h5>
            <ul className={`content quick-links has-text-${metadata.themeColour}`}>
              <li><a href="#home" alt="home" >Home</a></li>
              <li><a href="#about" alt="about" >About</a></li>
              <li><a href="#service" alt="services" >Services</a></li>
              <li><a href="#works" alt="works" >Works</a></li>
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
            </div>
          </div>
        </div>
        <div className="columns is-centered mt-5">
          <div className="social-icons has-text-centered">
            <p className="field">
              {footer.socialMedia.data.map(renderSocialMedia)}
            </p>
          </div>
        </div>
        
        <BuiltWith />
      </div>
    </footer>
  )
}

export default Footer;
