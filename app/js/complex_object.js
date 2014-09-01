"use strict";

module.exports = function Counter(){
  var counter = 0;
  this.getValue = function(){
    console.log(counter);
  };
  this.increment = function(){
    counter++;
  };

};
