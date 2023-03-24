let arrow = []

console.log("Lab2")

function setup(){
    createCanvas(500, 500);
    angleMode(DEGREES);
 
    for(let x = 0; x < 10; x++){
        let randNum1 =  Math.floor(Math.random() * 500) + 1;
        let randNum2 =  Math.floor(Math.random() * 500) + 1;
        arrow.push(new Arrow(randNum1, randNum2, 0, color(255, 0, 0)));
        //console.log(randNum);
    }
    
}

function draw(){
    background(200);
    for(let x = 0; x <1; x++){
        arrow[x].render()
    }

}