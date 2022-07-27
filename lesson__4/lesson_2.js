function Rectangle(length, width) {
  this.length = length;
  this.width = width;

  this.perimeter = function() {
    return (this.length + this.width) * 2;
  }
  this.square = function() {
    return this.length * this.width;
  }
}

function Square(length) {
  this.length = length;
  this.width = length;
}
Square.prototype = new Rectangle();
