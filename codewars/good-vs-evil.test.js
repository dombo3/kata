const assert = require('assert');
const goodVsEvil = require('./good-vs-evil');

describe('Good VS Evil', () => {
    it('good wins', () => {
      const actual = goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0');
      const expected = "good";
      assert.strictEqual(actual, expected);
    });

    it('evil wins', () => {
      const actual = goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1');
      const expected = "evil";
      assert.strictEqual(actual, expected);
    });

    it('even', () => {
      const actual = goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0');
      const expected = "even";
      assert.strictEqual(actual, expected);
    });
});