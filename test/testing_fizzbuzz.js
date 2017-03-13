const should  = require('chai').should()

describe('Testing function fizz', () => {
  it('should return Fizz if input can multiple by 3', () => {
    converter.convert(6).should.equal("Fizz")
  })
})
