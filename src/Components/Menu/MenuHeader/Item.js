import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
        <div className="navigation-header responsive-menu-toggle-class">
          <div className="title">Navigation</div>
          <div className="close-menu"></div>
        </div>
    );
  }
}

export default Item;
