var colors = ['#f73140', '#f7f000', '#94d625']

function setup() {
    createCanvas(600, 600)
    fill(0, 0, 0)
    rect(260, 165, 80, 180)
    for(let i = 0; i < 3; i ++) {
        fill(colors[i])
        circle(300, 200 + i * 55, 50)
    }
    
}