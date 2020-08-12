import Buscador from './Buscador';
import Resultados from './Resultados'; 
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      books:[
        {id:0, }
      ]
    };
  }

  render(){
    return (
      <div className="app">
        
          <Buscador/>
          <Resultados nombre="Alex en linea"/>
      </div>
       
      
    );
  }
  
}

export default App;
