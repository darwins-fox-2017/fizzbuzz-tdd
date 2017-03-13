var chai = require('chai')
var should = chai.should()

var fizz = require('../fizzbuzz')

describe('FizzBuzz Testing', function(){
  it('should return fizz when the paramater is 3', function(){
    fizz.fizzbuzz(3).should.equal('fizz')
  })
  it('should return buzz when the paramater is 5', function(){
    fizz.fizzbuzz(5).should.equal('buzz')
  })
  it('should return bizzbuzz when the paramater is 15', function(){
    fizz.fizzbuzz(15).should.equal('fizzbuzz')
  })
})
