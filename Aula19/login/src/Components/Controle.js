import React, { Component } from 'react';
import './Controle.css';

import Botao from './Botao';

class Controle extends Component {
  render() {
    return (
      <div id="controle">
        <Botao texto="Cadastro" clicar={this.props.cadastro} />
        <Botao texto="Login" clicar={this.props.login} />
      </div>
    );
  }
}

export default Controle;