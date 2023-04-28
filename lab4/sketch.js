let arrow;

function setup(){
    createCanvas(500, 500);
    angleMode(DEGREES);

    arrow = new ArrowUpdated(0, 0, 0, color(255, 0, 0), 4, 60);
}

function draw(){
    background(200);
        arrow.drawArrow();
        arrow.moveArrow();
        arrow.rotateToMovement();
        arrow.reset();
}