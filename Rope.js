class Rope {
  constructor(bodya,bodyb){
    var options = {
      bodyA: bodya,
      bodyB: bodyb,
      length:30,
      stiffness: 0.01,
    }
    this.rope = Matter.Constraint.create(options);
    World.add(world,this.rope);
  }
  
  display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
  }

}