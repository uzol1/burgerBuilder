import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout'
import Orders from './container/Orders/Orders'
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'
axios.defaults.baseURL = 'https://react-my-burger-c888e-default-rtdb.firebaseio.com/'


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
