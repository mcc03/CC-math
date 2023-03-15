//Arrow class
class Arrow {
	constructor(x, y, rotation) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;
		//rotation of arrow
		this.rotation = rotation;
	}
	//function to draw the arrow
	drawArrow() {
		push();
		//translate from the top left corner to x and y of object
		translate(this.x, this.y);
		//rotate by rotation value of object
		rotate(this.rotation);
		line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25);
		pop();
		
	}

    rotateToMouse(){
        // defining dx and dy
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;

        // atan2 inverse of tan takes two arguments
        let angle = atan2(dy, dx)
        console.log("mouseX:", dx,"mouseY:", dy)

        // rotation now equal to the trig calculation of dy, dx
        this.rotation = angle; 

        fill(255);
        ellipse(mouseX, mouseY, 20)
    }
	
    render(){
        this.drawArrow();
        this.rotateToMouse();
    }
}