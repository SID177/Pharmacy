import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
        <div className="page-selector">
            <div className="pages-box hidden-xs">
                <a href="#" className="square-button active">1</a>
                <a href="#" className="square-button">2</a>
                <a href="#" className="square-button">3</a>
                <div className="divider">...</div>
                <a href="#" className="square-button"><i className="fa fa-angle-right"></i></a>
            </div>
            <div className="shop-grid-controls">
                <div className="entry">
                    <div className="inline-text">Sorty by</div>
                    <div className="simple-drop-down">
                        <select>
                            <option>Position</option>
                            <option>Price</option>
                            <option>Category</option>
                            <option>Rating</option>
                            <option>Color</option>
                        </select>
                    </div>
                    <div className="sort-button"></div>
                </div>
                <div className="entry">
                    <div className="view-button active grid"><i className="fa fa-th"></i></div>
                    <div className="view-button list"><i className="fa fa-list"></i></div>
                </div>
                <div className="entry">
                    <div className="inline-text">Show</div>
                    <div className="simple-drop-down" style="width: 75px;">
                        <select>
                            <option>12</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>all</option>
                        </select>
                    </div>
                    <div className="inline-text">per page</div>
                </div>
            </div>
            <div className="clear"></div>
        </div>
    );
  }
}

export default Item;
