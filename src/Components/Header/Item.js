import React, { Component } from 'react';
import Menu from '../Menu/Item';

class Item extends Component {
  render(){
    return (
        <header className="type-1">
          <div className="header-product">
              <div className="logo-wrapper">
                  <a href="#" id="logo"><img alt="" src="img/logo-9.png" /></a>
              </div>
              <div className="product-header-message">
                  {this.props.title}
              </div>
              <div className="product-header-content">
                  <div className="line-entry">
                      <div className="menu-button responsive-menu-toggle-class"><i className="fa fa-reorder"></i></div>
                      <div className="header-top-entry increase-icon-responsive open-search-popup">
                          <div className="title"><i className="fa fa-search"></i> <span>Search</span></div>
                      </div>
                      <div className="header-top-entry increase-icon-responsive">
                          <div className="title"><i className="fa fa-user"></i> <span>My Account</span></div>
                      </div>
                      <div className="header-top-entry">
                          <div className="title"><img alt="" src="img/flag-lang-1.png" />English<i className="fa fa-caret-down"></i></div>
                          <div className="list">
                              <a className="list-entry" href="#"><img alt="" src="img/flag-lang-2.png" />French</a>
                              <a className="list-entry" href="#"><img alt="" src="img/flag-lang-3.png" />Spanish</a>
                          </div>
                      </div>
                      <div className="header-top-entry">
                          <div className="title">$ USD <i className="fa fa-caret-down"></i></div>
                          <div className="list">
                              <a className="list-entry" href="#">$ CAD</a>
                              <a className="list-entry" href="#">€ EUR</a>
                          </div>
                      </div>
                  </div>
                  <div className="middle-line"></div>
                  <div className="line-entry">
                      <a href="#" className="header-functionality-entry"><i className="fa fa-copy"></i><span>Compare</span></a>
                      <a href="#" className="header-functionality-entry"><i className="fa fa-heart-o"></i><span>Wishlist</span></a>
                      <a href="#" className="header-functionality-entry open-cart-popup"><i className="fa fa-shopping-cart"></i><span>My Cart</span> <b>$255,99</b></a>
                  </div>
              </div>
          </div>
          <Menu />
          <div className="close-header-layer"></div>
      </header>
    );
  }
}

export default Item;
