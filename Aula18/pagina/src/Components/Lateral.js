import React, { Component } from 'react';
import './Lateral.css';

import MenuItem from './MenuItem';

class Lateral extends Component {

  constructor(props){
    super(props);
    this.state = {
      visivel: false
    }
  }

  visivel = () => {
    if (this.state.visivel) return "visivel"
    else return "invisivel";
  }

  clique = () => {
    if (this.state.visivel){
      this.setState({visivel : false});
    }
    else{
      this.setState({visivel : true});
      
    }
    console.log(this.state.visivel);
  }

  render() {

    console.log(this.state);

    return (
      <div id="lateral" className={this.visivel()}>
        <button onClick={this.clique}> Mostrar/Esconder </button>
      
        <h2>Menu Lateral</h2>
        <ul>
            <li><MenuItem /></li>
            <li><MenuItem texto="Twitter" endereco="http://twitter.com" /></li>
            <li><MenuItem /></li>
        </ul>
      </div>
    );
  }
}

export default Lateral;
