class dot{
    depth = 20
    constructor(x, y, z, vx, vy, vz, mass, fric) {
        this.pos = createVector(x, y, 0);
        this.vel = createVector(x, y, 0);
        this.mass = mass;
        this.fric = fric;
    }

    randomize(){
        this.pos = createVector(Math.random() * width, Math.random() * height, Math.random() * this.depth);
        this.vel = createVector(Math.random()-.5, Math.random()-.5, Math.random()-.5);
        this.mass = Math.random();
        this.fric = Math.random()**4;
    }

    move(acc){
        this.vel.add(acc.div(this.mass));
        this.vel.setMag(this.vel.mag() * this.fric);
        this.pos.add(this.vel);

        this.pos.x = this.pos.x % width;
        this.pos.y = this.pos.y % height;
        this.pos.z = this.pos.z % this.depth;
    }

    draw(){
        ellipse(this.pos.x, this.pos.y, this.pos.z, this.pos.z);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    points = []
    num_points = 100;
    for(i = 0; i < num_points; i++){
        points.push(new dot(0, 0, 0, 0, 0));
    }
    for(i = 0; i < points.length; i++){
        points[i].randomize();
      }
    console.log(points);
}

function draw() {
  background(51);
  strokeWeight(0);
  for(i = 0; i < points.length; i++){
    points[i].draw();
    points[i].move(createVector(0.1, 0, 0));
  }
}