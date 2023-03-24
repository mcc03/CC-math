//Arrow class
class Ball {
	constructor(x, y, xv, yv, color) {
		//x and y properties of ball
		this.x = x;
		this.y = y;
        this.xv = xv;
        this.yv = yv;

		this.color = color;
	}
	//draw the ball
	drawBall() {
        ellipse(this.x,this.y, 20)
	}

    moveBall(){
        this.x = this.x + this.xv
        this.y = this.y + this.yv
    }

    render(){
        this.drawBall();
        this.moveBall();
    }
}