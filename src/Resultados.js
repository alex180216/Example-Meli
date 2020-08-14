import React from 'react';
import Item from './Item';


import './Resultados.css';

class Resultados extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            productos:[],
            isFetch: true
        };

    }

    componentDidMount(){
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=bolsos')
        .then(response => response.json())
        .then(productosJson => this.setState({productos: productosJson.results, isFetch: false}));

    }
    render(){

        const {isFetch, productos} = this.state
        if(isFetch){
            return 'Cargando...';
        }
        

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
}

export default Resultados;