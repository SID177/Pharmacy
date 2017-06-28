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
    loadjs("js/swiper.js",function(){});
    loadjs("js/scroll.js",function(){});
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
          <div className="tabs-container">
                        <div className="swiper-tabs tabs-switch">
                            <div className="title">Products</div>
                            <div className="list">
                                <a className="block-title tab-switcher active">Shopping Cart</a>
                                <a className="block-title tab-switcher">Preferred Branch</a>
                                <a className="block-title tab-switcher">Order Summary</a>
                                <div className="clear"></div>
                            </div>
                        </div>
                        <div>
                            <div className="tabs-entry">
                                <div className="products-swiper">
                                    <div className="swiper-container" data-autoplay="0" data-loop="0" data-speed="500" data-center="0" data-slides-per-view="responsive" data-xs-slides="2" data-int-slides="2" data-sm-slides="3" data-md-slides="4" data-lg-slides="5" data-add-slides="5">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-1.jpg" alt="" />
                                                            <img src="img/product-minimal-11.jpg" alt="" />
                                                            <a className="top-line-a left"><i className="fa fa-retweet"></i></a>
                                                            <a className="top-line-a right"><i className="fa fa-heart"></i></a>
                                                            <div className="bottom-line">
                                                                <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-2.jpg" alt="" />
                                                            <img src="img/product-minimal-12.jpg" alt="" />
                                                            <a className="top-line-a right"><i className="fa fa-expand"></i> <span>Quick View</span></a>
                                                            <div className="bottom-line">
                                                                <div className="right-align">
                                                                    <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                                                                    <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                                                                </div>
                                                                <div className="left-align">
                                                                    <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-3.jpg" alt="" />
                                                            <img src="img/product-minimal-11.jpg" alt="" />
                                                            <div className="bottom-line left-attached">
                                                                <a className="bottom-line-a square"><i className="fa fa-shopping-cart"></i></a>
                                                                <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                                                                <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                                                                <a className="bottom-line-a square"><i className="fa fa-expand"></i></a>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-4.jpg" alt="" />
                                                            <img src="img/product-minimal-12.jpg" alt="" />
                                                            <a className="top-line-a right"><i className="fa fa-expand"></i> <span>Quick View</span></a>
                                                            <div className="bottom-line">
                                                                <div className="right-align">
                                                                    <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                                                                    <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                                                                </div>
                                                                <div className="left-align">
                                                                    <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-5.jpg" alt="" />
                                                            <img src="img/product-minimal-11.jpg" alt="" />
                                                            <a className="top-line-a right"><i className="fa fa-expand"></i> <span>Quick View</span></a>
                                                            <div className="bottom-line">
                                                                <div className="right-align">
                                                                    <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                                                                    <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                                                                </div>
                                                                <div className="left-align">
                                                                    <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="tabs-entry">
                                <div className="products-swiper">
                                    <div className="swiper-container" data-autoplay="0" data-loop="0" data-speed="500" data-center="0" data-slides-per-view="responsive" data-xs-slides="2" data-int-slides="2" data-sm-slides="3" data-md-slides="4" data-lg-slides="5" data-add-slides="5">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-6.jpg" alt="" />
                                                            <img src="img/product-minimal-12.jpg" alt="" />
                                                            <a className="top-line-a left"><i className="fa fa-retweet"></i></a>
                                                            <a className="top-line-a right"><i className="fa fa-heart"></i></a>
                                                            <div className="bottom-line">
                                                                <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-7.jpg" alt="" />
                                                            <img src="img/product-minimal-11.jpg" alt="" />
                                                            <a className="top-line-a right"><i className="fa fa-expand"></i> <span>Quick View</span></a>
                                                            <div className="bottom-line">
                                                                <div className="right-align">
                                                                    <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                                                                    <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                                                                </div>
                                                                <div className="left-align">
                                                                    <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-8.jpg" alt="" />
                                                            <img src="img/product-minimal-12.jpg" alt="" />
                                                            <div className="bottom-line left-attached">
                                                                <a className="bottom-line-a square"><i className="fa fa-shopping-cart"></i></a>
                                                                <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                                                                <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                                                                <a className="bottom-line-a square"><i className="fa fa-expand"></i></a>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-9.jpg" alt="" />
                                                            <img src="img/product-minimal-11.jpg" alt="" />
                                                            <a className="top-line-a right"><i className="fa fa-expand"></i> <span>Quick View</span></a>
                                                            <div className="bottom-line">
                                                                <div className="right-align">
                                                                    <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                                                                    <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                                                                </div>
                                                                <div className="left-align">
                                                                    <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-10.jpg" alt="" />
                                                            <img src="img/product-minimal-12.jpg" alt="" />
                                                            <a className="top-line-a right"><i className="fa fa-expand"></i> <span>Quick View</span></a>
                                                            <div className="bottom-line">
                                                                <div className="right-align">
                                                                    <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                                                                    <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                                                                </div>
                                                                <div className="left-align">
                                                                    <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="tabs-entry">
                                <div className="products-swiper">
                                    <div className="swiper-container" data-autoplay="0" data-loop="0" data-speed="500" data-center="0" data-slides-per-view="responsive" data-xs-slides="2" data-int-slides="2" data-sm-slides="3" data-md-slides="4" data-lg-slides="5" data-add-slides="5">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-1.jpg" alt="" />
                                                            <img src="img/product-minimal-11.jpg" alt="" />
                                                            <a className="top-line-a left"><i className="fa fa-retweet"></i></a>
                                                            <a className="top-line-a right"><i className="fa fa-heart"></i></a>
                                                            <div className="bottom-line">
                                                                <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-3.jpg" alt="" />
                                                            <img src="img/product-minimal-11.jpg" alt="" />
                                                            <a className="top-line-a right"><i className="fa fa-expand"></i> <span>Quick View</span></a>
                                                            <div className="bottom-line">
                                                                <div className="right-align">
                                                                    <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                                                                    <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                                                                </div>
                                                                <div className="left-align">
                                                                    <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-5.jpg" alt="" />
                                                            <img src="img/product-minimal-11.jpg" alt="" />
                                                            <div className="bottom-line left-attached">
                                                                <a className="bottom-line-a square"><i className="fa fa-shopping-cart"></i></a>
                                                                <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                                                                <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                                                                <a className="bottom-line-a square"><i className="fa fa-expand"></i></a>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-7.jpg" alt="" />
                                                            <img src="img/product-minimal-11.jpg" alt="" />
                                                            <a className="top-line-a right"><i className="fa fa-expand"></i> <span>Quick View</span></a>
                                                            <div className="bottom-line">
                                                                <div className="right-align">
                                                                    <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                                                                    <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                                                                </div>
                                                                <div className="left-align">
                                                                    <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide"> 
                                                <div className="paddings-container">
                                                    <div className="product-slide-entry shift-image">
                                                        <div className="product-image">
                                                            <img src="img/product-minimal-9.jpg" alt="" />
                                                            <img src="img/product-minimal-11.jpg" alt="" />
                                                            <a className="top-line-a right"><i className="fa fa-expand"></i> <span>Quick View</span></a>
                                                            <div className="bottom-line">
                                                                <div className="right-align">
                                                                    <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                                                                    <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                                                                </div>
                                                                <div className="left-align">
                                                                    <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="tag" href="#">Men clothing</a>
                                                        <a className="title" href="#">Blue Pullover Batwing Sleeve Zigzag</a>
                                                        <div className="rating-box">
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                            <div className="star"><i className="fa fa-star"></i></div>
                                                        </div>
                                                        <div className="price">
                                                            <div className="prev">$199,99</div>
                                                            <div className="current">$119,99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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