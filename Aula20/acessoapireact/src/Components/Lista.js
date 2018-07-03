import React, { Component } from 'react';
import './Lista.css';
import PerfilCliente from './PerfilCliente';

class Lista extends Component {

  constructor(props){
      super(props);
      this.state = {
            cliente: {}
      };
  }


  componentDidMount(){
    fetch('https://eh-loja.herokuapp.com/cliente/5b324be8289a040014c59f2a').then(promessa => promessa.json())
    .then(dados => {
        this.setState({cliente: dados});
    })
  }

  render() {
    return (
      <section id="lista">
        <PerfilCliente nome={this.state.cliente.nome} email={this.state.cliente.email}/>
          
      </section>
    );
  }
}

export default Lista;
