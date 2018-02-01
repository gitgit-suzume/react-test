import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super()
        this.state={
            val: 233333
        }
    }
  render() {
    return (
      <div className="Header">
          {this.state.val}
      </div>
    );
  }
}

export default Header
