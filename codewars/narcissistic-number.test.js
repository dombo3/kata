const assert = require('assert');
const {getDigitsOf, narcissistic} = require('./narcissistic-number.js');

describe('Good VS Evil', () => {
   it('narcissistic', () => {
      assert.ok(narcissistic(7));
      assert.ok(narcissistic(371));
   })
});