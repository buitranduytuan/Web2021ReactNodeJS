import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListProduct from '../Components/Products/listProduct';
import Home from '../Components/Home/home';
import Checkout from '../Components/Checkout/checkout';
import ProductDetail from '../Components/ProductDetail/productDetail';
import RebassTest from '../Components/Rebass/rebassTest';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
      <Route exact path="/products">
        <ListProduct />
      </Route>
      <Route path="/productdetail">
        <ProductDetail />
      </Route>
      <Route path="/rebass">
        <RebassTest />
      </Route>
    </Switch>
  );
};

export default AppRouter;
