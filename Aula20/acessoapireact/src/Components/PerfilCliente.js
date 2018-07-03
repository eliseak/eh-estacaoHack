import React, { Component } from 'react';
import './PerfilCliente.css';

class PerfilCliente extends Component {

  constructor(props){
    super(props);
    this.state = {
        _id: undefined,
        nome: undefined,
        email: undefined,
        cpf: undefined
    };
  }

  componenDidMount(){
      
  }

  render() {
    return (
      <section>
          <p>{this.state.nome||"Ok!"}</p>
      </section>
    );
  }
}

export default PerfilCliente;
