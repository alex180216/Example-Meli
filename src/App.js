import Buscador from './Buscador';
import Resultados from './Resultados'; 
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      books:[
        {id:'1', thumbnail:'http://http2.mlstatic.com/D_608380-MLA32167208403_092019-O.jpg', title:'Mesa Mesita De Luz Vintage Retro Nordica Pino Con Cajones' , price:'2450', address:'Capital'},
        {id:'0', thumbnail:'http://http2.mlstatic.com/D_608380-MLA32167208403_092019-O.jpg', title:'Mesa Mesita De Luz Vintage Retro Nordica Pino Con Cajones' , price:'2450', address:'Capital'}
      ]
    };
  }

  render(){
    return (
      <div className="app">
        
          <Buscador/>
          <Resultados items={this.state.books}/>
      </div>
       
      
    );
  }
  
}

export default App;
