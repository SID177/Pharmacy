import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Item';
import Footer from '../../Components/Footer/Item';
import Menu from '../../Components/Menu/Item';

class HeaderCls extends Component{  
  render(){
    return (
      <Header title="Products">
        <Menu />
      </Header>
    );
  }
}

export {HeaderCls};