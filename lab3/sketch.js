let ball = []


function setup(){

    // Q2 code
    // angle the ball will travel at
	let angle = 45;

	// converting angle to radians to use for trig
	let radians = angle * Math.PI / 180;

	// speed
	let speed = 5;

	// calculating the x and y velocities
	let xv = speed * Math.cos(radians);
	let yv = speed * Math.sin(radians);

    createCanvas(500, 500);
    angleMode(DEGREES);

    ball.push(new Ball(2, 3, xv, yv, color(255,100,0)));
}

function draw(){
    background(200);
        ball[0].render()
}