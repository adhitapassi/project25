class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'isStatic':false
      }
      this.body = Bodies.circle(x, y,70, options);
      this.radius=70;
      this.image=loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      strokeWeight(4);
      stroke("green");
      imageMode(CENTER);
      fill(255);
      image(this.image ,0, 0,this.radius);
      pop();
    }
  };
  