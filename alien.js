function Alien(x,y) {

  	this.x = x; 
    this.y = y;
    this.r = 30;
  	this.vx = 0;
    this.vy = 0;

    //Draw shape of Alien which is a circle
  	this.draw = function()
  	{
  		fill(255);
  		ellipse(this.x, this.y, this.r*2, this.r*2);
  	}

  	this.setSpeedX = function(speedx)
  	{
  		this.vx = speedx;
  	}

    this.setSpeedY = function(speedy)
    {
      this.vy = speedy;
    }

  	this.move = function()
  	{
  		this.x += this.vx;
  	}
  	
}
