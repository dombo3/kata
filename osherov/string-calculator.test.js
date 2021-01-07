const { TestScheduler } = require('jest');
const calculator = require('./string-calculator');

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