class Umbrella{
    constructor(x,y) {
        
    this.image=loadImage("images/walking8.png");
    }

display(){
  var umbrellapos = this.umbrella.position; 
  push() 
 
  rectMode(CENTER) 
  imageMode(CENTER);
  image(this.image,umbrellapos.x,umbrellapos.y+70,300,300); 
   
}
}