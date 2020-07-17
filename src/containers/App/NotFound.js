import React, { Fragment } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { Helmet } from 'react-helmet';

export default () => {
  const compass =
    'https://res.cloudinary.com/worksfair/image/upload/v1564834329/dev/qvwvfuxg6040ppipkanj.png';
  return (
    <Fragment>
      <Helmet>
        <title>Not Found - Worksfair</title>
      </Helmet>
      <div
        className="hero is-large has-background-light"
      >
        <div
          className="hero-body"
          style={{ padding: '50px' }}
        >
          <div className="container columns">
            <div className="column is-1" />
            <div className="column is-7">
              <h1
                style={{ fontSize: '70px', marginTop: '20px' }}
                className="has-text-extra-large"
              >
                404
              </h1>
              <p
                style={{ fontSize: '30px', marginTop: '15px' }}
                className="has-text-large"
              >
                We are sorry about this.
              </p>
              <p
                style={{ fontSize: '20px', marginTop: '15px' }}
                className="is-size-5"
              >
                The website you are looking for is not here.
              </p>
              <p
                className="margin-top-25"
                style={{ marginTop: '20px' }}
              >
                <a
                  href="http://www.worksfair.com"
                  className="button is-info is-medium"
                >
                  Go to worksfair
                </a>
              </p>
            </div>
            <div className="column is-3 has-text-extra-large">
              <Image
                cloudName="worksfair"
                publicId={compass}
                type="fetch"
                className="work-image"
              >
                <Transformation width="700" fetchFormat="auto" />
              </Image>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
