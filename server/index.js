'use strict';
const yelp = require('yelp-fusion');
const client = yelp.client('hQ9kH-rRd1q7AZRXFbMsJDLWlFrA_UpNw4NW6rHAq4eksdlkNrwQE0iwnWQ704F-3Or8Hc0y6eUOJN2WyM95NP-1AJqu8bwQrxM7szpPocEsuvXt3qyUEK4D4PDaYnYx');
require('dotenv/config');
const path = require('path');
const express = require('express');
const errorMiddleware = require('./error-middleware');

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
} else {
  app.use(express.static(publicPath));
}

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

app.get('/api/nearby', (req, res, next) => {
  client.search({
    term: 'restaurant',
    latitude: 33.6349171,
    longitude: -117.7405465,
    radius: 1000
  })
    .then(res => res.json(res))
    .then(data => res.json(data))
    .catch(e => {
      res.status(404);
    });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
