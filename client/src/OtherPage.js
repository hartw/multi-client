import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      This is representing another page - possibly for your app
      <Link to="/">Go back home</Link>
    </div>
  );
};
