function Ship() {

	//Sets default location of Ship
  	this.x = width/2; //x position of Middle of Ship
  	this.vx = 0;      //x speed of Ship

  	//Draws the shape of the ship (It's a triangle)
  	this.draw = function()
  	{
  		fill(127,255,0);
  		triangle(this.x, height-60, this.x-30, height-10, this.x+30, height-10);
  	}

  	//Sets Ships Velocity
  	this.setSpeed = function(speedx)
  	{
  		this.vx = speedx;
  	}


  	//Moves Ship Based on Velocity
  	this.move = function()
  	{
  		if((this.x+this.vx)>20 && (this.x+this.vx)<width-20)
  			this.x += this.vx;
  	}
  	
}