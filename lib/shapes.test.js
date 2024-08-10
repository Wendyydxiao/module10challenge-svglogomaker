const { Square, Circle, Triangle } = require('./shapes');

describe('Square', () => {
  test('should render a square with the specified color', () => {
    const square = new Square('red');
    const expected = '<rect x="100" y="50" width="200" height="200" fill="red" />';
    expect(square.render()).toEqual(expected);
  });
});

describe('Triangle', () => {
  test('should render a square with the specified color', () => {
    const triangle = new Triangle('black');
    const expected = '<polygon points="150,30 250,230 50,230" fill="black" />';
    expect(triangle.render()).toEqual(expected);
  });
});

describe('Circle', () => {
    test('should render a circle with the specified color', () => {
      const circle = new Circle('blue');
      const expected = '<circle cx="150" cy="100" r="50" fill="blue" />';
      expect(circle.render()).toEqual(expected);
    });
});
