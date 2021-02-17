class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.bodies = Bodies.rectangle(x,y,width,height,options);
        this.width = width; 
        this.height = height; 
        this.image = loadImage("dustbingreen.png")
        World.add(world,this.bodies);
    }
    display(){
        var pos = this.bodies.position; 
        //rectMode(CENTER);
        //fill("DodgerBlue")
        //rect(pos.x, pos.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}