import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
        <div className="information-blocks">
          {this.props.children}
        </div>
    );
  }
}

export default Item;
