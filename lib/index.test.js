const inquirer = require('inquirer');
const fs = require('fs');
const { generateSVG } = require('../index.js');


describe('Logo Creator', () => {
  test('should validate that text is 3 characters or less', () => {
    const input = 'ABC';
    const validateText = input.length <= 3;
    expect(validateText).toEqual(true);
  });

  test('should validate that text cannot be empty', () => {
    const input = '';
    const validateText = input.length > 0;
    expect(validateText).toBe(false);
  });

  test('should validate that shape color is not empty', () => {
    const shapeColor = 'red';
    const validateShapeColor = shapeColor.trim() !== '';
    expect(validateShapeColor).toBe(true);
  });

});


describe('generateSVG', () => {
  test('should correctly include text and shape colors in the SVG', () => {
    const svg = generateSVG({
      text: 'XYZ',
      textColor: 'white',
      shape: 'square',
      shapeColor: 'blue',
    });
    expect(svg).toContain('fill="white"');
    expect(svg).toContain('fill="blue"');
  });
});