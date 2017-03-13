const chai = require('chai');
const should = chai.should()
const fizzBuzz = require('../fizzBuzz');

describe('FizzBuzz', function () {
  it('should return "Fizz"',function () {
    fizzBuzz.convert(3).should.equal('Fizz')
    fizzBuzz.convert(9).should.equal('Fizz')
    fizzBuzz.convert(12).should.equal('Fizz')
    fizzBuzz.convert(21).should.equal('Fizz')
  })

  it('should return "Buzz"',function () {
    fizzBuzz.convert(25).should.equal('Buzz')
    fizzBuzz.convert(5).should.equal('Buzz')
    fizzBuzz.convert(10).should.equal('Buzz')
    fizzBuzz.convert(125).should.equal('Buzz')
  })

  it('should return "FizzBuzz"',function () {
    fizzBuzz.convert(15).should.equal('FizzBuzz')
    fizzBuzz.convert(60).should.equal('FizzBuzz')
    fizzBuzz.convert(105).should.equal('FizzBuzz')
    fizzBuzz.convert(90).should.equal('FizzBuzz')
  })

  it('should return nothing',function () {
    fizzBuzz.convert(4).should.equal('')
    fizzBuzz.convert(28).should.equal('')
    fizzBuzz.convert(2).should.equal('')
    fizzBuzz.convert(16).should.equal('')
  })
})
