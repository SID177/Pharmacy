import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
        <div className="row">
          {this.props.children}
        </div>
    );
  }
}

export default Item;
