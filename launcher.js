class Launcher {
    constructor (body1,point2){
        this.bodyA=body1
        this.pointB=point2
        var options={length:200,
        stiffness:0.3,bodyA:this.bodyA,pointB:this.pointB}
        this.sling = Matter .Constraint.create(options)
        World.add(world,this.sling)
    }
    display() {
        if (this.sling.bodyA){

        
        strokeWeight (4)
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
    }

    fly(){
        this.sling.bodyA=null
    }
}
