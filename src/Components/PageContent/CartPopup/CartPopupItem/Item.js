import React, { Component } from 'react';
//cartpopup item

//"img/product-menu-1.jpg"
class Item extends Component {
  render(){
    return (
        <div className="cart-entry">
            <a className="image"><img src={this.props.img} alt="" /></a>
            <div className="content">
                <a className="title" href="#">{this.props.productName}</a>
                <div className="quantity">Quantity: {this.props.qty}</div>
                <div className="price">{this.props.price}</div>
            </div>
            <div className="button-x"><i className="fa fa-close"></i></div>
        </div>
    );
  }
}

export default Item;
