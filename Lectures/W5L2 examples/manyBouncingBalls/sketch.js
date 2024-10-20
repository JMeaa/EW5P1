let balls = [];

function setup() {
    createCanvas(600, 400);

       balls.push({
        x: random(50, width - 50),
        y: random(50, height - 50),
        speedX: random(0, 5),
        speedY: random(0, 5)
    })
}

function draw() {
    background(255);
    for (let i = 0; i < balls.length; i++) {
        circle(balls[i].x, balls[i].y, 100);
        if (balls[i].x < 50 || balls[i].x > width - 50) {
            balls[i].speedX *= -1;
        }
        if (balls[i].y < 50 || balls[i].y > height - 50) {
            balls[i].speedY *= -1;
        }
        balls[i].x += balls[i].speedX;
        balls[i].y += balls[i].speedY;
    }
}

function mouseClicked() {
    balls.push({
        x: random(50, width - 50),
        y: random(50, height - 50),
        speedX: random(0, 5),
        speedY: random(0, 5)
    })
}