import React from 'react';

const Services = (props) => {
  const { offers } = props.website;
  return (
    <section className="section offers" id="offers">
      <div className="container ">
        <h6 className="about-head">{offers.title}</h6>
        <hr className="offers-hr" />
        <div className="is-centered">
          {offers.data.map((item, index) => (
            <div
              key={item.title + index}
            >
              <div className="columns" style={{justifyContent: 'center'}}>
                <div className={`column is-4 title-area`}>
                  <h1 className="title-heading">{item.title}</h1>
                  <div>
                    <a href="/#" className="has-text-gold has-text-weight-bold">
                      {item.tag}
                    </a>
                    <img
                      src="https://trium.ng/public/images/arrow.png"
                      alt=""
                      width="25"
                      height="25"
                      className="arrow"
                    />
                  </div>
                </div>
                <div className="column is-8 desc-area">
                  <p className="about-para">{item.desc}</p>
                </div>
              </div>
              <img
                src={item.src}
                alt="service"
                width="100%"
                className="service-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;