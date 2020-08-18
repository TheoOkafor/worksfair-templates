import React from 'react';

const renderClients = (client, index) => (
  <div
    key={client.image+index}
    className="column is-half-mobile is-one-third-tablet"
    style={{
      padding: '40px',
    }}
  >
    <figure className="image is-2x1">
      <img
        alt={client.name}
        className="client-logo"
        src={client.image}
      />
    </figure>
  </div>
);

const Clients = ({ website }) => {
  const { clients } = website;
  return(
    <section className="section clients is-medium is-white has-text-centered has-border-top">
      <div className="container is-narrow">
        <div className="columns is-centered">
          <div className="column is-half">
            <h1 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile">
              {clients.title}
            </h1>
            <h2 className="subtitle is-size-5">
              {clients.subtitle}
            </h2>
          </div>
        </div>
        <div className="client-grid">
          <div className="columns is-multiline is-mobile">
            {clients.data.map(renderClients)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
