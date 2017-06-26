import React, { Component } from 'react';
import loadjs from 'loadjs';
import ReactDOM from 'react-dom';
import Page from '../../Components/PageContent/Item';
import PageBlock from '../../Components/PageContent/PageBlock/Item';
import ProductList from './Components/ProductList/Item';
import ProductListItem from './Components/ProductList/ProductItem/Item';
import Sidebar from './Components/Sidebar/Item';
import Row from '../../Components/PageContent/Row/Item';

class ContentCls extends Component{

  componentDidMount(){
    this.props.setTitle("Your Cart");
  }
  componentWillMount(){
    loadjs("js/global.js",function(){});
  }

  render(){
    document.title="Products";
    return (
      <Page>
        <div className="breadcrumb-box">
            <a href="#">Home</a>
            <a href="#">Bags &amp; Accessories</a>
        </div>
        <PageBlock>
          <Row>
            <ProductList title="Products">
              <ProductListItem img="img/product-minimal-1.jpg" category="Womens Clothing" productName="Pullover Batwing Sleeve Zigzag" prevPrice="$199" newPrice="$119"/>
            </ProductList>
            <Sidebar subtotal="$119" />
          </Row>
        </PageBlock>
      </Page>
    );
  }
}

export {ContentCls};