const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

function sanitizeFilename(input) {
    return input.replace(/[^a-z0-9]/gi, '_').toLowerCase().trim();
  }

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (up to 3 characters):',
    validate: input => input.length <= 3 || 'Text must be 3 characters or less',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (color keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (color keyword or hexadecimal):',
  },
];

function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeInstance;
  switch (shape) {
    case 'circle':
      shapeInstance = new Circle(shapeColor);
      break;
    case 'triangle':
      shapeInstance = new Triangle(shapeColor);
      break;
    case 'square':
      shapeInstance = new Square(shapeColor);
      break;
  }

  return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeInstance.render()}
  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
}

inquirer.prompt(questions).then(answers => {
    const svgContent = generateSVG(answers);
    const sanitizedText = sanitizeFilename(answers.text);
    const fileName = sanitizedText || 'logo';
    const filePath = `examples/${fileName}.svg`;

    fs.writeFileSync(filePath, svgContent);
    console.log(`Generated ${fileName}.svg`);
});
