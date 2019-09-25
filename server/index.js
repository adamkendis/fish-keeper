const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
