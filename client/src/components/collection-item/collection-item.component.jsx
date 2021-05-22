import React from 'react';
import {connect} from 'react-redux';
import {addItem} from "../../redux/cart/cart.actions";
import {
    Popover,
    OverlayTrigger
}
    from 'react-bootstrap';


import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl} = item;
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h6">Item Added To Cart :)</Popover.Title>
        </Popover>
    );

    return(
        <CollectionItemContainer>
            <BackgroundImage
                className='image' imageUrl={imageUrl}
            />
            <CollectionFooterContainer>
                <NameContainer> {name}</NameContainer>
                <PriceContainer> {price}</PriceContainer>
            </CollectionFooterContainer>
            {/*When the button is click it goes to the dispatch
            in order to run the add item function*/}
            <OverlayTrigger
                animation
                trigger="click"
                placement="top"
                rootClose
                overlay={popover} defaultShow={false}
                delay={200}>
                <AddButton  onClick={() => addItem(item)} inverted>
                    Add to Cart
                </AddButton >
            </OverlayTrigger>
        </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
});

export default connect(null,
    mapDispatchToProps)(CollectionItem);
