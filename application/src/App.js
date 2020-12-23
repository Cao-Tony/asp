import React from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CartViewingPage from './screens/CartViewingPage';
import FaqPage from './screens/FaqPage';
import HomePage from './screens/HomePage';
import PrizesPage from './screens/PrizesPage';
import ProductLandingPage from './screens/ProductLandingPage';
import ReturnsOrdersPage from './screens/ReturnsOrdersPages';
import SigninPage from './screens/SigninPage';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/products">
            <ProductLandingPage />
          </Route>
          <Route path="/cart">
            <CartViewingPage />
          </Route>
          <Route path="/signin">
            <SigninPage />
          </Route>
          <Route path="/returns-and-orders">
            <ReturnsOrdersPage />
          </Route>
          <Route path="/faq">
            <FaqPage />
          </Route>
          <Route path="/prizes">
            <PrizesPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
