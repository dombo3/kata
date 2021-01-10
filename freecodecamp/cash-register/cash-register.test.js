const checkCashRegister = require('./cash-register');

test('returns an Object', () => {
  const price = 19.5;
  const cash = 20;
  const cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

  const expected = {"status": "OPEN", "change": [["QUARTER", 0.5]]};
  expect(checkCashRegister(price, cash, cid)).toBeInstanceOf(Object);
})

test('OPEN with one change', () => {
  const price = 19.5;
  const cash = 20;
  const cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

  const expected = {"status": "OPEN", "change": [["QUARTER", 0.5]]};
  expect(checkCashRegister(price, cash, cid)).toEqual(expected);
})

test('OPEN with multiple change', () => {
  const price = 3.26;
  const cash = 100;
  const cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

  const expected = {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]};
  expect(checkCashRegister(price, cash, cid)).toEqual(expected);
})

test('small amount cash in drawer results INSUFFICIENT_FUNDS', () => {
  const price = 19.5;
  const cash = 20;
  const cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

  const expected = {status: "INSUFFICIENT_FUNDS", change: []};
  expect(checkCashRegister(price, cash, cid)).toEqual(expected);
})


test('enough amount cash in drawer with wront type and amount of denomination results INSUFFICIENT_FUNDS', () => {
  const price = 19.5;
  const cash = 20;
  const cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

  const expected = {status: "INSUFFICIENT_FUNDS", change: []};
  expect(checkCashRegister(price, cash, cid)).toEqual(expected);
})

test('emptying drawer results in CLOSED with initial cash in drawer', () => {
  const price = 19.5;
  const cash = 20;
  const cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

  const expected = {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]};
  expect(checkCashRegister(price, cash, cid)).toEqual(expected);
})
