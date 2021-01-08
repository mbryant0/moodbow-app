import React from 'react';
import './DirectoryCard.scss';
import './Directory.scss';

const DirectoryCard = ({ title, image, imagePosition }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: `${imagePosition}`,
      }}
      className='directory-card'
    >
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default DirectoryCard;
