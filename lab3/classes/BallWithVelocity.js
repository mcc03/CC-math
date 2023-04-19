//Arrow class
class BallWithVelocity {
	constructor(x, y, radius, speed, angle, color) {
		//properties
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.speed = speed;
		this.angle = angle;
	}

	drawBall() {
        ellipse(this.x,this.y, this.radius)
	}

    moveBall(){

	// converting angle to radians to use for trig
	let radians = this.angle * Math.PI / 180;

	// calculating the x and y velocities
    this.x += this.speed * Math.cos(radians);
    this.y += this.speed * Math.sin(radians);

    }

    render(){
        this.drawBall();
        this.moveBall();
        //this.reset();
        this.bounce();
    }

    // resets position of ball
    reset(){
        if(this.x > 500 || this.y > 500){
            this.x += this.x*-1
            this.y += this.y*-1
        }
    }

    bounce(){
        if (this.x + this.radius/2 > 500 || this.x < 0) {
            this.speed = -this.speed;
        }

        if (this.y + this.radius/2 > 500 || this.y < 0) {
            this.angle = -this.angle;
        }
    }
}