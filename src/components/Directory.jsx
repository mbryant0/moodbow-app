import React, { useState } from 'react';
import DirectoryCard from './DirectoryCard';

const Directory = () => {
  const [directoryCard, setDirectoryCard] = useState([
    {
      title: 'clothing',
      image:
        'https://ruthrose.co.uk/wp-content/uploads/2016/04/fashion-pink-story-pastels-editorial-pastel-london-photographer-ruth-rose-sophie-young-storm-solstice-magazine-10-683x1024.jpg',
      imagePosition: '-110px -150px',
      url: '/clothing',
      id: '2',
    },
    {
      title: 'accessories',
      image:
        'https://www.capturefactory.co.uk/wp-content/uploads/2018/12/lifestyle.jpg',
      imagePosition: '-270px -290px',
      url: '/accessories',
      id: '4',
    },
    {
      title: 'beauty',
      image:
        'https://media.istockphoto.com/photos/makeup-brush-and-shiny-sparkles-on-pastel-pink-background-festive-picture-id1166511941?k=6&m=1166511941&s=612x612&w=0&h=-DYeFcWFHoDTaW-WMfvmvW04hKinKo1kiyBx_MKlNOs=',
      imagePosition: '-100px -150px',
      url: '/beauty',
      id: '6',
    },
    {
      title: 'home & living',
      image:
        'https://cdn.decoist.com/wp-content/uploads/2017/09/Decorating-the-home-office-in-delicate-and-stylish-pastels.jpg',
      imagePosition: '0px -220px',
      size: 'large',
      url: '/home-and-living',
      id: '8',
    },
    {
      title: "what's new",
      image:
        'https://expertphotography.com/wp-content/uploads/2018/09/product-photography-checklist-pastel-candy-colour-bag.jpg',
      imagePosition: '-60px 360px',
      size: 'large',
      url: '/new',
      id: '10',
    },
  ]);
  return (
    <div className='directory-container'>
      {directoryCard.map(({ id, ...otherDirectoryProps }) => {
        return (
          <DirectoryCard
            key={id}
            {...otherDirectoryProps}
          />
        );
      })}
    </div>
  );
};

export default Directory;
