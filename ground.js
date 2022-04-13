class Ground{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;

        
        this.body = Bodies.rectangle(this.x, this.y,this.width, this.height,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;   
        push()
        translate(pos.x, pos.y)
        rectMode(CENTER);
        fill("yellow");
        rect(0, 0, this.width, this.height);
        pop()
    }
}
