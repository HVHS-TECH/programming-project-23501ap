
let imgBG;  
function preload() {
  imgBG = loadImage("../images/FlyBirds.png",
    () => console.log("Image loaded"),
    () => console.log("Failed to load image")
  );
}

function setup() {
  console.log("Fly Birds");
  cnv = createCanvas(1000, 725);

  // Birds 
  bird1 = new Sprite(100, 600, 25, 25);
  bird1.color = 'blue';
  bird2 = new Sprite(150, 600, 25, 25);
  bird2.color = 'blue';
  bird3 = new Sprite(200, 600, 25, 25);
  bird3.color = 'blue';

  // Walls 
  wallLH  = new Sprite(5, height/2, 10, height, 'k');
  wallLH.color = 'green';

  wallRH  = new Sprite(width - 5, height/2, 10, height, 'k');
  wallRH.color = 'green';

  wallTop = new Sprite(width/2, 5, width, 10, 'k');
  wallTop.color = 'green';

  wallBot = new Sprite(width/2, height - 5, width, 10, 'k');
  wallBot.color = 'green';
}


function draw() {
  background(255, 0, 0); 
  if (imgBG) {
    image(imgBG, 0, 0, width, height);
  } else {
    console.log("imgBG is undefined");
  }
}
