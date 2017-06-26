import React, { Component } from 'react';
import { Item as Header } from '../../Components/Header/Item';
import { Item as Footer } from '../../Components/Footer/Item';

class Item extends Component {
  render(){
    return (
      <div id="loader-wrapper">
        <div className="bubbles">
            <div className="title">loading</div>
            <span></span>
            <span id="bubble2"></span>
            <span id="bubble3"></span>
        </div>
      </div>
    );
  }
}

export default Item;
