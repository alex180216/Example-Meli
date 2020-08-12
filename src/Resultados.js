import React from 'react';
import Item from './Item';
import './Resultados.css';

function Resultados(props){
    return(
        
        <div className="list">
            {
                props.items.map(item =>
                    <Item 
                        key = {item.id}
                        title={item.title} 
                        thumbnail={item.thumbnail}
                        price = {item.price}  
                        address={item.address}  
                    />

                        )
            }
        </div>
    );
}

export default Resultados;