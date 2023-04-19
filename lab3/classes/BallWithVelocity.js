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

    let speed = 5;

	// calculating the x and y velocities
        this.x += speed * Math.cos(radians);
        this.y += speed * Math.sin(radians);
    }

    render(){
        this.drawBall();
        this.moveBall();
        this.reset();
    }

    // resets position of ball
    reset(){
        if(this.x > 500 || this.y > 500){
            this.x += this.x*-1
            this.y += this.y*-1
        }
    }
}