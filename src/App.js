import Saludo from './Saludo'
import React from 'react';
import logo from './logo-meli.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" className="new-task" placeholder="Nunca dejes de buscar"/>
      </div>
      <Saludo/>
    </div>
  );
}

export default App;
