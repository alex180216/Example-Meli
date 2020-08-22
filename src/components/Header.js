import React, {Component} from 'react';
import logo from '../img/Logo_ML.png';
import logosearch from '../img/ic_Search.png';
class Header extends Component{
    state ={
        nombre:''
    }

    obtenerValorInput = e =>{
        this.setState({
            [e.target.name] : e.target.value
            
        })
        console.log(e.target.name);
    }
    onSubmit=e => {
        e.preventDefault();
        /* value.obtenerProductos(this.state) */
    }

    render(){
        const mercadoLibreUrl = '';

        return(
            <div className="container-search">
                <div className="container-interno">
                    <div className="app-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="search">
                        <form>
                            
                            <input name = "busqueda" 
                                type="text" 
                                placeholder="Nunca dejes de buscar"
                                onChange={this.obtenerDatosProducto}
                            />
                            <div className="actions">
                                <button className="search-button">
                                    <img src={logosearch} alt="search"/> 

                                </button>
                            </div>
                        </form>
                    </div>
                    
                </div>
                               
            </div>
        )
    }

}

export default Header;