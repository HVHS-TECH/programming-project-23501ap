
let imgBG;  
let imgSlingshot;
let target1, target2, target3;
let rec1, rec2, rec3;
let rock1, rock2, rock3;
let tnt1;
let currentRock;
let slingshotX = 100;
let slingshotY = 650;
let dragging = false;

//Preload images for the background and slingshot
function preload() {
  imgBG = loadImage("../images/FlyBirds.png",);
  imgSlingshot = loadImage("../images/slingshot.png",);
}

//Setup the canvas and create the sprites for the rocks, targets, and TNT
function setup() {
  console.log("Throw the Rock");
  cnv = createCanvas(1500, 900);
 


// Rocks to throw the targets at

rocks = new Group();
 for (let i = 0; i < 3; i++) {
        let r = new Sprite(100 + (i * 50), 700, 25, 25);
        r.color = 'blue';
        r.collider = 'kinematic';
        rocks.add(r);}

 rock1 = rocks[0];
 rock2 = rocks[1];
 rock3 = rocks[2];

 
// Targets
  target1 = new Sprite(900, 150, 40, 40 );
  target1.color = 'red';
  target2 = new Sprite(1080, 420, 40, 40 );
  target2.color = 'red';
  target3 = new Sprite(1400, 500, 40, 40 );
  target3.color = 'red';


  
rec1 = new Sprite(900, 150, 100, 10, '6');
rec1.color = 'green';
rec1.collider = 'dynamic';
rec2 = new Sprite(1080, 420, 100, 10, '6');
rec2.color = 'green';
rec2.collider = 'dynamic';
rec3 = new Sprite(1400, 500, 100, 10, '6');
rec3.color = 'green';
rec3.collider = 'dynamic';
rec4 = new Sprite(1000, 600, 350, 15, '6');   
rec4.color = 'green';
rec4.collider = 'dynamic';
rec4.rotation = 80;

//TNT
tnt1 = new Sprite(1250, 400, 30, 30);
tnt1.color = 'black';


}

function mousePressed() {
  // pick first available rock
  currentRock = rocks[0];

  if (currentRock) {
    isDragging = true;
    currentRock.velocity.x = 0;
    currentRock.velocity.y = 0;
  }
}
function mouseReleased() {
  if (currentRock) {
    dragging = false;
// Calculate velocity based on distance from slingshot
    let dx = slingshotX - mouseX;
    let dy = slingshotY - mouseY;
    currentRock.velocity.x = dx * 0.2; // Adjust the multiplier for speed
    currentRock.velocity.y = dy * 0.2; // Adjust the multiplier for speed
    rock1 = null; // Remove the rock from the group so it can't be dragged again  
    rock2 = null;
    rock3 = null;
    rocks.remove(currentRock); // Remove the rock from the group
  }
}


function draw() {
  background(255, 0, 0); 


image(imgBG, 0, 0, width, height);
image(imgSlingshot, 100, height - 330, 220, 220);

  if (imgBG) {
    image(imgBG, 0, 0, width, height);
  } else {console.log("imgBG is undefined");}

 if (imgSlingshot) {
    image(imgSlingshot, 100, height - 330, 220, 220);
  } else {console.log("imgSlingshot is undefined");}

if (mouseIsPressed) {
  dragging = true;
  currentRock = rocks[0]; // You can implement logic to select different rocks
  currentRock.position.x = mouseX;
  currentRock.position.y = mouseY;
} else {dragging = false;}



 //If rock and tnt overlap
  if (rocks.collides(tnt1)) {explodeTNT(tnt1);}
  
}
function explodeTNT(sprite) {
  sprite.remove(); 
  console.log("TNT Exploded!");

  




}


