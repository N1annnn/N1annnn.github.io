
function setup() {
    initializeFields();
    createCanvas(300, 300);
    fill(color(0xB4, 0xB7, 0x14));
    textSize(50);
    textAlign(CENTER, CENTER);
}

var choice;

function draw() {
    background(color(0x6A, 0x66, 0x17));
    text("Dinner 1", 150, 50);
    text("Dinner 1", 150, 150);
    text("Dinner 1", 150, 250);
    if (choice == 0)
        ellipse(30, 50, 50, 50);
    if (choice == 1)
        ellipse(30, 150, 50, 50);
    if (choice == 2)
        ellipse(30, 250, 50, 50);
}

function mousePressed() {
    choice = int(random(3));
}

function initializeFields() {
    choice = -1;
}
