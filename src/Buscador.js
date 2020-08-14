import React, {Component} from 'react';
import logosearch from './ic_Search.png';
import logo from './Logo_ML.png';

class Saludo extends Component{
    constructor(){
        super();
    }

    handleClick =(e) => {
        e.preventDefault();
        console.log('Has hecho click en buscar');
    }
    handleNameProduct = (e) => {
        e.preventDefault();
        this.setState({nombre: e.target.value});
        console.log(e.target.value);
        
    }
    
    render() {
        return(
            <div className="container-search">
                <form>
                    <img src={logo} className="app-logo" alt="logo" />
                    <input type="text" onChange={this.handleNameProduct} className="new-task" placeholder="Nunca dejes de buscar"/>
                    <button type="submit" className="search-button" onClick={this.handleClick}>
                        <div role="img" aria-label="Logo de Busqueda">
                            <img src={logosearch} alt="search"/> 
                        </div>
                    </button>
                </form>
            </div>
        );
    }
}

export default Saludo;