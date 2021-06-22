class Stick{
    constructor(x, y, width, height, angle){
        var options = {
            isStatic :true,
            restitution : 0.2,
            friction : 0.6,
            density : 1

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        Matter.Body.setAngle( this.body, angle);
          World.add(world,this.body);
        this.width = width;
        this.height = height;

        //this.image = loadImage("sprites/spr_stick.png");



    }

    display(){
        //this.body.position.x = mainball.
        //this.body.position.y = mouseY;
        translate(this.body.position.x, this.body.position.y);
        mainball.body.angle =mainball.body.angle +10;
        var ang = mainball.body.angle;
        rotate(ang);
        //rectMode(CENTER);
        console.log(ang);
        
        rect( 0, 0, this.width, this.height);

        
    }
}