import React, {lazy, useEffect, Suspense} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';

import Header from "./components/header/header.component"
import Footer from './components/footer/footer.component';
import Spinner from './components/spinner/spinner.components'
import ErrorBoundary from './components/error-boundary/error.boundary.component'

//object export
import {GlobalStyle} from './global.styles';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import 'bootstrap/dist/css/bootstrap.min.css';

//page exports
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.components'));
const SignInAndSignUpPage = lazy(() => import('./pages/signin-and-signup/signin-and-signup.components'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const ContactPage  = lazy(() => import('./pages/contact-us/contact-us.componet'));
const AboutPage = lazy(() => import('./pages/about-us/about.component'));

//user useEffects where there are life cycle effects in the app
const App = ({currentUser, checkUserSession }) => {
    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])


    return (
        <div>
            <GlobalStyle/>
            <Header/>
            <div>
                <Switch>
                    <ErrorBoundary>
                        <Suspense fallback={<Spinner/>}>
                            <Route exact path='/' component={HomePage}/>
                            <Route path='/shop' component={ShopPage} />
                            <Route exact path='/about' component={AboutPage} />
                            <Route exact path='/contact' component={ContactPage}/>
                            <Route exact path='/checkout' component={CheckoutPage} />
                            <Route exact path='/signin'
                                   render={() =>
                                currentUser ? (
                                    <Redirect to='/' />
                                ) : (
                                    <SignInAndSignUpPage />
                                )}
                            />
                        </Suspense>
                    </ErrorBoundary>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
