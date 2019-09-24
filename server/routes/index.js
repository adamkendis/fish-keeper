
const _ = require('lodash');
const fs = require('fs');
const excluded = ['index.js'];

module.exports = app => {
  fs.readdirSync(__dirname).forEach(file => {
    let basename = file.split('.')[0];
    console.log(basename);

    if (!fs.lstatSync(__dirname + '/' + file).isDirectory() && !_.includes(excluded, file)) {
      app.use('/' + basename, require('./' + file));
    }
  });
};
