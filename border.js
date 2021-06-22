class Border{
    constructor(x, y, width, height){
        var options = {
            isStatic :true,
            restitution : 0.6,
            friction : 0.6,
            density : 1

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
//        Matter.Body.setAngle( this.body, angle);
          World.add(world,this.body);
        this.width = width;
        this.height = height;



    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

    }
}