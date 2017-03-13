'use strict'

var chai = require('chai')
var should = chai.should()
var fizzbuzz = require('../fizzbuzz')

describe('Testing fizzbuzz make it like a poem', () => {
  it('It should return fizz when input 3', () => {
    fizzbuzz(3).should.equal('fizz')
  })
  it('It should return buzz when input 5', () => {
    fizzbuzz(5).should.equal('buzz')
  })
  it('It should return buzz when input 15', () => {
    fizzbuzz(15).should.equal('fizzbuzz')
  })
  it('It should return buzz when input 18', () => {
    fizzbuzz(18).should.equal('fizz')
  })
  it('It should return fizz when input 30', () => {
    fizzbuzz(30).should.equal('fizzbuzz')
  })
  it('It should return buzz when input 50', () => {
    fizzbuzz(50).should.equal('buzz')
  })
  it('It should return buzz when input 60', () => {
    fizzbuzz(60).should.equal('fizzbuzz')
  })
})
