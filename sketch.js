const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof0;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	roof0 = new roof(width/2, 100, 500, 50);

	ball1 = new ball(400,400,100);
	ball2 = new ball(500,400,100);
	ball3 = new ball(600,400,100);
	ball4 = new ball(700,400,100);
	ball5 = new ball(800,400,100);

	rope1 = new Rope(ball1.body, roof0.body, 0, 0);
	rope2 = new Rope(ball2.body, roof0.body, 0, 0);
	rope3 = new Rope(ball3.body, roof0.body, 0, 0);
	rope4 = new Rope(ball4.body, roof0.body, 0, 0);
	rope5 = new Rope(ball5.body, roof0.body, 0, 0);


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  roof0.display();
  rope1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  console.log(ball1.x);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === 38){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-500, y:-500})

	}
}



