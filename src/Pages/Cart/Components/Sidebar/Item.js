import React, { Component } from 'react';
//Cart sidebar
class Item extends Component {
  render(){
    return (
        <div className="col-sm-3 information-entry">
            <h3 className="cart-column-title size-1" style={{textAlign: 'center'}}>Subtotal</h3>
            <div className="sidebar-subtotal">
                <div className="price-data">
                    <div className="main">{this.props.subtotal}</div>
                    <div className="title">Excluding tax &amp; shipping</div>
                    <div className="subtitle">ORDERS WILL BE PROCESSED IN USD</div>
                </div>
                <div className="additional-data">
                    <div className="title"><span className="inline-label red">Promotion</span> Additional Notes</div>
                    <textarea className="simple-field size-1"></textarea>
                    <a className="button style-10">Checkout</a>
                </div>
            </div>
            <div className="block-title size-1">Get shipping estimates</div>
            <form>
                <label>Country</label>
                <div className="simple-drop-down simple-field size-1">
                    <select>
                        <option>United States</option>
                        <option>Great Britain</option>
                        <option>Canada</option>
                    </select>
                </div>
                <label>State</label>
                <div className="simple-drop-down simple-field size-1">
                    <select>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Idaho</option>
                    </select>
                </div>
                <label>Zip Code</label>
                <input type="text" value="" placeholder="Zip Code" className="simple-field size-1" />
                <div className="button style-16" style={{display: 'block', margiTop: '10px'}}>calculate shipping<input type="submit" /></div>
            </form>
        </div>
    );
  }
}

export default Item;
