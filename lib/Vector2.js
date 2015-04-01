Vector2 = function ( x, y ) {
  this.x = x || 0;
  this.y = y || 0;
};

Vector2.prototype.set = function( x, y ) {
  this.x = x;
  this.y = y;

  return this;
};

Vector2.prototype.copy = function( other ) {
  return this.set(other.x,other.y);
};

Vector2.prototype.clone = function () {
  return new Vector2( this.x, this.y );
};

Vector2.prototype.add = function ( other) {
  return this.set(this.x+other.x,this.y+other.y);
};

Vector2.prototype.sub = function ( other ) {
  return this.set(this.x-other.x,this.y-other.y);
};

Vector2.prototype.multiply = function ( scale ) {
  return this.set(this.x*scale, this.y*scale);
};

Vector2.prototype.divide = function ( scale ) {
  if(scale!==0){
    return this.set(this.x/scale,this.y/scale);
  } else {
    return this.set(0,0);
  }
};

Vector2.prototype.inverse = function(){
  return this.multiply( -1 );
};

Vector2.prototype.dot = function ( other ) {
  return this.x * other.x + this.y * other.y;
};

Vector2.prototype.lengthSq = function () {
  return this.x * this.x + this.y * this.y;
};

Vector2.prototype.length = function () {
  return Math.sqrt( this.lengthSq() );
};
Vector2.prototype.normalize = function() {
    return this.divide( this.length() );
};
Vector2.prototype.distanceTo = function ( other ) {
  return Math.sqrt( this.distanceToSq( other ) );
};

Vector2.prototype.distanceToSq = function ( other ) {
  var dx = this.x - other.x, dy = this.y - other.y;
  return dx * dx + dy * dy;
};

Vector2.prototype.setLength = function ( length ) {
  return this.normalize().multiplyScalar( length );
};

Vector2.prototype.equals = function( other ) {
  return ( ( other.x === this.x ) && ( other.y === this.y ) );
};
