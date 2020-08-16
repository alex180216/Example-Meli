import React, {Component} from 'react';
import Search from './Search';
import './Buscador.css';
import logosearch from './ic_Search.png';
import logo from './Logo_ML.png';

class Buscador extends Component{
    constructor(){
        super();
        
    }

    handleClick =(e) => {
        e.preventDefault();
        console.log('Has hecho click en buscar');
    }
    handleNameProduct = (e) => {
        e.preventDefault();
        this.setState({busqueda: e.target.value});
        
    }
    
    render() {
        return(
            <div className="container-search">
                <div className="container-interno">
                    <div className="app-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="search">
                        <Search />
                    </div>
                    <div className="actions">
                        <button className="search-button">
                            <img src={logosearch} alt="search"/> 

                        </button>
                    </div>
                </div>
                               
            </div>
            

            
        );
    }
    
}

export default Buscador;
