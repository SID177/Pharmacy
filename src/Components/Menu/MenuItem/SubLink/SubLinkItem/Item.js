import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
      <li>
        <a href={this.props.href}>{this.props.label}</a><i className="fa fa-angle-right"></i>
      </li>
    );
  }
}

export default Item;
