import React, { Component } from 'react';
import CartItem from './CartPopupItem/Item';
//Cart popup
class Item extends Component {
  render(){
    return (
        <div className="popup-container">
            <CartItem img="img/product-menu-1.jpg" productName="Product1" qty="4" price="$100" />
            <CartItem img="img/product-menu-1.jpg" productName="Product2" qty="4" price="$100" />
            <CartItem img="img/product-menu-1.jpg" productName="Product3" qty="4" price="$100" />
            <CartItem img="img/product-menu-1.jpg" productName="Product4" qty="4" price="$100" />
            {this.props.children}
        </div>
    );
  }
}

export default Item;
