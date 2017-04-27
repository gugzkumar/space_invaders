function Fleet(level) {

    this.aliens = []; //Stores Aliens Which are part of the fleet 

    for (var i = 0; i<7;  i++) 
    {
       this.aliens[i] = new Alien(i*100, 100);
       this.aliens[i].setSpeedX(5 + (level-1)*2);
    }

    this.level = level;
  	this.vx = 5 + (level-1)*2;
    this.vx = 10;
    this.vy = 0;
    this.bouncecount = 0;



    //Draw fleet
  	this.draw = function()
  	{
      if(this.isDestroyed()) return;
      for (var i = 0; i<this.aliens.length;  i++) 
      {
        this.aliens[i].draw();
      }
  	}

  	this.setSpeedX = function(speedx)
  	{
  		this.vx = speedx;
      for (var i = 0; i<this.aliens.length;  i++) 
      {
        this.aliens[i].setSpeedX(speedx);
      }
  	}

    this.setSpeedY = function(speedy)
    {
      this.vy = speedy;
      for (var i = 0; i<this.aliens.length;  i++) 
      {
        this.aliens[i].setSpeedY(speedy);
      }
    }


  	this.move = function()
  	{
      if(this.isDestroyed()) return;

      //Reverses Direction if fleet is too far too the right

      if((this.aliens[this.aliens.length-1].x+this.vx)> width-20)
      {
        this.setSpeedX(-1*(5 + (this.level-1)*2)); //Speed changes with level
        this.bouncecount++;
      }

      //Reverses Direction if fleet is too far too the left
      if((this.aliens[0].x+this.vx)< 20)
      {
        this.setSpeedX(5 + (this.level-1)*2);//Speed changes with level
        this.bouncecount++;
      }
      
      
      //Moves fleet down if based on bounces off the walls. The Greater the level the lower the number of required bounces
      if((this.level > 5 && this.bouncecount ==1) || this.bouncecount>Math.abs(6-this.level))  
      {
        for (var i = 0; i<this.aliens.length;  i++) 
        {
          this.aliens[i].y+=(30);
          this.bouncecount = 0;
        }
      }
      
      //Moves each individual member of the fleet to the next step
      for (var i = 0; i<this.aliens.length;  i++) 
      {
        this.aliens[i].move();
      }

  	}

    //Return true if fleet is destroyed
    this.isDestroyed = function()
    {
        return this.aliens.length == 0;
    }
  	
    //Return true and destroys alien if given laser hits
    this.isHit = function(laser)
    {
        for (var i = this.aliens.length - 1; i >= 0; i--) 
        {
          a = this.aliens[i];
          if(Math.abs(laser.x-a.x) < a.r && Math.abs(laser.y-a.y) < a.r)
          {
            this.aliens.splice(i,1);
            return true;
          }
        }
        return false;
    }

    //Returns true if fleet has arrived at the ship
    this.hasArrived = function()
    {
        if(this.isDestroyed()) return false;
        
        return (this.aliens[0].y + this.aliens[0].r > height - 60);
    }
}
