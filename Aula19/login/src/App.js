import React, { Component } from 'react';
import './App.css';

// Componentes lógicos
import Controle from './Components/Controle';
import Formulario from './Components/Formulario';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      atual: 'cadastro' // propriedade/estado do componente
    }
  }

  irParaLogin = () => {
    this.setState({atual: 'login'}); // THIS É DO APP, mesmo passado para outros componentes
  }

  irParaCadastro = () => {
    this.setState({atual: 'cadastro'}); // THIS É DO APP, mesmo passado para outros componentes
  }

  render() {
    return (
      <div id="telalogin">
        <Controle login={this.irParaLogin} cadastro={this.irParaCadastro} />
        <Formulario tela={this.state.atual}/>
      </div>
    );
  }
}

export default App;
