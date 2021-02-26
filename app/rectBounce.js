let rectX = 200;
let rectY = 550;
let rectW = 300;
let rectH = 50;
let circleX = 400;
let circleY = 300;
let xSpeed = -5;
let ySpeed = -5;

function setup() {
    createCanvas(800, 600)
    background(200)
}


function collideRect() {

    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {

              return true;

        }

   }

   return false;

}

function draw() {
    clear()
    fill(100, 50, 200)
    circleX = circleX + xSpeed;
    circleY = circleY + ySpeed;
    circle(circleX, circleY, 30)

    if (circleX >= 785 || circleX <= 15) {
        xSpeed = -xSpeed;
    } 

    if (circleY >= 585 || circleY <= 15) {
        ySpeed = -ySpeed;
    }
    fill(200, 100, 200)
    rect(rectX, rectY, rectW, rectH);


    if(collideRect()) {
        ySpeed = -ySpeed;
    }

    console.log(collideRect())
}

