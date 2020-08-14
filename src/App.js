import Buscador from './Buscador';
import Resultados from './Resultados'; 
import React from 'react';
import './App.css';

var cosas = [];
class App extends React.Component {


  render(){
    return (
      <div className="app">
        
          <Buscador/>
          <div className="list">
            <Resultados />
          </div>
          
      </div>
       
      
    );
  }

  
}

export default App;
