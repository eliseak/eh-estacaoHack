import React, { Component } from 'react';
import './PerfilCliente.css';

class PerfilCliente extends Component {

  constructor(props){
      super(props);
      this.state = {
            nome: ""
      };
  }


  getCliente = () => {
    fetch('https://eh-loja.herokuapp.com/cliente/5b324f519f4e320014c17341').then(promessa => promessa.json())
    .then(dados => {
        this.setState({nome: dados.nome});
    })
  }

  render() {
    return (
      <section>
          <p>{this.state.nome||'OK!'}</p>
          <button onClick={this.getCliente}> Buscar </button>
      </section>
    );
  }
}

export default PerfilCliente;
