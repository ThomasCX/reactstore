import React from 'react';
import { connect } from 'react-redux';


import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
} from './cart-icons.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
    </CartContainer>
);

export default connect()(CartIcon);
