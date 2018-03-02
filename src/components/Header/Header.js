import React, { Component } from 'react';
import './Header.less';

class Header extends Component {
    constructor(){
        super()
        this.state={
            paperName: '练习题名称',
            testCount: 10,
        }
    }
    render() {
        return (
          <div className="header">
              <h6>{this.state.paperName}</h6>
              <span>{this.props.index + 1}/{this.state.testCount}</span>
          </div>
        );
    }
}

export default Header
