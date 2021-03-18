import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './nav/Nav'
import Header from './header/Header'
import Footer from './footer/Footer'
import Rate from './rate/Rate'
import About from './about/About'
import Shops from './shops/Shops'
import Stocks from './stocks/Stocks'
import Quotes from './quotes/Quotes'
import Crypto from './crypto/Crypto'

class App extends React.Component {
  render() {
    return (
      <div className="site">
        <Header />
        <main>
          <Router>
            <Nav />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Rate} />
                <Route path="/about" exact component={About} />
                <Route path="/shops" exact component={Shops} />
                <Route path="/stocks" exact component={Stocks} />
                <Route path="/quotes" exact component={Quotes} />
                <Route path="/crypto" exact component={Crypto} />
                <Route component={Error} />
              </Switch></div>
          </Router>
          <div className="container annoying" id="cookie_info">
            <div className="annoying__content">
              <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
            частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
            местоположения.&nbsp;<button className="ok-btn" type="button">Ok</button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
