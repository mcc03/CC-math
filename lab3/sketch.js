let ball = []


function setup(){
    createCanvas(500, 500);
    angleMode(DEGREES);

    ball.push(new Ball(2, 3, 2, 3, color(255,100,0)));
}

function draw(){
    background(200);
        ball[0].render()
}