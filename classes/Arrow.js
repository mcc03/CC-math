//Arrow class
class Arrow {
	constructor(x, y, rotation, color) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;
		//rotation of arrow
		this.rotation = rotation;
		this.color = color;
	}
	//function to draw the arrow
	drawArrow() {
		push();
		//translate from the top left corner to x and y of object
		translate(this.x, this.y);
		//rotate by rotation value of object
		rotate(this.rotation);
		beginShape();
		fill(this.color);
		vertex(0, 0)
		vertex(50, 0)
		vertex(50, -20)
		vertex(70, 10)
		vertex(50, 40)
		vertex(50, 20)
		vertex(0, 20)
		vertex(0, 0)


		// line(-50, -25, 0, -25);
		// line(0, -25, 0, -50);
		// line(0, -50, 50, 0);
		// line(50, 0, 0, 50);
		// line(0, 50, 0, 25);
		// line(0, 25, -50, 25);
		// line(-50, 25, -50, -25);
		endShape();
		pop();
		
	}

    rotateToMouse(){
        // defining dx and dy
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;

        // atan2 inverse of tan takes two arguments
        let angle = atan2(dy, dx)
        //console.log("mouseX:", dx,"mouseY:", dy)

        // rotation now equal to the trig calculation of dy, dx
        this.rotation = angle; 

        fill(255);
        ellipse(mouseX, mouseY, 20)

		fill(0);
		text("dx: "+ dx, 100, 250)
		text("dy: "+ dy, 100, 270)
    }
	
    render(){
        this.drawArrow();
        this.rotateToMouse();
		// this.rotateToCentre();
    }

	rotateToCentre(){
		let centerPoint = 250;

		        // defining dx and dy
				let dx = mouseX - centerPoint;
				let dy = mouseY - centerPoint;
		
				let angle = atan2(-dy, -dx)

				this.rotation = angle;

				text("dx: "+ dx, 100, 250)
				text("dy: "+ dy, 100, 270)
		fill(0);
		ellipse(centerPoint,centerPoint, 20)
	}
}