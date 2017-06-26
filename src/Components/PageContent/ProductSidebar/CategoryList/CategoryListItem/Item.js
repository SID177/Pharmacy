import React, { Component } from 'react';

class Item extends Component {
    constructor(){
        super();
        this.state={
            title:{isToggle:false,className:'accordeon-title'},
            entry:{style:{display:'none'}}
        };
    }

    handleClick(){
        var title=this.state.title;
        title.isToggle=!title.isToggle;
        title.className=title.isToggle?"accordeon-title active":"accordeon-title";

        var entry=this.state.entry;
        entry.style={display:title.isToggle?'block':'none'};

        this.setState({title:title,entry:entry});
    }

    render(){
        return (
            <div>
                <div className={this.state.title.className}>{this.props.title}</div>
                <div className="accordeon-entry" style={this.state.entry.style}>
                    <div className="article-container style-1" >
                        <ul>
                            <li><a href="#">Bags &amp; Accessories</a></li>
                            <li><a href="#">Man's Products</a></li>
                            <li><a href="#">Woman's Products</a></li>
                            <li><a href="#">Top Brands</a></li>
                            <li><a href="#">Special Offer</a></li>
                            <li><a href="#">Leather's Products</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
