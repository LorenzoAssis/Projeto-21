
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var barrier1,barrier2;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution:0.3,
		friction:0,
		density:1.2
		
	}
	
	fill("white");
	ball = Bodies.circle(100,665,30,ball_options);
	World.add(world,ball);

	groundObj = new Ground(800,695,1600,10);
	barrier1 = new Ground(1200,645,10,90);
	barrier2 = new Ground(1000,645,10,90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 30,30);
  groundObj.display();
  barrier1.display();
  barrier2.display();
}


function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(ball, ball.position,{x:200,y:-200})
	}
}


