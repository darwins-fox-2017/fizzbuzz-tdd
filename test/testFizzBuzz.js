var should = require('chai').should()
var fizzBuzz = require('../index')

describe('Testing FizzBuzz', function () {
  it('result should be Fizz if input 3', function () {
    fizzBuzz(3).should.equal('Fizz')
  })

  it('result should be Buzz if input 5', function () {
    fizzBuzz(5).should.equal('Buzz')
  })

  it('result should be FizzBuzz if input 15', function () {
    fizzBuzz(15).should.equal('FizzBuzz')
  })

  it('result should be 2 if input 2', function () {
    fizzBuzz(2).should.equal(2)
  })
})
