 var iss,bg;
    
    
    
    function preload(){

    bg = loadImage("images/iss.png");

    }
    
    
    
    function setup() {
      createCanvas(400, 400);

      iss = createSprite(200,200);
      background.addImage(bg)
    }

    function draw() {
     // background(220);

      drawSprites();
    }