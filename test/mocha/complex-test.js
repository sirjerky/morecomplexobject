"use strict";

var Counter = require('../../app/js/counter');
var expect = require('chai').expect;

describe('Counter', function(){
  it('Should create counter object', function(){
    var counter = new Counter;
    expect(counter.getValue()).to.be.eql(0);
  });
  it('Should increment counter by 1', function(){
    var counter = new Counter;
    counter.increment();
    expect(counter.getValue()).to.be.eql(1);
  });
  it('Should create new counter with count of 0', function(){
    var counter = new Counter;
    counter.increment;
    var counter2 = new Counter;
    expect(counter2.getValue()).to.be.eql(0);
  });
});
