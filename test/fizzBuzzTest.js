const chai = require('chai');
const should = chai.should();

const fizzBuzz = require('../fizzBuzz/fizzBuzz')



describe('Pengetesan fungsi fizzbuzz', function () {
  it('Kata yang keluar harus FizzBuzz', function() {
    fizzBuzz.convert(15).should.equal('FizzBuzz')
  })
  it('Kata yang keluar harus fizz', function() {
    fizzBuzz.convert(3).should.equal('Fizz')
  })
  it('Kata yang keluar harus Buzz', function() {
    fizzBuzz.convert(5).should.equal('Buzz')
  })
  it('Keluarkan inputan ', function() {
    fizzBuzz.convert(2).should.equal('')
  })
})
