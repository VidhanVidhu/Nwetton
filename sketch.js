const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,600,1200,20);
   
  
    ball1 = new Ball(200,200,80,80)
    ball2 = new Ball(250,200,80,80)
    ball3 = new Ball(300,200,80,80)
    ball4 = new Ball(350,200,80,80)
    ball5 = new Ball(400,200,80,80)

    rope = new Rope(ball1.body,{x:450,y:50})
    rope1 = new Rope(ball2.body,{x:530,y:50})
    rope2 = new Rope(ball3.body,{x:610,y:50})
    rope3 = new Rope(ball4.body,{x:690,y:50})
    rope4 = new Rope(ball5.body,{x:770,y:50})
}

function draw(){
    background("purple")

    Engine.update(engine);
    
    ground.display();

  

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();

    rope.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();

    
}

function mouseDragged(){
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    
}

