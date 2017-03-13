const should    = require('chai').should()
const converter = require('../converter')

describe('Testing function fizz', () => {
  it('should return Fizz if input can multiple by 3', () => {
    converter.convert(6).should.equal("Fizz")
  })

  it('should return Buzz if input can multiple by 5', () => {
    converter.convert(10).should.equal("Buzz")
  })
})
