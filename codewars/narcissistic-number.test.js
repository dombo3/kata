const assert = require('assert');
const {getDigitsOf, narcissistic} = require('./narcissistic-number.js');

describe('Good VS Evil', () => {
   it('return number of digits', () => {
      assert.deepStrictEqual(getDigitsOf(0), []);
      assert.deepStrictEqual(getDigitsOf(7), [7]);
      assert.deepStrictEqual(getDigitsOf(77), [7, 7]);
      assert.deepStrictEqual(getDigitsOf(777), [7, 7, 7]);
      assert.deepStrictEqual(getDigitsOf(7779), [7, 7, 7, 9]);
      assert.deepStrictEqual(getDigitsOf(77712), [7, 7, 7, 1, 2]);
      assert.deepStrictEqual(getDigitsOf(777123), [7, 7, 7, 1, 2, 3]);
   });

   it('narcissistic', () => {
      assert.ok(narcissistic(7));
      assert.ok(narcissistic(371));
   })
});