var myCircle = {
    cx: 200,
    cy: 200,
    cr: 40,
    color: [70, 50, 170]
}

function setup() {
    createCanvas(400, 400);
    noStroke();
}

function draw() {
    clear();
    fill(myCircle.color);
    myCircle.cx += 1;
    circle(myCircle.cx, myCircle.cy, myCircle.cr)
    if(myCircle.cx > 400) {
        myCircle.cx = 0
    }
}