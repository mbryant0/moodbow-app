import React from 'react';
import './Item.scss'

const Item = ({image, title, price, imagePosition}) => {


    return (
    <div className="item">
        <div className='item-image' style={{backgroundImage:`url(${image})`, backgroundPosition:`${imagePosition}`}}/>
        <div className='item-content'>
            <h2 className="item-title">{title}</h2>
            <p className='item-price'>{price}</p>
        </div>
    </div>
    
    
    );}

export default Item;