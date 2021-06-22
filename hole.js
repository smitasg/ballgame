class Hole{
    constructor(x, y, radius){
        var options = {
            isStatic :true,
            restitution : 0.2,
            friction : 0.4,
            density : 1

        }
        
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world,this.body);
        this.width = radius;
        this.height = radius;

        this.radius = radius;
    }

    display(){
       
        
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
        
    }
}