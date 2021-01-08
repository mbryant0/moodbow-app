import React, { useState } from 'react';
import DirectoryCard from './DirectoryCard';

const Directory = () => {
  const [directoryCard, setDirectoryCard] = useState([
    {
      title: 'Clothing',
      image: '1',
      id: '2',
    },
    {
      title: 'Accessories',
      image: '2',
      id: '4',
    },
    {
      title: 'Beauty',
      image: '3',
      id: '6',
    },
    {
      title: 'Home & Living',
      image: '4',
      id: '8',
    },
    {
      title: "What's New",
      image: '5',
      id: '10',
    },
  ]);
  return (
    <div className='directory-container'>
      {directoryCard.map(({ title, image, id }) => {
        return <DirectoryCard key={id} title={title} />;
      })}
    </div>
  );
};

export default Directory;
