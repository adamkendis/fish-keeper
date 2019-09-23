const express = require('express');
const path = require('path');
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];
const db = require('knex')(config);

const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

// app.get('/', (req, res) => {
//   //
// })

// app.post('/catches', (req, res) => {
//   //
// })

// app.put('/catches/:fishId', (req, res) => {
//   const fishId = req.params.fishId;
//   //
// })

// app.delete('/catches/:fishId', (req, res) => {
//   const fishId = req.params.fishId;
//   db('fish_catch_data')
//     .where({ id: fishId })
//     .del()
//     .then(() => {
//       res.send('Deleted')
//     })
//     .catch(err => {
//       console.error(err);
//     })
// })

// app.get('/history', (req, res) => {
//   //
// })

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
