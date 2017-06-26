import React, { Component } from 'react';
//product item
// "img/product-minimal-1.jpg"
class Item extends Component {
  render(){
    return (
        <div className="traditional-cart-entry style-1">
            <a className="image" href="#"><img alt="" src={this.props.img} /></a>
            <div className="content">
                <div className="cell-view">
                    <a className="tag" href="#">{this.props.category}</a>
                    <a className="title" href="#">{this.props.productName}</a>
                    <div className="inline-description">S / Dirty Pink</div>
                    <div className="inline-description">Zigzag Clothing</div>
                    <div className="price">
                        <div className="prev">{this.props.prevPrice}</div>
                        <div className="current">{this.props.newPrice}</div>
                    </div>
                    <div className="quantity-selector detail-info-entry">
                        <div className="detail-info-entry-title">{this.props.qty}</div>
                        <div className="entry number-minus">&nbsp;</div>
                        <div className="entry number">10</div>
                        <div className="entry number-plus">&nbsp;</div>
                        <a className="button style-17">remove</a>
                        <a className="button style-15">Update Cart</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Item;
