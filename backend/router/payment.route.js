const express = require('express');
const router = express.Router();

const stripe = require('stripe')('sk_test_51I3j7iLUIpzEoCsjVgIpwJTDOTfbY3VjFiStCFFLPpq4bIjtZfUVZkYMc6SqN7QrpoF6otPmtI7NCX2OyjfTVNdT000vFGmqzM');

router.post("/charge-session", async (req, res) => {
    const { name, images, price, quantity } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: name,
                images: images,
              },
              unit_amount: price * 100,
            },
            quantity: quantity,
          },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/?success=true`,
        cancel_url: `http://localhost:3000/products?canceled=true`,
      });
      res.status(200).json({ id: session.id });
});

module.exports = router;