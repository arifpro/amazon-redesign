import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    // BEM naming convention
    <Router>
      <div className="app">
        <Switch>

            <Route exact path='/'>
                <Header />
                <Home />
                {/* footer */}
            </Route>

            <Route path='/checkout'>
                <Header />
                <Checkout />
            </Route>

            <Route path='*'>
                <Header />
                <PageNotFound />
            </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
