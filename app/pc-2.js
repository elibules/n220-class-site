// Click and hold the mouse to start making some art

var circleSize = 5

function setup() {
    createCanvas(600, 600)
}

function randomColor(color = ['#f20c0c', '#f5890b', '#f9fc0d', '#0d834f', '#4b4bfb', '#a80cc8']) {
    // makes the rc variable a whole number between 0 and 5
    var rc = Math.floor(Math.random() * color.length)
    // draws a circle constantly increasing in size if the mouse is pressed
    if(mouseIsPressed) {
        circleSize = circleSize + 20;
        stroke(color[rc])
    }
    // if the mouse is not pressed the circle is reset to a size of 5 and does not draw new circles
    else {
        circleSize = 5;
        noStroke();
        clear();
    }
    // doesn't let the circle get above 800
    if(circleSize > 800) {
        circleSize = 5;
    }
}

function draw() {
    // call the function
    randomColor();
    noFill();
    frameRate(30)
    circle(mouseX, mouseY, circleSize)
}
