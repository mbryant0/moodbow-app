import React from 'react';
import './DirectoryCard.scss';
import './Directory.scss';
import { Link } from 'react-router-dom';

const DirectoryCard = ({ title, image, imagePosition, size, url }) => {
  return (
    <Link to={url} className={`${size} directory-card`}>
      <div
        className='background-image'
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${image})`,
          backgroundPosition: `${imagePosition}`,
        }}
      ></div>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </Link>
  );
};

export default DirectoryCard;
