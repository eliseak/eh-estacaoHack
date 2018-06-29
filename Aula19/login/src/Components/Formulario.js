import React, { Component } from 'react';
import './Formulario.css';
import FormularioLogin from './FormularioLogin';
import FormularioCadastro from './FormularioCadastro';

// Caixa de controle do formulário

class Formulario extends Component {


  render() {
    if (this.state.atual === 'login')
      return (<FormularioLogin />);
    
    return (<FormularioCadastro />);
  }
}

export default Formulario;