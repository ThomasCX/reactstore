import React from "react";
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.components";

function App() {
  return (
      <div>
          <Header/>
          <div>
          <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage} />
              <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
          </div>
      </div>
  );
}

export default App;
