import React, { Component } from 'react';
import './Controle.css';

import Botao from './Botao';

class Controle extends Component {
  render() {
    return (
      <div className="controle">
        <Botao />
        <Botao />
      </div>
    );
  }
}

export default Controle;