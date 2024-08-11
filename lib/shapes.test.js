const { Square, Circle, Triangle } = require('./shapes');

describe('Square', () => {
  test('should render a square with the specified color', () => {
    const square = new Square('red');
    const expected = '<rect x="50" y="40" width="200" height="200" fill="red" />';
    expect(square.render()).toEqual(expected);
  });
});

describe('Triangle', () => {
  test('should render a square with the specified color', () => {
    const triangle = new Triangle('black');
    const expected = '<polygon points="150,5 20,190 290,190" fill="black" />';
    expect(triangle.render()).toEqual(expected);
  });
});

describe('Circle', () => {
    test('should render a circle with the specified color', () => {
      const circle = new Circle('blue');
      const expected = '<circle cx="150" cy="110" r="80" fill="blue" />';
      expect(circle.render()).toEqual(expected);
    });
});
