import React, { Component } from 'react';

class Item extends Component {
  render(){
    //   "img/product-minimal-1.jpg" & 11
    return (
        <div className="col-md-3 col-sm-4 shop-grid-item">
            <div className="product-slide-entry shift-image">
                <div className="product-image">
                    <img src={this.props.img1} alt={this.props.alt1} />
                    <img src={this.props.img2} alt={this.props.alt2} />
                    <div className="bottom-line left-attached">
                        <a className="bottom-line-a square"><i className="fa fa-shopping-cart"></i></a>
                        <a className="bottom-line-a square"><i className="fa fa-heart"></i></a>
                        <a className="bottom-line-a square"><i className="fa fa-retweet"></i></a>
                        <a className="bottom-line-a square"><i className="fa fa-expand"></i></a>
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
                    <div className="reviews-number">25 reviews</div>
                </div>
                <div className="article-container style-1">
                    <p>{this.props.description}</p>
                </div>
                <div className="price">
                    <div className="prev">{this.props.prevPrice}</div>
                    &nbsp;&nbsp;&nbsp;
                    <div className="current">{this.props.newPrice}</div>
                </div>
                <div className="list-buttons">
                    <a className="button style-10">Add to cart</a>
                    <a className="button style-11"><i className="fa fa-heart"></i> Add to Wishlist</a>
                </div>
            </div>
            <div className="clear"></div>
        </div>
    );
  }
}

export default Item;
