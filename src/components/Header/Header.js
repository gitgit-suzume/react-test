import React, { Component } from 'react';
import './Header.less';

class Header extends Component {
    constructor(){
        super()
        this.state={
            paperName: '练习题名称',
            testCount: 10,
            curIndex: 1
        }
    }
  render() {
    return (
      <div className="header">
          <h6>{this.state.paperName}</h6>
          <span>{this.state.curIndex}/{this.state.testCount}</span>
      </div>
    );
  }
}

export default Header
