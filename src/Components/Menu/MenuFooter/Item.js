import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
        <div className="navigation-footer responsive-menu-toggle-class">
          <div className="socials-box">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-google-plus"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-pinterest-p"></i></a>
            <div className="clear"></div>
          </div>
          <div className="navigation-copyright">Created by <a href="#">8theme</a>. All rights reserved</div>
        </div>
    );
  }
}

export default Item;
