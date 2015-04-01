var Frog = function(){
  GameObject.call(this);
  this.images.push('http://img.informer.com/icons/png/32/18/18953.png');
  this.position.set(window.innerWidth/2, window.innerHeight/2);
  this.SetImage(0);
  var that=this;
  $('body').keydown(function( event ){
    if(event.keyCode === Input.Keys.ArrowUp){
      that.position.y-=32;
      that.rotation=0;
    } else if(event.keyCode === Input.Keys.ArrowDown){
      that.position.y += 32;
      that.rotation=180;
    } else if(event.keyCode === Input.Keys.ArrowLeft){
      that.position.x -= 32;
      that.rotation=270;
    } else if(event.keyCode === Input.Keys.ArrowRight){
      that.position.x += 32;
      that.rotation=90;
    }
  });
};

Frog.prototype = GameObject.prototype;
Frog.prototype.constructor = Frog;

Frog.prototype.Update = function(){ //set up a function that looks at key input to determine where to update position

};

