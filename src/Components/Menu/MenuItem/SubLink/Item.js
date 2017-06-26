import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
      <div className="submenu">
        <ul className="simple-menu-list-column">
          {this.props.children}          
        </ul>
      </div>
    );
  }
}

export default Item;
