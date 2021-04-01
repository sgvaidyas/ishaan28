class   Rope{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.004,
            length: 30
        }
        this.pointB = point;
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    display(){
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
         }
    }

    attach(body){
		this.string.bodyA=body;
	}
    fly(){
        this.string.bodyA = null;
    }

}