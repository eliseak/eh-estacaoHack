import React, { Component } from 'react';
import './App.css';

import Cabecalho from './Components/Cabecalho';
import Lateral from './Components/Lateral';
import Conteudo from './Components/Conteudo';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Cabecalho />
        <Lateral />
        <Conteudo />
      </div>
    );
  }
}

export default App;
