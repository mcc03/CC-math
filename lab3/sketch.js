let ball = []

function setup(){

    createCanvas(500, 500);
    angleMode(DEGREES);

    ball.push(new Ball(0, 0, 2, 3, color(255,100,0)));

	ball.push(new BallWithVelocity(0, 50, 30, 5, 45, color(255,0, 120)));
}

function draw(){
    background(200);
        ball[0].render()
		ball[1].render()
}