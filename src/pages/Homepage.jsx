import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Directory from '../components/Directory';
import './Homepage.scss';

const Homepage = () => {
  return (
    <div>
      <NavigationBar />
      <div className='homepage'>
        <Directory />
      </div>
    </div>
  );
};

export default Homepage;
