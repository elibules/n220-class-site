var myRectangle = {
    rx: 150,
    ry: 200,
    rw: 100,
    rh: 50,
    color: [40, 200, 140],
    update: function() {
        rect(this.rx, this.ry, this.rw, this.rh)
        fill(this.color)
    }
}

function setup() {
    createCanvas(400, 400);
    noStroke();
    background(200)
}

function draw() {
    myRectangle.update();
}