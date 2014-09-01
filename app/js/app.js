"use strict";

var Counter = require('./complex_object');

var test = new Counter();

test.getValue();
test.increment();
test.increment();
test.getValue();
