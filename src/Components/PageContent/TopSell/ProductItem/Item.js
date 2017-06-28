import React, { Component } from 'react';

//ProuductItem for TopSell products

class Item extends Component {
  render(){
    return (
        <div className="swiper-slide"> 
            <div className="paddings-container">
                <div className="product-slide-entry shift-image">
                    <div className="product-image">
                        <img src={this.props.img1} alt="" />
                        <img src={this.props.img2} alt="" />
                        <a className="top-line-a left"><i className="fa fa-retweet"></i></a>
                        <a className="top-line-a right"><i className="fa fa-heart"></i></a>
                        <div className="bottom-line">
                            <a className="bottom-line-a"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                        </div>
                    </div>
                    <a className="tag" href="#">{this.props.category}</a>
                    <a className="title" href="#">{this.props.productName}</a>
                    <div className="rating-box">
                        <div className="star"><i className="fa fa-star"></i></div>
                        <div className="star"><i className="fa fa-star"></i></div>
                        <div className="star"><i className="fa fa-star"></i></div>
                        <div className="star"><i className="fa fa-star"></i></div>
                        <div className="star"><i className="fa fa-star"></i></div>
                    </div>
                    <div className="price">
                        <div className="prev">{this.props.prevPrice}</div>
                        <div className="current">{this.props.newPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Item;
