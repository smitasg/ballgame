const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var b1, b2, b3, b4;
var h1, h2, h3, h4, h5, h6, h7, h8;
var stick;
var P1ball1, P1ball2, P1ball3, P1ball4, P1ball5, P1ball6, P1ball7;
var P2ball1, P2ball2, P2ball3, P2ball4, P2ball5, P2ball6, P2ball7;
var CommonLastBall;
var tempBall;
var mainball;
var no = 1;
var balls = [];
var goal = 0;
function setup() {
  createCanvas(900,1100);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  b1 = new Border(17, 550, 30, 1100);
  b2 = new Border(450, 17, 900, 30);
  b3 = new Border(883, 550, 30, 1100);
  b4 = new Border(450, 1083, 900, 30);

  h1 = new Hole(50, 50, 40);
  h2 = new Hole(50, 1047, 40);
  h3 = new Hole(450, 50, 40);
  h4 = new Hole(450, 1047, 40);
  h5 = new Hole(847, 50, 40);
  h6 = new Hole(847, 1047, 40);
  h7 = new Hole(50, 550, 40);
  h8 = new Hole(847, 550, 40);

  P1ball1 = new Player1Ball(450, 520, 50);
  P1ball2 = new Player1Ball(525, 400, 50);
  P1ball3 = new Player1Ball(475, 480, 50);
  P1ball4 = new Player1Ball(450, 360, 50);
  P1ball5 = new Player1Ball(400, 440, 50);
  P1ball6 = new Player1Ball(500, 360, 50);
  P1ball7 = new Player1Ball(420, 400, 50);

  P2ball1 = new Player2Ball(475, 400, 50);
  P2ball2 = new Player2Ball(425, 480, 50);
  P2ball3 = new Player2Ball(370, 400, 50);
  P2ball4 = new Player2Ball(350, 360, 50);
  P2ball5 = new Player2Ball(400, 360, 50);
  P2ball6 = new Player2Ball(500, 440, 50);
  P2ball7 = new Player2Ball(550, 360, 50);
 

  CommonLastBall = new LastBall(450, 440, 50);

  mainball = new mainBall(450, 700, 50);
  
 // stick = new Stick(450, 700, 10, 150, PI);


  tempBall = new Player2Ball(300, 200, 50);




  // stick = new Stick();
 /*
  for (var q = 1; q<=5; q++){
    for (var w = 550; w<=650; w = w+20){
     for (var x = 400; x<=500; x = x+20){   
   
      balls.push(new Ball(x, w, 20))
    no+=1;
    if (no>=5){
      return;
    }
    }
  } 
}
*/
  
}

function draw() {
  background(255,255,255);

  Engine.update(engine);




  
  b1.display();
  b2.display();
  b3.display();
  b4.display();

  h1.display();
  h2.display();
  h3.display();
  h4.display();
  h5.display();
  h6.display();
  h7.display();
  h8.display();

  P1ball1.display();
  P1ball2.display();
  P1ball3.display();
  P1ball4.display();
  P1ball5.display();
  P1ball6.display();
  P1ball7.display();

  /*
  P2ball1.display();
  P2ball2.display();
  P2ball3.display();
  P2ball4.display();
  P2ball5.display();
  P2ball6.display();
  P2ball7.display();
*/
  CommonLastBall.display();
  
  mainball.display();

  //stick.display();

  tempBall.display();
  
  detectCollision(h1, tempBall);

  
  




  for(i = 0; i<balls.length; i++){
    balls[i].display()
  }


  //drawSprites();
}


function detectCollision(hole, ball){
  console.log(hole.body.position.x);
  if(hole.body.position.x - ball.body.position.x < hole.radius/2 + ball.radius/2 &&  
   ball.body.position.x  - hole.body.position.x < hole.radius/2 + ball.radius/2 &&
   hole.body.position.y - ball.body.position.y < hole.radius/2 + ball.radius/2 &&  
   ball.body.position.y  - hole.body.position.y < hole.radius/2 + ball.radius/2)
  {
    text ("Goal",200,200);
    // Matter.Body.setStatic(hole.body, false);
    goal = 1;
  }
}