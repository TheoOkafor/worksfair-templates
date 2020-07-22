import React from 'react';

const BuiltWith = ({ className }) => (
  <div className={`copyright ${className} has-text-centered`}>
    Built with{' '}
    <a
      href="http://www.worksfair.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      worksfair.com
    </a>{' '}
    <span className="icon has-white-text">
      <i className="fa fa-copyright" />
    </span>
    {new Date().getFullYear()}
  </div>
);

export default BuiltWith;
