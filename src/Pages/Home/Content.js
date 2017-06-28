import React, { Component } from 'react';
import loadjs from 'loadjs';
import {NavLink} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Page from '../../Components/PageContent/Item';
import PageBlock from '../../Components/PageContent/PageBlock/Item';
import TopsellProduct from './ProductItem/Item';
//HOME
class ContentCls extends Component{

	componentWillMount(){
    loadjs("js/global.js");
  }

  render(){
    document.title="Home";
    return (
      <Page>
        <div className="breadcrumb-box">
            <a href="#">Home</a>
            <a href="#">Bags &amp; Accessories</a>
        </div>
        <div className="row nopadding">
					<div className="col-sm-6 nopadding creative-square-box">
						<div className="background-box" style={{backgroundImage: 'url(img/wide-4.jpg)'}}></div>
						<div className="cell-view">
							<div className="parallax-article">
								<h1 className="title">Prescription</h1>
								<div className="description">Upload and order</div>
								<div className="info">
									<NavLink to="/product" className="button style-8">shop now</NavLink>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 nopadding creative-square-box">
						<div className="background-box" style={{backgroundImage: 'url(img/wide-5.jpg)'}}></div>
						<div className="cell-view">
							<div className="parallax-article">
								<h1 className="title">Order Medicine</h1>
								<div className="description">Browse from our collection</div>
								<div className="info">
									<a href="#" className="button style-8">shop now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
        <div className="breadcrumb-entry align-left" style={{background: "rgb(0, 0, 0)",padding:'20px'}}>
          <div className="container">
              <div className="breadcrumb-title style-2 light">Running out of pills at month end?</div>
              <div className="breadcrumb-box light" itemProp="breadcrumb">
                  <a href="#">Schedule and auto order</a>
              </div>
          </div>
        </div>
        <div className="breadcrumb-entry align-left" style={{background: "rgb(0, 0, 0)",padding:'20px'}}>
          <div className="container">
              <div className="breadcrumb-title style-2 light">Keep forgetting to take pills?</div>
              <div className="breadcrumb-box light" itemProp="breadcrumb">
                  <a href="#">Set reminders for doses</a>
              </div>
          </div>
        </div>

        <div className="wide-center">
					<div className="information-blocks">
						<div className="block-header">
							<h3 className="title">Top Sell</h3>
							<div className="description">Lorem ipsum dolor sit amet, consectetur adipisc elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</div>
						</div>
						<div className="products-swiper">
							<div className="swiper-container" data-autoplay="0" data-loop="0" data-speed="500" data-center="0" data-slides-per-view="responsive" data-xs-slides="2" data-int-slides="2" data-sm-slides="3" data-md-slides="4" data-lg-slides="5" data-add-slides="5">
								<div className="swiper-wrapper">
									
                  <TopsellProduct img="img/wide-product-1.jpg" productName="Product 1" category="Category 1" prevPrice="$199" newPrice="$119"/>
                  <TopsellProduct img="img/wide-product-2.jpg" productName="Product 2" category="Category 3" prevPrice="$199" newPrice="$119"/>
                  <TopsellProduct img="img/wide-product-4.jpg" productName="Product 3" category="Category 2" prevPrice="$199" newPrice="$119"/>
                  <TopsellProduct img="img/wide-product-3.jpg" productName="Product 4" category="Category 2" prevPrice="$199" newPrice="$119"/>
                  <TopsellProduct img="img/wide-product-5.jpg" productName="Product 5" category="Category 1" prevPrice="$199" newPrice="$119"/>
									
								</div>
								<div className="pagination"></div>
							</div>
						</div>
					</div>
					<div className="clear"></div>
				</div>
      </Page>
    );
  }
}

export {ContentCls};