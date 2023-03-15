let arrow = []

function setup(){
    createCanvas(500, 500);
    angleMode(DEGREES);
    arrow.push(new Arrow(250, 250, 0));
    arrow.push(new Arrow(100, 100, 0));
    arrow.push(new Arrow(100, 200, 0));
    arrow.push(new Arrow(100, 300, 0));
    arrow.push(new Arrow(100, 400, 0));
    
}

function draw(){
    background(200);
    arrow[0].render();
    arrow[1].render();
    arrow[2].render();
    arrow[3].render();
    arrow[4].render();
}