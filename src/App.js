import Buscador from './Buscador';
import Resultados from './Resultados'; 
import {getResultsByName} from './api';
import React from 'react';
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      productos:[],
            isFetch: true,
            busqueda:'nevera'
    };
  }

  async componentDidMount(){
    const productosJson =  await getResultsByName(this.state.busqueda)
    this.setState({productos: productosJson.results, isFetch: false})
  }

  render(){
    const {isFetch, productos} = this.state
    if(isFetch){
      return 'Cargando...';
    }

    return (
      <div className="app">
        
          <Buscador />
          <Resultados items={this.state.productos}/>
          
      </div>
       
      
    );
  }
  

  
}

export default App;
