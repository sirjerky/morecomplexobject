"use strict";

var Counter = require('./complex_object');

var test = new Counter();

console.log(test.getValue());
test.increment();
test.increment();
console.log(test.getValue());
