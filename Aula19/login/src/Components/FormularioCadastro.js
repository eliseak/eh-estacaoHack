import React, { Component } from 'react';
import './Formulario.css';
import Botao from './Botao';

class FormularioCadastro extends Component {
  render() {
    return (
      <div className="formulario">
        <input type="text" placeholder="Nome"/>
        <input type="text" placeholder="Documento"/>        
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Senha"/>
        <Botao texto="Cadastrar"/>
      </div>
    );
  }
}

export default FormularioCadastro;