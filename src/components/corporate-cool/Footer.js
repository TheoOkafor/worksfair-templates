import React from 'react'


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
        <div className="columns is-multiline is-mobile">
          <div className="column is-6-mobile is-half-tablet is-one-quarter-desktop has-website-name">
            <h3 className={`is-size-4 has-text-${metadata.themeColour}`}>{metadata.name}</h3>
          </div>
          <div className="column is-6-mobile is-half-tablet is-one-quarter-desktop">
            <h5 className="is-size-5 margin-bottom-5">Quick Links</h5>
            <ul className={`content quick-links has-text-${metadata.themeColour}`}>
              <li><a href="#home" alt="home" >Home</a></li>
              <li><a href="#about" alt="about" >About</a></li>
              <li><a href="#service" alt="services" >Services</a></li>
              <li><a href="#works" alt="works" >Works</a></li>
            </ul>
          </div>
          <div className="column is-6-mobile is-half-tablet is-one-quarter-desktop">
            <div>
              <p>
                <span>
                  12 Washington memorial, Awka road, Onitsha
                </span>
                <br />
                <span>+234835302048239</span>
                <br />
                <span>info@email.com</span>
              </p>
            </div>
            <div className="social-icons">
              <p className="field">
                {footer.socialMedia.data.map(renderSocialMedia)}
              </p>
            </div>
          </div>
          <div className="column is-6-mobile is-half-tablet is-one-quarter-desktop">
            <div className="copyright">
              Built with {' '}
              <a href="http://www.worksfair.com/">worksfair.com</a>{' '}
              <span
                className="icon has-white-text"
              >
                <i className="fa fa-copyright" />
              </span>
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
