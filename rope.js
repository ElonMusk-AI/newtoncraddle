class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            "bodyA": bodyA,
            "bodyB": bodyB,
            "pointB" : {x:this.offsetX, y:this.offsetY},
            "stiffness": 0.001,
            "length": 200
        }
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.Rope.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}