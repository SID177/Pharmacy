import React, { Component } from 'react';
import loadjs from 'loadjs';
import ReactDOM from 'react-dom';
import Page from '../../Components/PageContent/Item';
import PageBlock from '../../Components/PageContent/PageBlock/Item';
import ProductList from '../../Components/PageContent/ProductList/Item';
import ProductGrid from '../../Components/PageContent/ProductList/ProductGrid/Item';
import ProductListItem from '../../Components/PageContent/ProductList//ProductGrid/ProductListItem/Item';
import ProductListTitleFilter from '../../Components/PageContent/ProductList/ProductListTitleFilter/Item';

import ProductSidebar from '../../Components/PageContent/ProductSidebar/Item';
import CategoryList from '../../Components/PageContent/ProductSidebar/CategoryList/Item';
import CategoryListItem from '../../Components/PageContent/ProductSidebar/CategoryList/CategoryListItem/Item';
import Row from '../../Components/PageContent/Row/Item';

class ContentCls extends Component{

  componentDidMount(){
    this.props.setTitle("Products");
  }
  componentWillMount(){
    loadjs("js/global.js",function(){
      alert('load');
    });
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
            <ProductList>
              <ProductListTitleFilter/>
              <ProductGrid>
                <ProductListItem productName="Product1" img1="img/product-minimal-1.jpg" img2="img/product-minimal-11.jpg" category="Women Clothes" prevPrice="$70" newPrice="$56" />
                <ProductListItem productName="Product1" img1="img/product-minimal-1.jpg" img2="img/product-minimal-11.jpg" category="Women Clothes" prevPrice="$70" newPrice="$56" />
                <ProductListItem productName="Product1" img1="img/product-minimal-1.jpg" img2="img/product-minimal-11.jpg" category="Women Clothes" prevPrice="$70" newPrice="$56" />
                <ProductListItem productName="Product1" img1="img/product-minimal-1.jpg" img2="img/product-minimal-11.jpg" category="Women Clothes" prevPrice="$70" newPrice="$56" />
                <ProductListItem productName="Product1" img1="img/product-minimal-1.jpg" img2="img/product-minimal-11.jpg" category="Women Clothes" prevPrice="$70" newPrice="$56" />
                <ProductListItem productName="Product1" img1="img/product-minimal-1.jpg" img2="img/product-minimal-11.jpg" category="Women Clothes" prevPrice="$70" newPrice="$56" />
                <ProductListItem productName="Product1" img1="img/product-minimal-1.jpg" img2="img/product-minimal-11.jpg" category="Women Clothes" prevPrice="$70" newPrice="$56" />
                <ProductListItem productName="Product1" img1="img/product-minimal-1.jpg" img2="img/product-minimal-11.jpg" category="Women Clothes" prevPrice="$70" newPrice="$56" />
                <ProductListItem productName="Product1" img1="img/product-minimal-1.jpg" img2="img/product-minimal-11.jpg" category="Women Clothes" prevPrice="$70" newPrice="$56" />
              </ProductGrid>
            </ProductList>
            <ProductSidebar>
              <CategoryList title="Categories">
                <CategoryListItem title="Category 1"/>
                <CategoryListItem title="Category 2"/>
                <CategoryListItem title="Category 3"/>
                <CategoryListItem title="Category 4"/>
                <CategoryListItem title="Category 5"/>
              </CategoryList>
            </ProductSidebar>
          </Row>
        </PageBlock>
        {/*<Script url="js/global.js" onCreate={this.handleScriptCreate.bind(this)} onError={this.handleScriptError.bind(this)} />*/}

      </Page>
    );
  }
}

// class ScriptCls extends React.Component{
//   render(){
//     return (<script src="js/global.js"></script>);
//   }
// }

export {ContentCls};