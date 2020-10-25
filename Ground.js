class Ground {
    constructor(x, y, width, height) {
        var options = {isStatic:true};
        this.body = Bodies.rectangle(700, 250, 1400, 10, options);
        this.width = 1400;
        this.height = 10;
        World.add(world, this.body);
    }
   
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}