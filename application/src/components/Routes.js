import React from 'react'; 
import {    
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

import CartViewingPage from '../screens/CartViewingPage';
import FaqPage from '../screens/FaqPage';
import HomePage from '../screens/HomePage';
import PrizesPage from '../screens/PrizesPage';
import ProductLandingPage from '../screens/ProductLandingPage';
import ReturnsOrdersPage from '../screens/ReturnsOrdersPages';
import SigninPage from '../screens/SigninPage';
import SignupPage from '../screens/SignupPage';
import Dashboard from '../screens/Dashboard';

import AuthAPI from '../utils/AuthAPI';

function Routes() {
    return (
        <Switch>
          <Route path="/products" component={ProductLandingPage} />
          <Route path="/cart" component={CartViewingPage} />
          <RouteRegistration path="/signin" component={SigninPage} />
          <RouteRegistration path="/signup" component={SignupPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/returns-and-orders" component={ReturnsOrdersPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/prizes" component={PrizesPage} />
          <Route path="/" component={HomePage} />
        </Switch>
    )
}

const RouteRegistration = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthAPI);
  const history = useHistory();

  return (
    <Route 
      {...rest} 
      render={props => !authApi.auth ? <Component {...props} /> : history.push('/')} 
    />
  )
}

// const DashboardProtected = ({ component: Component, ...rest }) => {
//   const authApi = React.useContext(AuthAPI);
//   const history = useHistory();
  
//   return (
//     <Route 
//       {...rest} 
//       render={props => authApi.auth ? <Component {...props} /> : history.push('/signin')} 
//     />
//   )
// }

export default Routes;
