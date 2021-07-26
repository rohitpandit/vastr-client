import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

import Classes from './CheckoutForm.module.css';

const CheckoutForm = ({
    total,
    paymentSuccessHandler,
    paymentFailureHandler,
}) => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const getClientSecret = async () => {
            try {
                const result = await axios.post(
                    'https://pacific-caverns-28419.herokuapp.com/payment/crate-payment-intent',
                    { totalPayable: total }
                );

                setClientSecret(result.data.clientSecret);
            } catch (error) {
                setError(error.message);
            }
        };

        getClientSecret();
    }, []);

    const cardStyle = {
        style: {
            base: {
                color: '#32325d',
                fontFamily: 'Arial, san-serif',
                fontSize: '16px',
                '::placeholder': { color: '#32325d' },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
    };

    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };

    const handleSumit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        console.log(clientSecret);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (payload.error) {
            paymentFailureHandler(payload.error);
            setProcessing(false);
        } else {
            setProcessing(false);
            paymentSuccessHandler();
        }
    };

    return (
        <div className='my-5'>
            <form onSubmit={handleSumit}>
                <CardElement
                    options={cardStyle}
                    onChange={handleChange}
                    className={Classes.cardElement}
                />
                <button
                    type='submit'
                    onClick={handleSumit}
                    className='btn btn-primary mt-2'>
                    {processing ? 'processing...' : `Pay 550`}
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
