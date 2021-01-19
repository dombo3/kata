const assert = require('assert');
const tickets = require('./vasya-clerk');

describe('vasya-clerk', () => {
  describe('clerk can sell', () => {
    
    it('one 25 ticket', () => {
      const input = [25];
      const result = tickets(input);
      const expected = true;
      
      assert.strictEqual(result, expected);
    })

    it('two 25 tickets', () => {
      const input = [25,25];
      const result = tickets(input);
      const expected = true;
      
      assert.strictEqual(result, expected);
    })
  
    it('three tickets and have change for third ticket', () => {
      const input = [25,25,50];
      const result = tickets(input);
      const expected = true;

      assert.strictEqual(result, expected);
    })

    it('four tickets and have change for third and fourth ticket', () => {
      const input = [25, 25, 50, 100];
      const result = tickets(input);
      const expected = true;

      assert.strictEqual(result, expected);
      
      assert.ok(tickets([25, 25, 50, 100]));
    })
  })

  describe('clerk can not sell', () => { 
    it('one ticket', () => {
      const input = [50];
      const result = tickets(input);
      const expected = false;

      assert.strictEqual(result, expected);
    })

    it('two tickets', () => {
      const input = [25, 100];
      const result = tickets(input);
      const expected = false;

      assert.strictEqual(result, expected);
    })

    it('more tickts', () => {
      const input = [25, 25, 50, 50, 100];
      const result = tickets(input);
      const expected = false;

      assert.strictEqual(result, expected);
    })
  });
});