import React, { Component } from 'react';
//Categorylist
class Item extends Component {
  render(){
    return (
        <div className="information-blocks categories-border-wrapper">
            <div className="block-title size-3">{this.props.title}</div>
            <div className="accordeon">
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default Item;
