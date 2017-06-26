import React, { Component } from 'react';
import MenuHeader from './MenuHeader/Item';
import MenuFooter from './MenuFooter/Item';
import MenuItem from './MenuItem/Item';
import SubMenu from './MenuItem/SubLink/Item';
import SubMenuItem from './MenuItem/SubLink/SubLinkItem/Item';

class Item extends Component {
  render(){
    return (
        <div className="navigation">
          <MenuHeader />
          <div className="nav-overflow">
            <nav>
              <ul>

                <MenuItem label="Home" href="/featured">
                  <SubMenu>
                    <SubMenuItem label="home1" href="/home1.html" />
                  </SubMenu>
                </MenuItem>
                <MenuItem label="Products" href="/product"></MenuItem>
                <MenuItem label="Cart" href="/cart"></MenuItem>

              </ul>
              <div className="clear"></div>
              <a className="fixed-header-visible additional-header-logo"><img src="img/logo-9.png" alt=""/></a>
            </nav>

            <MenuFooter />

          </div>
        </div>
    );
  }
}

export default Item;
