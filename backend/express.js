const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(bodyParser.json()); 
app.use(cors());
app.use(session({
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false },  
}));

// routes 
const userRouter = require('./router/user.route');
const paymentRouter = require('./router/payment.route');

app.use("/", userRouter);
app.use("/payment", paymentRouter);

module.exports = app;

