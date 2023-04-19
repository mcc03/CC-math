let ball = []

function setup(){

    createCanvas(500, 500);
    angleMode(DEGREES);

    ball.push(new Ball(0, 0, 2, 3, color(255,100,0)));

	// constructor(x, y, radius, speed, angle, color)
	ball.push(new BallWithVelocity(100, 50, 30, 2, 45, color(255, 0, 120)));
	ball.push(new BallWithVelocity(400, 0, 30, 3, 45, color(255, 0, 120)));
	ball.push(new BallWithVelocity(300, 150, 30, -5, -45, color(255, 0, 120)));
	ball.push(new BallWithVelocity(250, 200, 30, -2, 20, color(255, 0, 120)));
}

function draw(){
    background(200);
        ball[0].render()
		ball[1].render()
		ball[2].render()
		ball[3].render()
		ball[4].render()
}