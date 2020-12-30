const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ground;
var ball1;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Rectangle(200,345,10,70);
    box2= new Rectangle(300,345,10,70);
    box3= new Dustbin(250,360,90,90);
    ball1=new Ball(50,300,70);
    ground=new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);

   keyPressed();

    box1.display();
    box2.display();
    box3.display();
    ball1.display();
   ground.display();
}

function keyPressed(){
    if(keyCode===UP_ARROW)  {
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:85})
    }
 }