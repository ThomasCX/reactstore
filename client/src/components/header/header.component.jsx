import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Logo for the header
import {ReactComponent as Logo} from '../../assets/crown.svg'

// Cart related components
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions'

import {
    OptionLink, HeaderContainer,
    LogoContainer, OptionsContainer, ToggleButton,
}
    from './header.styles'
import HamburgerIcon from "./HamburgerIcon";

//destructor the user and hidden cart dropdown
const Header = ({handleDrawerToggleClick, signOutStart, hidden, currentUser}) =>
{

    return (
        <HeaderContainer>
        <ToggleButton>
            <HamburgerIcon click={(handleDrawerToggleClick)}/>
        </ToggleButton>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            <OptionLink to='/about'>
                ABOUT
            </OptionLink>
            <OptionLink to='/checkout'>
                CHECKOUT
            </OptionLink>
            { currentUser ? (
                // if statement that checks whether user is sign in or out
                // check the user is signed out
                    <OptionLink as='div' onClick={signOutStart}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>
                )
            }
            <CartIcon to='/checkout'/>
        </OptionsContainer>
        {/*hidden is to ensure the cart dropdown is hidden initially*/}
            {hidden ? null : <CartDropdown />}
    </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

//call to start the following function when an action is fired
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
