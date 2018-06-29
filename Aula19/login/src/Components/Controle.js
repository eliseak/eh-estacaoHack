import React, { Component } from 'react';
import './Controle.css';

import Botao from './Botao';

class Controle extends Component {
  render() {
    return (
      <div id="controle">
        <Botao texto="Cadastro" />
        <Botao texto="Login" />
      </div>
    );
  }
}

export default Controle;