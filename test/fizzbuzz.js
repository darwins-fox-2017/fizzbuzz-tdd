'use strict'

const should = require('chai').should()
const fitur = require('../fitur')

describe('Testing function fizzbuzz', () => {
  it('should return fizz if value % 3 equal 0', () => {
    fitur.fizzbuzz(3).should.equal('fizz')
  })

  it('should return buzz if value % 5 equal 0', () => {
    fitur.fizzbuzz(5).should.equal('buzz')
  })

  it('should return buzz if value % 15 equal 0', () => {
    fitur.fizzbuzz(15).should.equal('fizzbuzz')
  })
})
