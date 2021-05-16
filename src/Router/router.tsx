import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import ListProduct from "../Components/Products/listProduct";
import Home from "../Components/Home/home";
import Checkout from "../Components/Checkout/checkout";
import ProductDetail from "../Components/ProductDetail/productDetail";

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
        </Switch>
    );

}


export default AppRouter;