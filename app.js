console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const notes = require('./notes.js')

// console.log(_.isString(true));
// console.log(_.isString('hi'));
var filteredArray = _.uniq(["ken", 1, "ken", 2, 1, 3, 5])
console.log(filteredArray);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`); 

