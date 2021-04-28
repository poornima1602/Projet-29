const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var fair,girl,gImg;
var t1,t2,tableImg;
var cup,cupImg;

function preload(){
    //loading images
	fair=loadImage('sprites/t.jpg');
	gImg=loadImage('sprites/girl (1).png');
	tableImg=loadImage('sprites/table.png');
	//cupImg=loadImage('sprites/cup.png');
	
}


function setup() {
	
	var canvas = createCanvas(1350, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	 //creating sprites 
    girl=createSprite(150,450);
	girl.addImage(gImg);
	girl.scale=0.5;

	t1=createSprite(700,625);
	t1.addImage(tableImg);
	t1.scale=0.26;

	t2=createSprite(1150,315);
	t2.addImage(tableImg);
	t2.scale=0.26;

	ball = new Ball(200,300);
	launcher1= new launcher(ball.body,{x:230,y:330});	
	base1=new Ground(700,580,250,20);
    base2=new Ground(1150,270,250,20);

	block1=new Block(600,550,40,50);
	block2=new Block(635,550,40,50);
	block3=new Block(675,550,40,50);
	block4=new Block(715,550,40,50);
	block5=new Block(760,550,40,50);
	block6=new Block(800,550,40,50);
	block7=new Block(680,550,40,50);

	block8=new Plock(630,500,40,50);
	block9=new Plock(655,500,40,50);
	block10=new Plock(695,500,40,50);
	block11=new Plock(720,500,40,50);
	block12=new Plock(746,500,40,50);

	b1=new Olock(653,450,40,50);
	b2=new Olock(693,450,40,50);
	b3=new Olock(727,450,40,50);

	b4=new Rlock(690,400,40,50);

	b5=new PPlock(1030,200,40,50);
	b6=new PPlock(1070,200,40,50);
	b7=new PPlock(1110,200,40,50);
	b8=new PPlock(1150,200,40,50);
	b9=new PPlock(1190,200,40,50);
	b10=new PPlock(1230,200,40,50);
	b11=new PPlock(1270,200,40,50)

	y1=new Ylock(1075,150,40,50);
	y2=new Ylock(1115,150,40,50);
	y3=new Ylock(1156,150,40,50);
	y4=new Ylock(1200,150,40,50);
	y5=new Ylock(1242,150,40,50);

	g1=new Glock(1114,100,40,50);
	g2=new Glock(1160,100,40,50);
	g3=new Glock(1196,100,40,50);

	g4=new Lock(1147,50,40,50);
	
	 Engine.run(engine);
  
}


function draw() {
	background(fair);
	
  Engine.update(engine);

    //displaying them
	ball.display();

	launcher1.display();

    base1.display();
	base2.display();

	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();

	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	
	b1.display();
	b2.display();
	b3.display();

	b4.display();

	b5.display();
	b6.display();
	b8.display();
	b7.display();
	b9.display();
	b10.display();
	b11.display();

	y1.display();
	y2.display();
	y3.display();
    y4.display();
	y5.display();

	g1.display();
	g2.display();
	g3.display();
	g4.display();

    drawSprites();

}

//adding functions to make a ball show movement 
function mouseDragged(){ 
	   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  launcher1.fly();
}