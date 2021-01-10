const { TestScheduler } = require('jest');
const telNumValidator = require('./telephone-num-validator');

const correctFormats = [
  "555-555-5555",
  "1 555-555-5555",
  "1 (555) 555-5555",
  "5555555555",
  "555-555-5555",
  "(555)555-5555",
  "1(555)555-5555",
  "(555) 555-5555",
  "555 555 5555",
  "1 555 555 5555",
  "1 555 555 5555",
  "1 456 789 4444",
]

const incorrectFormats = [
  "555-5555",
  "5555555",
  "1 555)555-5555",
  "123**&!!asdf#",
  "55555555",
  "(6054756961)",
  "2 (757) 622-7382",
  "0 (757) 622-7382",
  "-1 (757) 622-7382",
  "2 757 622-7382",
  "10 (757) 622-7382",
  "27576227382",
  "(275)76227382",
  "2(757)6227382",
  "2(757)622-7382",
  "555)-555-5555",
  "(555-555-5555",
  "(555)5(55?)-5555",
]

test.each(correctFormats)("correct telephone number formats", (format) => {
  expect(telNumValidator(format)).toBe(true);
})


test.each(incorrectFormats)("incorrect telehpne number formats", (format) => {
  expect(telNumValidator(format)).toBe(false);
})
