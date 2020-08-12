import React from 'react';
import './Item.css';

function Item(props){
    return (
        <div className="item">
            <a href="" className="image"><img src={props.thumbnail}/></a>
            <div className="info">
                <div className="price">$ {props.price}</div>
                <a href="" className="title">{props.title}</a>
            </div>
            <div className="address">{props.address}</div>
        </div>
    )
}

export default Item;