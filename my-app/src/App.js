import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListaCompra from './components/ListaCompra';
import Login from './components/Login';
import Registro from './components/Registro';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>
        Hola bebés
      </h1>
      <ListaCompra></ListaCompra>
      <Registro />
      <Login />
      
      
      
      
    </div>
  );
}

export default App;
