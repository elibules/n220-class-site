let x = 400;
let y = 300;
let xspeed = -5;
let yspeed = -5;

function setup() {
    createCanvas(800, 600)
}

function draw() {
    clear()
    fill(0, 255, 0)
    circle(x, y, 30)
    x = x + xspeed;
    y = y + yspeed;
    if (x >= 785) {
        xspeed = -xspeed;
    } 
    if (x <= 15) {
        xspeed = -xspeed;
    }
    if (y >= 585) {
        yspeed = -yspeed;
    }
    if (y <= 15) {
        yspeed = -yspeed;
    }
    console.log(x, y)
}

