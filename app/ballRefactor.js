var ball = {
    bx: 400,
    by: 300,
    br: 30,
    bxv: -5,
    byv: -5,
    ballColor: [0, 255, 0],
    update: function() {
        clear();
        fill(this.ballColor);
        circle(this.bx, this.by, this.br);
        this.bx += this.bxv;
        this.by += this.byv;
        if(this.bx > 785 | this.bx < 15) {
            this.bxv *= -1;
        }
        if(this.by > 585 | this.by < 15) {
            this.byv *= -1;
        }
    }
}

function setup() {
    createCanvas(800, 600)
}

function draw() {
    ball.update();
}