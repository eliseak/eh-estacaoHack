import React, { Component } from 'react';
import './App.css';

// Componentes lógicos
import Controle from './Components/Controle';
import Formulario from './Components/Formulario';

class App extends Component {
  render() {
    return (
      <div id="telalogin">
        <Controle />
        <Formulario />
      </div>
    );
  }
}

export default App;
