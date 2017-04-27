function Laser(x, y) {

	//Sets default location of Ship
  	this.x = x; //x position of Middle of Ship
  	this.vy = -15;      //x speed of Ship
    this.r = 10
    this.y = height-60;

  	//Draws the shape of the ship (It's a triangle)
  	this.draw = function()
  	{
  		fill(244, 66, 75);
      ellipse(this.x, this.y, this.r*2, this.r*2);
  	}

  	//Sets Ships Velocity
  	this.setSpeed = function(speedy)
  	{
  		this.vy = speedy;
  	}


  	//Moves Ship Based on Velocity
  	this.move = function()
  	{
  		//if((this.x+this.vx)>20 && (this.x+this.vx)<width-20)
  			this.y += this.vy;
  	}
  	
}