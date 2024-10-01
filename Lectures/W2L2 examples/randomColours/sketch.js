let redChannel;
let greenChannel;
let blueChannel;

function setup() {
    createCanvas(400, 400);
    redChannel = random(256);
    greenChannel = random(256);
    blueChannel = random(256);
}

function draw() {
    background(0);
    fill(redChannel, greenChannel, blueChannel);
    circle(width / 2, height / 2, width * 0.8);
    // r++;
    // r %= 255;
    // g++;
    // g %= 255;
    // b++;
    // b %= 255;
}
