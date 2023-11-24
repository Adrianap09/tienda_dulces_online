import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51MXhMwE3qnA4gieV1zddEIRQEaSU2Ro4yVhovCZZGzuLKMvnkc1pmksgMB0B2hcPnogMWw4zzYAoiUK0trTZ7rCY00jHqdr6ZV');

export const pay = async (req, res) => {
    try {
        const { amount, id } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'COP',
            description: 'shop',
            payment_method: id,
            confirm: true,
        });

        console.log('PaymentIntent:', paymentIntent);

        res.status(200).json({
            success: true,
            message: 'Payment successful',
            paymentIntent,
        });
    } catch (error) {
        console.error('Error processing payment:', error.message);

        res.status(500).json({
            success: false,
            message: 'Payment failed',
            error: error.message,
        });
    }
};
