import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';
import './App.css';

//pages throughout application
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.components";
import CheckoutPage from './pages/checkout/checkout.component';

import Header from "./components/header/header.component"
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { checkUserSession } = this.props;
        checkUserSession();
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() { return (
        <div>
            <Header/>
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route exact path='/signin'
                           render={() =>
                        this.props.currentUser ? (
                            <Redirect to='/' />

                        ) : (
                            <SignInAndSignUpPage />
                        )}
                    />
                </Switch>
            </div>
        </div>
    );}
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
