import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
        <div className="content-push">
          {this.props.children}
        </div>
    );
  }
}

export default Item;
