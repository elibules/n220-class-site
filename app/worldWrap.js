var x=0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    clear()
    fill(255, 0, 0)
    circle(x, 300, 30);
    x=x+5;
    if (x > 800) {
        x=0
    }
}