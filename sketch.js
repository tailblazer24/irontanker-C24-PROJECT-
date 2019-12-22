const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball(700,320,70,70);
    Ball2 = new Ball(950,320,70,70);
    ground = new Ground(600,height,1200,20)
    Canonball1=new Canonball(825,350);
    Sphere(40);
    

    ball3= new Ball(700,250,70,70);
    ball4 = new Ball(950,250,70,70);
    
    
    ball5 = new Ball(810,150,70,70);
    
    
    tanker1=new Tanker(874,345,120,120);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ball1.display();
    ball2.display();
    ground.display();
    ball3.display();
    ball4.display();
    ball5.display();
    tanker1.display();
}