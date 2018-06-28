import React, { Component } from 'react';
import './App.css';

import Controle from './Components/Controle';
import Formulario from './Components/Formulario';

class App extends Component {
  render() {
    return (
      <div className="telalogin">
        <Controle />
        <Formulario />
      </div>
    );
  }
}

export default App;
