class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
class Triangle extends Shape {
    render() {
    return `<polygon points="150,30 250,230 50,230" fill="${this.color}" />`;
    }
  }
  
class Square extends Shape {
    render() {
      return `<rect x="100" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }
  
module.exports = { Circle, Triangle, Square };