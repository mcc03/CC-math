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
		text("dx: "+ dx, 100, 70)
		text("dy: "+ dy, 100, 90)
    }
	
    render(){
        this.drawArrow();
        this.rotateToMouse();
		// this.rotateToCentre();
		this.calcDistance();
		this.displayDistance();
    }

	rotateToCentre(){
		let centerPoint = 250;

		        // defining dx and dy
				let dx = mouseX - centerPoint;
				let dy = mouseY - centerPoint;
		
				let angle = atan2(-dy, -dx)

				this.rotation = angle;

				text("dx: "+ dx, 100, 70)
				text("dy: "+ dy, 100, 90)
		fill(0);
		ellipse(centerPoint,centerPoint, 20)
	}

	// calculate the distance from the arrow to the cursor
	calcDistance(mouseX, mouseY){
		let dx = this.x - mouseX;
		let dy = this.y - mouseY;

		fill(0)
		// formula to calc distance
		return Math.sqrt(dx*dx + dy*dy);

	}

	// display the distance
	displayDistance(){
		let distance = this.calcDistance(mouseX, mouseY);
		fill(0);
		text("Distance: " + distance.toFixed(0), 100, 50);
	}
}