import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

// firebase
import { auth } from './firebase';
import { useStateValue } from './state/StateProvider';
import Footer from './components/Footer/Footer';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM naming convention
    <Router>
      <div className="app">
        <Header />
          <Switch>

              <Route exact path='/'>
                  <Home />
              </Route>

              <Route path='/login'>
                  <Login />
              </Route>

              <Route path='/checkout'>
                  <Checkout />
              </Route>

              <Route path='*'>
                  <PageNotFound />
              </Route>

          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
