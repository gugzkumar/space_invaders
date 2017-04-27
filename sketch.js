
var ship;
var fleet;
var lasers = [];


var gamestate;//gamestate = 0 means Game is still playing, gamestate = 1 means Game Over
var score; //Score represents number of Aliens killed
var level; //Level represents difficulty of current Fleet


//Sets up the canvas and initial game settings
function setup() {

  gamestate = 0;
  score = 0;
  level = 1;

	createCanvas(1000, 700);
	ship = new Ship();
	fleet = new Fleet(level);
  lasers = [];
}

//Draw is called continuously and progresses the canvas to the next frame in the graphics
function draw()
{
	background(30);

  //Sets Up Display for score and level
  fill(127,255,0);
  textSize(50);
  textAlign(CENTER);
  text("Score: " + score, 3*width/4, 50);

  fill(127,255,0);
  textSize(50);
  textAlign(CENTER);
  text("Level: " + level, width/4, 50);

  //Draw and move the ship
	ship.draw();
	ship.move();

  //If game is over print game over and return from draw function
  if(gamestate == 1)
  {
    text("Good Game Press RETURN to Try Again", width/2, height/2);
    return;
  }
  
  //Draw and Move fleet
	fleet.draw();
	fleet.move();


  //Draw lasers and remove laser if of screen or hits an alien
  for (var i = lasers.length - 1; i >= 0; i--) 
  {
    lasers[i].move();
    lasers[i].draw();
    if(lasers[i].y<0)
    {
      lasers.splice(i,1);
    }
    else if(fleet.isHit(lasers[i]))//Is hit also destroys alien
    {
      lasers.splice(i,1);
      score++;
    }
  }

  //If Fleet is destroyed go on to the next level
  if(fleet.isDestroyed())
  {
    level = level+1;
    fleet = new Fleet(level);
  }

  //If Fleet has arrived change state of the game to Game Over
  if(fleet.hasArrived())
  {
      text("Good Game Press RETURN to Try Again", width/2, height/2);
      gamestate = 1;
  }
}

//Stops ship if the left or right arrow key is no longer held down
function keyReleased() {
  if (keyCode === LEFT_ARROW) 
  {
    ship.setSpeed(0);
    if (keyIsDown(RIGHT_ARROW))
    	ship.setSpeed(10);
  } 
  else if (keyCode === RIGHT_ARROW) 
  {
    ship.setSpeed(0);
    if (keyIsDown(LEFT_ARROW))
    	ship.setSpeed(-10);
  }
}

//Moves the ship if the left or right arrow key is held down
function keyPressed() {  
  if (keyCode === RETURN && gamestate == 1)
  {
    setup();
    return;
  }

  if (key === ' ')
    lasers.push(new Laser(ship.x, 0));
  if (keyCode === LEFT_ARROW) {
    ship.setSpeed(-10);
  } else if (keyCode === RIGHT_ARROW) {
    ship.setSpeed(10);
  }

}
