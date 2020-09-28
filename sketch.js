
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundCover;
var container1, container2, container3;
var ball;

function preload(){
	
}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(750,680,1500,75);
	//original height was 450
	container1 = new Container(1200,630,200,20);
	container2 = new Container(1100,565,20,150);
	container3 = new Container(1300,565,20,150);

	ball = new Ball(100,600,30);

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  container1.display();
  container2.display();
  container3.display();

  ball.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:225,y:-200});
	}
}



