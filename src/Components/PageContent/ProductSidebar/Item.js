import React, { Component } from 'react';
//Productsidebar
class Item extends Component {
  render(){
    return (
        <div className="col-md-3 col-md-pull-9 col-sm-4 col-sm-pull-8 blog-sidebar">
          {this.props.children}
        </div>
    );
  }
}

export default Item;
