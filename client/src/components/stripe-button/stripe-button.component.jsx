import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IgByRAt8ltTQpVYkb4IdtGhOFE8qZVpNVUul8EooJGycWnAMvhqLvwxIsym7JHFBzD4UZtgeew74DPYcZWCZuOX00LrnrXwsp'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then((response) =>{
            alert("Successful Payment")
        }).catch((err) => {
            console.log("Error with payment:", JSON.parse(err))
            alert(
                "Issue with payment, Please make sure you use the provided credit card."
            )
        } )
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='React Store'
        billingAddress
        shippingAddress
        image='https://i.ibb.co/1vKwx2X/svg.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
