console.log("lab3")

function setup(){
    createCanvas(500, 500);

    let balls = [];

    class Ball{
        constructor(x, y, xv, yv, color) {
            this.x = 2
            this.y = 3
            this.xv = 2
            this.xy = 3;
            this.color = color(255,100,0);
        }

        drawBall(){
            fill(this.color);
            ellipse(this.x, this.y, 20)
        }

        moveBall(){
            this.x = this.x + this.xv;
            this.y = this.y + this.yv
        }

        render(){
            this.drawBall();
            this.moveBall();
        }
    }
    
}

function draw(){
    background(200);

    balls.render
}