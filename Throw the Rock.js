let imgBG;
let imgSlingshot;
let target1, target2, target3;
let rec1, rec2, rec3, rec4;
let tnt1;
let currentRock = null;
let slingshotX = 210; // center of slingshot image
let slingshotY = 620; // top of slingshot fork
let dragging = false;
let rocks;
let rockIndex = 0; //  Track which rock is next

function preload() {
  imgBG = loadImage("../images/FlyBirds.png");
  imgSlingshot = loadImage("../images/slingshot.png");
}

function setup() {
  createCanvas(1500, 900);
 world.gravity.y = 20;
  rocks = new Group();
  // Stack rocks near slingshot base (waiting their turn)
  for (let i = 0; i < 3; i++) {
    let r = new Sprite(60 + (i * 35), 720, 25, 25);
    r.color = 'blue';
    r.collider = 'static'; // static until thrown
    rocks.add(r);
  }

  // Move first rock to slingshot position ready to throw
  rocks[0].position.x = slingshotX;
  rocks[0].position.y = slingshotY;

  target1 = new Sprite(900, 150, 40, 40);
  target1.color = 'red';
  target1.collider = 'static';
  target2 = new Sprite(1080, 420, 40, 40);
  target2.color = 'red';
  target2.collider = 'static';
  target3 = new Sprite(1400, 500, 40, 40);
  target3.color = 'red';
  target3.collider = 'static';

  rec1 = new Sprite(900, 170, 100, 10, 'static');
  rec1.color = 'green';
  rec1.collider = 'static';
  rec2 = new Sprite(1080, 440, 100, 10, 'static');
  rec2.color = 'green';
  rec2.collider = 'static';
  rec3 = new Sprite(1400, 520, 100, 10, 'static');
  rec3.color = 'green';
  rec3.collider = 'static';
  rec4 = new Sprite(1000, 620, 350, 15, 'static');
  rec4.color = 'green';
  rec4.collider = 'static';
  rec4.rotation = 80;

  tnt1 = new Sprite(1250, 400, 30, 30);
  tnt1.color = 'black';
}

function mousePressed() {
  // Only grab the rock that's sitting at the slingshot
  if (rockIndex < rocks.length) {
    currentRock = rocks[rockIndex];
    dragging = true;
    currentRock.collider = 'dynamic'; // keep static while dragging
    currentRock.velocity.x = 0;
    currentRock.velocity.y = 0;
  }
}

function mouseReleased() {
  if (currentRock && dragging) {
    dragging = false;

    //Switch to dynamic BEFORE applying velocity so physics kicks in
    currentRock.collider = 'dynamic';

    let dx = slingshotX - mouseX;
    let dy = slingshotY - mouseY;
    currentRock.velocity.x = dx * 0.15;
    currentRock.velocity.y = dy * 0.15;

    rockIndex++; // Move to next rock

    // Move next rock to slingshot position (if one exists)
    if (rockIndex < rocks.length) {
      rocks[rockIndex].position.x = slingshotX;
      rocks[rockIndex].position.y = slingshotY;
    }

    currentRock = null; //  Clear current rock reference
  }
}

function draw() {
  background(200);

  // Draw images once only
  if (imgBG) {
    image(imgBG, 0, 0, width, height);
  }
  if (imgSlingshot) {
    image(imgSlingshot, 100, height - 330, 220, 220);
  }

  // Drag rock with mouse (no mouseIsPressed conflict in draw)
  if (dragging && currentRock) {
    currentRock.position.x = mouseX;
    currentRock.position.y = mouseY;
  }

  // Draw slingshot rubber band visual
  if (dragging && currentRock) {
    stroke(100, 60, 0);
    strokeWeight(3);
    let p = currentRock.position;
    line(slingshotX - 20, slingshotY, currentRock.position.x, currentRock.position.y);
    line(slingshotX + 20, slingshotY, currentRock.position.x, currentRock.position.y);
    noStroke();
  }

  // TNT collision check
  if (tnt1 && rocks.collides(tnt1)) {
    explodeTNT(tnt1);
    tnt1 = null; // Prevent repeated calls after removal
  }
}

function explodeTNT(sprite) {
  sprite.remove();
  console.log("TNT Exploded!");
  tnt1.collider = 'static';
}