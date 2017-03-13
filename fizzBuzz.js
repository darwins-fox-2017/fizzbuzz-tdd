let methods = {}

methods.convert = function (num) {
  let Buzz = num%5
  let Fizz = num%3

  return !Fizz ? (!Buzz ? 'FizzBuzz' : 'Fizz') : !Buzz ? 'Buzz' : ''
}

module.exports = methods
