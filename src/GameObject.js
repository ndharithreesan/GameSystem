var GameObject = function(){
  //setup private variables
  this._image =-1;

  this.$_node = $('<img src ="">');

  $('body').append(this.$_node);
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
  var buffer=Math.floor(this.position.y-this.$_node.height/2) + 'px';
  this.$_node[0].style.top=Math.floor(this.position.y-this.$_node.height()/2) + 'px';
  this.$_node[0].style.left=Math.floor(this.position.x-this.$_node.width()/2) + 'px';
  this.$_node[0].style.transform='rotate('+this.rotation+'deg)';
  this.$_node[0].style.position = 'absolute';
  if(this._image===-1){
    this.$_node[0].style.display='hidden';
  } else {
    this.$_node[0].style.display='block';
  }
  this.$_node.attr('src',this.images[this._image]);

  //Schedule the next update
  var that=this;
  setTimeout(function(){that._Update();}, 1);
};

GameObject.prototype.SetImage = function( index ) {
  this._image=index;
};
