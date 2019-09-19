const express = require('express');
const path = require('path');
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];
const db = require('knex')(config);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  db('fish_catch_data')
    .then(data => {
      res.send(data);
    });
});

app.post('/catch', (req, res) => {
  //
})

app.put('/catch/:fishId', (req, res) => {
  const fishId = req.params.fishId;
  //
})

app.delete('/catch/:fishId', (req, res) => {
  //
})

app.get('/history', (req, res) => {
  //
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
