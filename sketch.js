const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper, ground;
var dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(1400, 250);
	engine = Engine.create();
	world = engine.world;
	paper = new Paper(200, 150, 20);
	dustbin1 = new Dustbin(1180, 240, 150, 20);
	dustbin2 = new Dustbin(1100, 200, 20, 100);
	dustbin3 = new Dustbin(1260, 200, 20, 100);
	ground = new Ground();
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);
	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();
	drawSprites();

}

function keyPressed() {

	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 85, y: -85});
	}

}