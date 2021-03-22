const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tom,backgroundImg;
var ground;

function preload(){
  backgroundImg = loadImage("images/garden.png");
}

function setup() {
  
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  //tom new object of TOM class created
  tom = new Tom(20,20,50,50);

  //ground obj of ground class created
  ground = new Ground(600,270,1200,20);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)

  tom.display();
  ground.display();
  //drawSprites();
}