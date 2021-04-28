class Lock {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.2,
        //friction: 0.0,
        //isStatic:true
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("sprites/New Projectc (1).png");
      this.width = width;
      this.height = height;

      World.add(world, this.body);

    }
    display() {
          var angle = this.body.angle;
          var pos = this.body.position;
          fill("aquamarine");
          push();
          strokeWeight(2);
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();

      }
    }