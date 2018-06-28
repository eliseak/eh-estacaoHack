import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {

  render() {
    //console.log(this.props);
    return (
      <a className="menuItem" href={this.props.endereco || "http://www.pudim.com.br"}>
          {this.props.texto || "Link"}
      </a>
    );
  }
}

export default MenuItem;
