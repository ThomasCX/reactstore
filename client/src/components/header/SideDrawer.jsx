import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Link} from 'react-router-dom'

// Cart related components
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {signOutStart} from '../../redux/user/user.actions'

import './SideDrawer.css'
import CartIcon from "../../components/cart-icon/cart-icon.component";

const SideDrawer = ({show, signOutStart, currentUser})  => {
    let drawerClasses = "side-drawer";

    if(show) {
        drawerClasses = "side-drawer open";
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <Link to='/shop'>SHOP</Link>
                </li>
                <li>
                    <Link to='/contact'>CONTACT</Link>
                </li>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
                <li>
                    <Link to='/checkout'>CHECKOUT</Link>
                </li>
                { currentUser ? (
                    // if statement that checks whether user is sign in or out
                    // check the user is signed out
                    <li>
                        <Link as='div' onClick={signOutStart}>
                            SIGN OUT
                        </Link>
                    </li>
                ) : (
                        <li>
                            <Link to='/signin'>
                                SIGN IN
                            </Link>
                        </li>
                    )
                }
                <CartIcon to='/checkout'/>
            </ul>
        </nav>
    );
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

//call to start the following function when an action is fired
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
