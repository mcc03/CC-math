//Arrow class
class ArrowUpdated {
	constructor(x, y, rotation, c, speed, angle) {
		this.x = x;
		this.y = y;
		//rotation of arrow
		this.rotation = rotation;
		this.c = c;
		// convert to angle using radians
		this.xv = speed * Math.cos(radians(angle));
		this.yv = speed * Math.sin(radians(angle));
		
	}
	//function to draw the arrow using vertex instead of line
	drawArrow() {
		push();
		translate(this.x, this.y);
		//rotate by rotation value of object
		rotate(this.rotation);

		beginShape();
		fill(this.c);
		vertex(0, 0)
		vertex(50, 0)
		vertex(50, -20)
		vertex(70, 10)
		vertex(50, 40)
		vertex(50, 20)
		vertex(0, 20)
		vertex(0, 0)
		endShape();
		pop();
	}

	//rotate arrow in direction of movement
	rotateToMovement() {
		this.rotation = atan2(this.yv, this.xv);
	}
	//move arrow - same as for Ball class
	moveArrow(){
		this.x = this.x + this.xv;
		this.y = this.y + this.yv;
	}

	// resets arrow
	reset() {
		if (this.x > width || this.y > height) {
			this.x += this.x * -1;
			this.y += this.y * -1;
		}
	}

}
