import React, { useState } from 'react';
import ItemList from '../components/ItemList';

const NewItems = () => {
  const [brandNewItem, setBrandNewItem] = useState([
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVsgvdjKWCVnbFLCkqYLdeOdF78rkRx9t9Q&usqp=CAU',
      title: 'Sample Product',
      price: '$10',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVsgvdjKWCVnbFLCkqYLdeOdF78rkRx9t9Q&usqp=CAU',
      title: 'Sample Product',
      price: '$10',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVsgvdjKWCVnbFLCkqYLdeOdF78rkRx9t9Q&usqp=CAU',
      title: 'Sample Product',
      price: '$10',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVsgvdjKWCVnbFLCkqYLdeOdF78rkRx9t9Q&usqp=CAU',
      title: 'Sample Product',
      price: '$10',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVsgvdjKWCVnbFLCkqYLdeOdF78rkRx9t9Q&usqp=CAU',
      title: 'Sample Product',
      price: '$10',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVsgvdjKWCVnbFLCkqYLdeOdF78rkRx9t9Q&usqp=CAU',
      title: 'Sample Product',
      price: '$10',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVsgvdjKWCVnbFLCkqYLdeOdF78rkRx9t9Q&usqp=CAU',
      title: 'Sample Product',
      price: '$10',
    },
  ]);
  return (
    <div>
      <h1 style={{ padding: '5px 80px' }}>What's New</h1>
      <ItemList items={brandNewItem} />
    </div>
  );
};

export default NewItems;
