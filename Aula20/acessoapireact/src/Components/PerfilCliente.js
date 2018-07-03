import React, { Component } from 'react';
import './PerfilCliente.css';

class PerfilCliente extends Component {


  render() {
    return (
      <section id='perfilCliente'>
          <p>{this.props.nome||'a'}</p>
          <p>{this.props.email||'a'}</p>
      </section>
    );
  }
}

export default PerfilCliente;
