import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
        <div>
            <label>{this.props.label}</label>
            <input className="simple-field" type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} required={this.props.required} />
        </div>
    );
  }
}

export default Item;
