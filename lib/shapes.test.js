const { Square, Circle } = require('../lib/shapes');

describe('Square', () => {
  test('should render a square with the specified color', () => {
    const square = new Square('red');
    const expected = '<rect x="50" y="50" width="200" height="200" fill="red" />';
    expect(square.render()).toEqual(expected);
  });

  test('should render a square with the default color if no color is specified', () => {
    const square = new Square();
    const expected = '<rect x="50" y="50" width="200" height="200" fill="undefined" />';
    expect(square.render()).toEqual(expected);
  });
});


describe('Circle', () => {
  test('should render a circle with the specified color', () => {
    const circle = new Circle('blue');
    const expected = '<circle cx="150" cy="150" r="90" fill="blue" />';
    expect(circle.render()).toEqual(expected);
  });

  test('should render a circle with the default color if no color is specified', () => {
    const circle = new Circle();
    const expected = '<circle cx="150" cy="150" r="90" fill="undefined" />';
    expect(circle.render()).toEqual(expected);
  });
});