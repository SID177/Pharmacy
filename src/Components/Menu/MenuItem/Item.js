import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Item extends Component {
  render(){
    return (
      <li className="simple-list">
        <NavLink to={this.props.href} activeClassName="active">{this.props.label}</NavLink>{this.props.children && <i className="fa fa-chevron-down"></i>}
        {this.props.children}
      </li>
    );
  }
}

export default Item;
