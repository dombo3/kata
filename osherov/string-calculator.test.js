const add = require('./string-calculator');

/*only test for valid input*/

test('given empty string then return 0', () => {
  expect(add("")).toEqual(0);
})

test('given one as string then return one as number', () => {
  expect(add("1")).toEqual(1);
})

test('given two as string then return two as number', () => {
  expect(add("2")).toEqual(2);
})

test('given three as string then return two as number', () => {
  expect(add("3")).toEqual(3);
})

test('given two numbers then return their sum', () => {
  expect(add("1,2")).toEqual(3);
})

test('given unkonw amount of numbers then return their sum', () => {
  expect(add("1,2,3,4,5")).toEqual(15);
})

test('given new lines between numbers then return their sum', () => {
  expect(add("1\n2,3")).toEqual(6);
})

test('given different delimiter between numbers then return their sum', () => {
  expect(add("//1;\n2;3")).toEqual(6);
})

test('given two digit num in the string then return their sum', () => {
  expect(add("10;2")).toEqual(12);
})


test('given a negative number then throw an exception', () => {
  expect(() => add("-1")).toThrow('negatives not allowed: -1');
})

test('given multiple negative number then throw an exception with all negatives', () => {
  expect(() => add("-1,-22,-3")).toThrow('negatives not allowed: -1,-22,-3');
})