import React, { Component } from 'react';
import './Formulario.css';
import Botao from './Botao';

class FormularioLogin extends Component {
  render() {
    return (
      <div className="formulario">   
        <input type="text" placeholder="Login"/>
        <input type="text" placeholder="Senha"/>
        <Botao texto="Login" />
      </div>
    );
  }
}

export default FormularioLogin;