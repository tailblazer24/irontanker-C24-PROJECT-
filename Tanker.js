class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
    };

    display(){

      var pos = this.body.position;
      pos.x = mouseX; 
      pos.y = mouseY;
      var angle = this.body.angle; 
      push();
      translate(pos.x, pos.y); 
      rotate(angle)
      rectMode(CENTER)
      fill("red")
      stroke("blue");
        strokeWeight(3);
        
        
        rect(0, 0, this.width, this.height);
      pop();
  }
};



    

    
