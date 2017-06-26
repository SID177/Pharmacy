import React, { Component } from 'react';
//ProductGrid
class Item extends Component {
  render(){
    return (
        <div className="row shop-grid grid-view">
          {this.props.children}
        </div>
    );
  }
}

export default Item;
