import React from 'react';
import ReactDOM from 'react-dom';

import {ContentCls as ProductContent} from './Pages/Products/Content';
import {ContentCls as FeaturedProductContent} from './Pages/FeaturedProducts/Content';
import {ContentCls as CartContent} from './Pages/Cart/Content';

import Page from './Components/PageContent/Item';
import Cart from './Components/PageContent/CartPopup/Item';
import Footer from './Components/Footer/Item';
import Header from './Components/Header/Item';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './index.css';

// ReactDOM.render(
//     (
//         <Router>
//             <div className="content-center fixed-header-margin">
//                 <div id="header" className="header-wrapper style-10">
//                     <Route path="/product" component={ProductHeader} />
//                     <Route path="/featured" component={FeaturedProductHeader} />
//                     <div className="clear"></div>
//                 </div>
//                 <Page>
//                     <Route path="/product" component={ProductContent} />
//                     <Route path="/featured" component={FeaturedProductContent} />
//                     <Footer />
//                 </Page>
//             </div>
//         </Router>
//     ),
//     document.getElementById('content-block')
// )

class App extends React.Component{
    constructor(){
        super();

        this.state={title:''};
    }

    setTitle(title){
        this.setState({title:title});
    }

    render(){
        return (
            <Router>
                <div id="content-block">
                    <div className="content-center fixed-header-margin">
                        <div id="header" className="header-wrapper style-10">
                            <Header title={this.state.title}/>
                            <div className="clear"></div>
                        </div>
                        {/*<Page>*/}
                            <Route path="/product" render={comp=>(
                                <ProductContent setTitle={this.setTitle.bind(this)} />
                            )} />
                            <Route path="/featured" render={comp=>(
                                <FeaturedProductContent setTitle={this.setTitle.bind(this)} />
                            )} />
                            <Route path="/cart" render={comp=>(
                                <CartContent setTitle={this.setTitle.bind(this)} />
                            )} />
                            <Footer />
                        {/*</Page>*/}
                    </div>
                    <div className="clear"></div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

ReactDOM.render(
    <Cart />,
    document.getElementById('cart')
)

registerServiceWorker();
