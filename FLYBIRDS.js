
function setup() {


    let cnv;
let circle;
class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    display() {
        fill('white');
        circle(this.x, this.y, this.r * 2);
    }
}
console.log("Hello World");
cnv = new createCanvas(600, 550);


}

function draw() {
background('black');

}