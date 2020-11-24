class ball {
    constructor(x,y,r){
        var option = {
            "restitution": 0.3,
            "friction": 0,
            "density": 1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,option);    
        World.add(world,this.body);
    }
    display(){
        
        fill("lightgreen");
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }

}