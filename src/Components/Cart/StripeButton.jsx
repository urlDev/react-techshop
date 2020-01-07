import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

//https://dashboard.stripe.com/test/apikeys

const StripeCheckoutButton = ({ cartTotal }) => {
    //this is because stripe wants to see the total in cents, thats why we multiply it by 100
    const priceForStripe = cartTotal * 100;
    //publishable key from stripe website
    const publishableKey = 'pk_test_2MUcMUYRcRYdvtjz5Fhkzrkt00po7V1xgE';

    //this is for payment process/being successful
    const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};


    return (
        //https://github.com/azmenak/react-stripe-checkout
        //source for what we can put inside stripe checkout
        <StripeCheckout
			label="Pay Now"
			name="TechShop Ltd."
			billingAddress
			shippingAddress
			image={require("../Navbar/logo.png")}
			description={`Your total is $${cartTotal}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
    )
}

export default StripeCheckoutButton;