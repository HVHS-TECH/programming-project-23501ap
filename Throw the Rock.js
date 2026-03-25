
let imgBG;  
let imgSlingshot;
let target1, target2, target3;
let rec1, rec2, rec3;
let rock1, rock2, rock3;
//Preload images for the background and slingshot
function preload() {
  imgBG = loadImage("../images/FlyBirds.png",
  );
  imgSlingshot = loadImage("../images/slingshot.png",
  );
}

//Setup the canvas and create the sprites for the rocks, targets, and TNT
function setup() {
  console.log("Throw the Rock");
  cnv = createCanvas(1500, 900);


// Rocks to throw the targets at

rocks = new Group();
  rock1 = new rocks.Sprite(100, 100, 25, 25);
  rock1.color = 'blue';
  rock2 = new rocks.Sprite(150, 100, 25, 25);
  rock2.color = 'blue';
  rock3 = new rocks.Sprite(200, 100, 25, 25);
  rock3.color = 'blue';

 
// Targets
  target1 = new Sprite(900, 150, 40, 40);
  target1.color = 'red';
  target2 = new Sprite(1080, 420, 40, 40);
  target2.color = 'red';
  target3 = new Sprite(1400, 500, 40, 40);
  target3.color = 'red';

rec1 = new Sprite(900, 150, 100, 10, '6');
rec1.color = 'green';
rec2 = new Sprite(1080, 420, 100, 10, '6');
rec2.color = 'green';
rec3 = new Sprite(1400, 500, 100, 10, '6');
rec3.color = 'green';
rec4 = new Sprite(1000, 600, 350, 15, '6');   
rec4.color = 'green';
rec4.rotation = 80;

//TNT
tnt1 = new Sprite(1250, 400, 30, 30);
tnt1.color = 'black';




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
