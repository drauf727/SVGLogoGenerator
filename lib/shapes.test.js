const { Square, Circle, Triangle } = require('./shapes');

describe('Testing Shapes', () => {
    test('Squares', () => {
      const color = 'blue';
      const square = new Square(color);
      const expectedOutput = `<rect x="50" y="50" width="400" height="400" fill="${color}"/>`;
      expect(square.render()).toBe(expectedOutput);
    });
  
    test('Circles', () => {
      const color = 'blue';
      const circle = new Circle(color);
      const expectedOutput = `<circle cx="50%" cy="50%" r="200" fill="${color}"/>`;
      expect(circle.render()).toBe(expectedOutput);
    });
  
    test('Triangles', () => {
      const color = 'blue';
      const triangle = new Triangle(color);
      const expectedOutput = `<polygon points="250,0 0,400 500,400" class="triangle" fill="${color}"/>`;
      expect(triangle.render()).toBe(expectedOutput);
    });
  });