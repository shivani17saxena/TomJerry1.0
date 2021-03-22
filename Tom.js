class Tom{
    constructor(x, y, width, height) {
        
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/cat1.png");
         this.img =this.image;
        World.add(world, this.body);
      }
      display(){
          //for changing the size
        this.img = scale(1.5);
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}