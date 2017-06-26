import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
        <div className="inline-product-entry">
            <a href="#" className="image"><img alt="" src={this.props.img} /></a>
            <div className="content">
                <div className="cell-view">
                    <a href="#" className="title">{this.props.title}</a>
                    <div className="price">
                        <div className="prev">{this.props.prevPrice}</div>
                        <br/>
                        <div className="current">{this.props.newPrice}</div>
                    </div>
                </div>
            </div>
            <div className="clear"></div>
        </div>
    );
  }
}

export default Item;
