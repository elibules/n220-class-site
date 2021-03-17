var paddle = {
    px: 700,
    py: 250,
    pw: 20,
    ph: 100,
    pc: ["#feac02"],
    update: function() {
        if (keyIsDown(UP_ARROW)) { 
            this.py -= 8; 
        } 
        if (keyIsDown(DOWN_ARROW)) { 
            this.py += 8; 
        } 
        fill(this.pc[0])
        rect(this.px, this.py, this.pw, this.ph)
    }

}

var ball = {
    bx: 400,
    by: 300,
    br: 30,
    bxv: -6.5,
    byv: 6.5,
    bc: ["#278bfd"],
    update: function() {
        if (this.bx <= 15) {
            this.bxv = -this.bxv;
        } 

        if (this.bx >= 785) {
            this.bx = 400;
            this.by = 300;
            this.bxv = -this.bxv;
            score = 0;
        }
    
        if (this.by >= 585 || this.by <= 15) {
            this.byv = -this.byv;
        }

        this.bx = this.bx + this.bxv
        this.by = this.by + this.byv
        
        fill(this.bc[0]);
        circle(this.bx, this.by, this.br);
    }
}

var score = 0;

function setup() {
    createCanvas(800, 600)
}

function collideRect() {

    if(ball.bx > paddle.px - 15 && ball.bx < paddle.px + paddle.pw) {

        if(ball.by > paddle.py && ball.by < paddle.py + paddle.ph) {

            return true;
        }

   }

   return false;

}

function draw() {
    noStroke();
    clear();
    background(200);
    if(collideRect()) {
        ball.bxv = -ball.bxv;
        score += 1;
    }
    paddle.update();
    ball.update();
    fill(255);
    textSize(50);
    text(score, 25, 50);
}