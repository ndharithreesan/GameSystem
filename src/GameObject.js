var GameObject = function(){
  //setup private variables
  this._image =-1;

  this._$node = $('<img src =""></img>');
  this._$node.style.position = 'absolute';

  //setup public variables
  this.images = [];

  this.position= new Vector2();
  this.velocity= new Vector2();
  this.gravity = new Vector2();

  this.rotation = 0;

  this._Update();
};

GameObject.prototype._Update = function(){
  //Update Physics
  this.velocity.add(this.gravity);
  this.position.add(this.velocity);

  //Update subObjects
  if(this.Update) {
    this.Update;
  }

  //Update DOM
  if(this._image===-1){
    this._$node.style.visibility = 'hidden';
  } else {
    this._$node.style.visibility = 'visible';
  }
  this.$node.attr('src',this.images[this._image]);
  var styleSettings = {left: this.position.x-this.$node.width/2,top: this.position.y-this.$node.height/2};
  this.$node.css(styleSettings);
  //TODO: Update Rotation

  //Schedule the next update
  var that=this;
  setTimeout(function(){that._Update();}, 1);
};

GameObject.prototype.SetImage = function( index ) {
  this._image=index;
};
