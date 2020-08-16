import React from 'react';
import Item from './Item';


import './Resultados.css';

function Resultados(props){
    return (
        <div className="list">
            {
                props.items.map(item =>
                    <Item
                        id = {item.id}
                        title={item.title}
                        thumbnail ={item.thumbnail}
                        price = {item.price}
                        address = {item.address.city_name}
                    />
                    )
            }

        </div>
    )
}

/* class Resultados extends React.Component{


    async componentDidMount(){
        const productosJson =  await getResultsByName(this.state.busqueda)
        this.setState({productos: productosJson.results, isFetch: false})
    }
    render(){

        
        

        return(
            productos.map((producto) => 
                <Item 
                    title={producto.title}
                    thumbnail ={producto.thumbnail}
                    price = {producto.price}
                    address = {producto.address.city_name}
                />
                            
            )
        )
    }
} */

export default Resultados;