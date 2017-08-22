import React from 'react';

const PageNotFound = ({ location }) => (
  <div>
    <h2>404 not found</h2>
    <p>page {location.pathname} does not exist</p>
  </div>
);

export default PageNotFound;