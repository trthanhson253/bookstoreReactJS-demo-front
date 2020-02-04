import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/core/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Login from "./components/core/Login";
import AllBooks from "./components/core/AllBooks";
import AllBooksByCategory from "./components/core/AllBooksByCategory";
import BookDetail from "./components/core/BookDetail";
import AccountHome from "./components/my-account/Account-Home";
import AccountShipping from "./components/my-account/Account-Shipping";
import ShoppingCart from "./components/core/ShoppingCart";
import AllBooksByWishList from "./components/core/AllBooksByWishList";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/books/all" component={AllBooks} />
        <Route exact path="/cates/list/:id" component={AllBooksByCategory} />
        <Route exact path="/books/list/:id" component={BookDetail} />
        <Route exact path="/shopping-cart" component={ShoppingCart} />
        <Route exact path="/wish-list-cart" component={AllBooksByWishList} />

        <Route exact path="/my-account/home" component={AccountHome} />
        <Route exact path="/my-account/shipping" component={AccountShipping} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
