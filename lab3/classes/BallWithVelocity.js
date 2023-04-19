class BallWithVelocity {
	constructor(x, y, radius, speed, angle, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.speed = speed;
		this.angle = angle;
	}

	drawBall() {
        // random color
		fill(this.color);
		ellipse(this.x, this.y, this.radius);
	}

	moveBall() {
		// converting angle to radians to use for trig
		let radians = (this.angle * Math.PI) / 180;

		// calculating the x and y velocities
		this.x += this.speed * Math.cos(radians);
		this.y += this.speed * Math.sin(radians);
	}

	render() {
		this.drawBall();
		this.moveBall();
		//this.reset();
		this.bounce();
	}

	// resets position of ball
	reset() {
		if (this.x > 500 || this.y > 500) {
			this.x += this.x * -1;
			this.y += this.y * -1;
		}
	}

	bounce() {
		let width = 500;
		let height = 500;

		// checking if the ball has hit a width border
		if (this.x + this.radius / 2 > width || this.x - this.radius / 2 < 0) {
			// reverse the angle of the ball
			this.angle = 180 - this.angle;
		}

		// checking if the ball has hit a height border
		if (this.y + this.radius / 2 > height || this.y - this.radius / 2 < 0) {
			// reverse the angle of the ball
			this.angle = this.angle * -1;
		}
	}

	intersect(ball) {

        // x differance
		let dx = this.x - ball.x;
        // y differance
		let dy = this.y - ball.y;

        // calculating distance
		let distance = Math.sqrt(dx * dx + dy * dy);

        // if the distance between two balls is less than both of their radiuses, returns TRUE, if not, FALSE
		if (distance < this.radius + ball.radius) {
			return true;
		} else {
			return false;
		}
	}
}
