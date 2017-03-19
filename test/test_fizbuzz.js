var chai = require('chai');
var should = chai.should();
var assert = require('assert');
var deretBilangan = require('../index.js')

console.log(deretBilangan(9));

describe('Testing fizzbuzz, ', function () {
    // positive case
    it(`should return [3, 'KUS', 9]`, function () {
        assert.deepEqual(deretBilangan(3), [3, 'KUS', 9]);
    });

    it(`should return [ 3, 'KUS', 9, 'KUS', 'KAS', 'KUS' ]`, function () {
        assert.deepEqual(deretBilangan(6), [3, 'KUS', 9, 'KUS', 'KAS', 'KUS']);
    });

    it(`should return [ 3, 'KUS', 9, 'KUS', 'KAS', 'KUS', 21, 'KUS', 27 ]`, function () {
        assert.deepEqual(deretBilangan(9), [3, 'KUS', 9, 'KUS', 'KAS', 'KUS', 21, 'KUS', 27]);
    });
});
