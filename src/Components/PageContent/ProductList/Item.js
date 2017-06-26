import React, { Component } from 'react';
//ProductList
class Item extends Component {
  render(){
    return (
        <div className="col-md-9 col-md-push-3 col-sm-8 col-sm-push-4">>
          {this.props.children}
        </div>
    );
  }
}

export default Item;
