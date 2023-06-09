import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  // LinkAuthenticationElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import style from './CheckoutForm.module.css';
import StyledBackButton from '../layout/BackButton/StyledBackButton';

export default function CheckoutForm({ customAmount }) {
  const stripe = useStripe();
  const elements = useElements();

  // const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isStripeLoaded, setIsStripeLoaded] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    // Stripe.js has loaded
    setIsStripeLoaded(true);

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email);

    if (!isStripeLoaded || !stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/donation/success`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className={style.checkoutFormContainer}
    >
      {' '}
      {/* Renders a custom StyledBackButton component with a link to the home page, 
    styled by default with a className "link-color" color, and text "Go to home page" 
    which passed to the component as a child */}
      <div className={style['back-button']}>
        <StyledBackButton
          linkName={'/donate'}
          className={'link-color'}
          children
        >
          <span>Go to previous page</span>
        </StyledBackButton>
      </div>
      <p>
        Your donation amount: <b>${customAmount}</b>
      </p>
      {/* <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.value)}
      /> */}
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        disabled={!isStripeLoaded || isLoading || !stripe || !elements}
        id="submit"
        className={style['donation-btn']}
      >
        <span id="button-text">
          {isLoading ? (
            <div className={style.spinner} id="spinner"></div>
          ) : (
            'Pay now'
          )}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
