import React, { Component } from 'react';
import './Formulario.css';
import Botao from './Botao';

class Formulario extends Component {
  render() {
    return (
      <div className="formulario">
        <input type="text" placeholder="Nome"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Senha"/>
        <Botao />
      </div>
    );
  }
}

export default Formulario;