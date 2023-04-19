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
        this.reset();
    }

    // resets position of ball
    reset(){
        if(this.x > 500 || this.y > 500){
            this.x += this.x*-1
            this.y += this.y*-1
        }
    }
}
