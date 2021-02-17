var colors = ['#f28faf', '#f7d6b7', '#88624e']

function setup() {
    createCanvas(600, 600)

    for(let i = 0; i < 3; i ++) {
        fill(colors[i])
        rect(20 + i * 70, 300, 70, 50)
    }
}