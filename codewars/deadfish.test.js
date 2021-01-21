const assert = require('assert');
const deadfish = require('./deadfish');

describe('deadfish', () => {
    it('string containing only "i", "s", "d", "o" characters returns correct result', () => {
      const input = "iiisdoso";
      const actual = deadfish.parse(input);
      const expected = [8, 64];

      assert.deepStrictEqual(actual, expected);
    });

    it('string "iisdo" returns correct result', () => {
      const input = "iisdo";
      const actual = deadfish.parse(input);
      const expected = [3];

      assert.deepStrictEqual(actual, expected);
    });

    it('string containing other characters than "i", "s", "d", "o" returns correct result', () => {
      const input = "iiisxxxdoso"
      const actual = deadfish.parse(input);
      const expected = [8, 64];

      assert.deepStrictEqual(actual, expected);
    });

    it('empty string returns empty array', () => {
      const input = ""
      const actual = deadfish.parse(input);
      const expected = [];

      assert.deepStrictEqual(actual, expected);
    });

    it('input number throws error', () => {
      const input = 1
      
      assert.throws(() => {deadfish.parse(input)});
    });

});