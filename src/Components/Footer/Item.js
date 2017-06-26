import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
        <footer className="type-1">
            <div className="footer-columns-entry">
                <div className="row">
                    <div className="col-md-3">
                        <img className="footer-logo" src="img/logo-9.png" alt="" />
                        <div className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
                        <div className="footer-address">30 South Avenue San Francisco<br/>
                            Phone: +78 123 456 789<br/>
                            Email: <a href="mailto:Support@blanco.com">Support@blanco.com</a><br/>
                            <a href="https://www.8theme.com/index.php"><b>www.inmedio.com</b></a>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <h3 className="column-title">Our Services</h3>
                        <ul className="column">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Custom Service</a></li>
                            <li><a href="#">Terms &amp; Condition</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                        <div className="clear"></div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <h3 className="column-title">Our Services</h3>
                        <ul className="column">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Custom Service</a></li>
                            <li><a href="#">Terms &amp; Condition</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                        <div className="clear"></div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <h3 className="column-title">Our Services</h3>
                        <ul className="column">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Custom Service</a></li>
                            <li><a href="#">Terms &amp; Condition</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                        <div className="clear"></div>
                    </div>
                    <div className="clearfix visible-sm-block"></div>
                    <div className="col-md-3">
                        <h3 className="column-title">Company working hours</h3>
                        <div className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
                        <div className="footer-description">
                            <b>Monday-Friday:</b> 8.30 a.m. - 5.30 p.m.<br/>
                            <b>Saturday:</b> 9.00 a.m. - 2.00 p.m.<br/>
                            <b>Sunday:</b> Closed
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-navigation">
                <div className="cell-view">
                    <div className="footer-links">
                        <a href="#">Site Map</a>
                        <a href="#">Search</a>
                        <a href="#">Terms</a>
                        <a href="#">Advanced Search</a>
                        <a href="#">Orders and Returns</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="copyright">Created with by <a href="#">8theme</a>. All right reserved</div>
                </div>
                <div className="cell-view">
                    <div className="payment-methods">
                        <a href="#"><img src="img/payment-method-1.png" alt="" /></a>
                        <a href="#"><img src="img/payment-method-2.png" alt="" /></a>
                        <a href="#"><img src="img/payment-method-3.png" alt="" /></a>
                        <a href="#"><img src="img/payment-method-4.png" alt="" /></a>
                        <a href="#"><img src="img/payment-method-5.png" alt="" /></a>
                        <a href="#"><img src="img/payment-method-6.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Item;
