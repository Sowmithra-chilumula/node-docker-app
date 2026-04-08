const add = require('./math');

test('adds 3 + 3 to equal 6', () => {
  expect(add(3, 3)).toBe(6);
});
