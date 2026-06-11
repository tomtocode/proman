import React from 'react';
import Header from '../Header/Header';

const NotFound = () => {
  return (
    <>
    <Header></Header>
    <div>
      <h3>Oops! Something went wrong.</h3>
      <p>The page you are searching for could not be found.</p>
    </div>
    </>
  );
};

export default NotFound;