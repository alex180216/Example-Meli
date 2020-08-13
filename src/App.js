import Buscador from './Buscador';
import Resultados from './Resultados'; 
import React from 'react';
import './App.css';

var cosas = [];
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

  componentDidMount(){
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6')
    .then(response => {
      return response.json();
    })
    .then(response => {
      /* console.log(response.results); */

      for( let i=0; i < 4; i++){
        console.log(response.results[i]);
        cosas.push(response.results[i]);
      }
      /* response.results.forEach(element => {
        console.log(element.title);
        
      }); */
    })

    console.log(cosas);
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
