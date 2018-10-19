function setup() {
  // put setup code here
  createCanvas(640, 360);
  w = new Walker();
  w2 = new Walker();
}

function draw() {
  background(51);
  w.update();
  w.display();
}

function Walker(){

	this.pos = createVector(width/2, height/2);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0.1);
	//createVector replaced independent this.x and this.y vars

	this.update = function(){
		//vector math (p5.vector object)
		//vectors added going end to end, then go from start to finish
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	this.display = function(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, 48, 48);
	}
}