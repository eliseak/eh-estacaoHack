import React, { Component } from 'react';
import './Cabecalho.css';

import MenuItem from './MenuItem';

class Cabecalho extends Component {
  render() {
    return (
      <header>
          <h1> Dead Heat Summer Race </h1>
          <nav>
              <MenuItem texto="Facebook" endereco="http://fb.com"/>
              <MenuItem texto="SnapChat" endereco="http://snapchat.com"/>
              <MenuItem texto="MySpace" endereco="http://myspace.com"/>
              <MenuItem texto="Pudim" endereco="http://pudim.com.br"/>
              
          </nav>
      </header>
    );
  }
}

export default Cabecalho;
