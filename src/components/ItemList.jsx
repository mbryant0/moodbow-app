import React, {useState} from 'react';
import Item from './Item';
import './ItemList.scss'


const ItemList = ({items}) => {


    return (
    <div className='item-container'>
      {items.map(({ title, image, price, imagePosition }) => {
        return (
          <Item
            image={image}
            title={title}
            price={price}
            imagePosition={imagePosition}
          />
        );
      })}
    </div>
     );
}

export default ItemList;