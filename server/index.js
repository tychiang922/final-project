require('dotenv/config');
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);
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

app.get('/yelp/nearby', (req, res, next) => {
  const { lat, lng, category } = req.query;
  client.search({
    term: category,
    category: 'food',
    latitude: lat,
    longitude: lng,
    radius: 1000
  })
    .then(response => {
      res.json(response);
    }).then(data => {
      res.status(200).json(data);
    })
    .catch(e => {
      res.status(400);
    });
});

app.get('/yelp/business/:id', (req, res, next) => {
  const businessId = req.params.id;
  client.business(businessId)
    .then(response => {
      res.json(response);
    }).then(data => {
      res.status(200).json(data);
    })
    .catch(e => {
      res.status(400);
    });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
