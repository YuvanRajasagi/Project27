class Bob {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      'restitution':0.8,
      'friction':0.1,
      'density':1.1
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius   
    World.add(world, this.body);
  }
  display(){
    ellipseMode(RADIUS);
    push();
    fill("green");
    ellipse(this.body.position.x, this.body.position.y, this.radius);
    pop();
  } 
}
