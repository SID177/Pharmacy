import React, { Component } from 'react';
//Cart productlist
class Item extends Component {
  render(){
    return (
        <div className="col-sm-9 information-entry">
          <h3 className="cart-column-title size-1">{this.props.title}</h3>
          {this.props.children}
        </div>
    );
  }
}

export default Item;
