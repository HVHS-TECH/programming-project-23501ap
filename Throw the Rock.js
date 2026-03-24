
let imgBG;  
let imgSlingshot;
function preload() {
  imgBG = loadImage("../images/FlyBirds.png",
  );
  imgSlingshot = loadImage("../images/slingshot.png",
  );
}

function setup() {
  console.log("Throw the Rock");
  cnv = createCanvas(1500, 900);

  // Rocks to throw the targets at
  rock1 = new Sprite(100, 100, 25, 25);
  rock1.color = 'blue';
  rock2 = new Sprite(150, 100, 25, 25);
  rock2.color = 'blue';
  rock3 = new Sprite(200, 100, 25, 25);
  rock3.color = 'blue';

// Targets
  target1 = new Sprite(900, 150, 40, 40);
  target1.color = 'red';
  target2 = new Sprite(1080, 420, 40, 40);
  target2.color = 'red';
  target3 = new Sprite(1400, 500, 40, 40);
  target3.color = 'red';

}







function draw() {
  background(255, 0, 0); 
  if (imgBG) {
    image(imgBG, 0, 0, width, height);
  } else {
    console.log("imgBG is undefined");
  }
 if (imgSlingshot) {
    image(imgSlingshot, 100, height - 330, 220, 220);
  } else {
    console.log("imgSlingshot is undefined");
  }
}
