const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require("express-sslify");

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 5000;
//use statements
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// check that app is running on production mode
if (process.env.NODE_ENV === 'production') {
    //forces https on the website
    app.use(compression());
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});

//get the service worker
app.get('/service-worker.js', (req, res) =>
{
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.get('OneSignalSDKUpdaterWorker.js', (req, res) =>
    {
        res.sendFile(path.resolve(__dirname, '..', 'build', "OneSignalSDKUpdaterWorker.js"));
    }
);
app.get('OneSignalSDKWorker.js', (req, res) =>
    {
        res.sendFile(path.resolve(__dirname, '..', 'build', "OneSignalSDKWorker.js"));
    }
);

//payment backend for the stripe payment system
app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    let error;
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({error: stripeErr});
        } else {
            res.status(200).send({success: stripeRes});
        }
    }).then(r => error);
} );