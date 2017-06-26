import React, { Component } from 'react';
import loadjs from 'loadjs';
import ReactDOM from 'react-dom';
import Footer from '../../Components/Footer/Item';
import Page from '../../Components/PageContent/Item';
import PageBlock from '../../Components/PageContent/PageBlock/Item';
import Row from '../../Components/PageContent/Row/Item';
import FeaturedList from '../../Components/PageContent/FeaturedList/Item';
import FeaturedListItem from '../../Components/PageContent/FeaturedList/FeaturedListItem/Item';

class ContentCls extends Component{

  componentDidMount(){
    this.props.setTitle("Featured Products");
  }

  componentWillMount(){
    loadjs("js/global.js",function(){});
  }

  render(){
    document.title="Featured Products";
    return (
      <Page>
        <PageBlock>
          <Row>
            <FeaturedList title="Featured Products">
              <FeaturedListItem img="img/product-image-inline-1.jpg" title="Product1" prevPrice="$1000" newPrice="$799" />
              <FeaturedListItem img="img/product-image-inline-1.jpg" title="Product2" prevPrice="$1000" newPrice="$799" />
              <FeaturedListItem img="img/product-image-inline-1.jpg" title="Product3" prevPrice="$1000" newPrice="$799" />
            </FeaturedList>
          </Row>
        </PageBlock>
      </Page>
    );
  }
}

export {ContentCls};