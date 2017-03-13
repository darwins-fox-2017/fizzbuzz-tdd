'use strict'
module.exports = {
  fizzbuzz: function(num){
    if (num == 3) {
      return 'fizz'
    }
    if (num == 5) {
      return 'buzz'
    }
    if (num % 15 == 0) {
      return 'fizzbuzz'
    }
  }
};
