import React, {Component} from 'react';
import logosearch from './ic_Search.png';
import logo from './Logo_ML.png';

class Saludo extends Component{
    render() {
        return(
            <div className="container-search">
                <form>
                    <img src={logo} className="app-logo" alt="logo" />
                    <input type="text" className="new-task" placeholder="Nunca dejes de buscar"/>
                    <button type="submit" className="search-button">
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