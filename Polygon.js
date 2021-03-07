class Polygon {
    constructor(x, y, radius, options) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Matter.Bodies.circle(x, y, 75, options);
      this.radius = 75;
      this.image = loadImage('polygon.png');
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke('black');
      fill('blue');
      image(this.image, 0, 0, this.radius);
      pop();
    }
  };
  