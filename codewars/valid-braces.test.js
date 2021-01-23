const assert = require('assert');
const validBraces = require('./valid-braces.js');

const validInputs = ['()', '(){}[]', '([{}])', '(({{[[]]}}))'];
const inValidInputs = ['[(])', '[({})](]', '(}', '()(', '(((('];

validInputs.forEach(input => {
  describe(`When validating ${input} it should return true`, () => {
    it('', () => {
      const actual = validBraces(input);
      assert.strictEqual(actual, true);
    })
  });
});

inValidInputs.forEach(input => {
  describe(`When validating ${input} it should return false`, () => {
    it('', () => {
      const actual = validBraces(input);
      assert.strictEqual(actual, false);
    })
  });
});