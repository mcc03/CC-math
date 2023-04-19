let balls = [];

function setup() {
	let height = 500;
	let width = 500;
	createCanvas(height, width);
	angleMode(DEGREES);

	//balls.push(new Ball(0, 0, 2, 3, color(255, 100, 0)));

	// constructor(x, y, radius, speed, angle, color)
	//balls.push(new BallWithVelocity(100, 100, 30, 5, 45, color(255, 0, 120)));
	//balls.push(new BallWithVelocity(200, 250, 30, 3, 27, color(255, 0, 120)));
	let numBalls = 10;

	for (let x = 0; x < numBalls; x++) {
		// random x and y positions
		let xPos = random(width);
		let yPos = random(height);

		let radius = 10;
		
		// random color
		let randomColor = color(random(255), random(255), random(255));

		// random speed and angle values
		let speed = random(3, 7);
		let angle = random(60);

		// pushing new balls into the balls array
		balls.push(
			new BallWithVelocity(xPos, yPos, radius, speed, angle, randomColor)
		);
	}
}

function draw() {
	background(0);
	for (let x = 0; x < balls.length; x++) {
		balls[x].render();

		// checks if balls[x] in the array is an instance of the BallWithVelocity class
		if (balls[x] instanceof BallWithVelocity) {
			for (let i = 0; i < balls.length; i++) {
				// skips checking itself and both balls are an instance of BallWithVelocity
				if (x !== i && balls[i] instanceof BallWithVelocity) {
					// calls the intersect  if balls are intersecting function and prints "collision"
					if (balls[x].intersect(balls[i])) {
						console.log("collision!");
					}
				}
			}
		}
	}
}
