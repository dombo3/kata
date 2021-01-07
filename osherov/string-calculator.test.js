const calculator = require('./string-calculator');

/*only test for valid input*/

test('given empty string then return 0', () => {
  expect(calculator("")).toEqual(0);
})

test('given one as string then return one as number', () => {
  expect(calculator("1")).toEqual(1);
})

test('given two as string then return two as number', () => {
  expect(calculator("2")).toEqual(2);
})

test('given three as string then return two as number', () => {
  expect(calculator("3")).toEqual(3);
})

test('given two numbers then return their sum', () => {
  expect(calculator("1,2")).toEqual(3);
})

test('given unkonw amount of numbers then return their sum', () => {
  expect(calculator("1,2,3,4,5")).toEqual(15);
})

test('given new lines between numbers then return their sum', () => {
  expect(calculator("1\n2,3")).toEqual(6);
})

test('given different delimiter between numbers then return their sum', () => {
  expect(calculator("//1;\n2;3")).toEqual(6);
})

test('given two digit num in the string then return their sum', () => {
  expect(calculator("10;2")).toEqual(12);
})