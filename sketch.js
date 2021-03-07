const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, ground1, ground2;
var polygon;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(500,200,100,50);

    polygon = new Polygon(50,200,20);

}

function draw(){
    background('brown');
    Engine.update(engine);

    ground.display();
    ground1.display();
    polygon.display();
}

// function mouseDragged(){
//     Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
// }


// function mouseReleased(){
//     slingshot.fly();
// }
