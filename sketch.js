var basket1,basket1_img,background_img,apple,banana,grapes,pineapple,watermelon;
var score = 0;
var appleGroup, bananaGroup, watermelonGroup, pineappleGroup, grapesGroup;
function preload(){
  basket1_img = loadImage("images/basket.png");
  background_img = loadImage("images/background.jpg");
  apple = loadImage("images/apples.png");
  banana = loadImage("images/banana.png");
  grapes = loadImage("images/grapes.png");
  pineapple = loadImage("images/pineapple.png");
  watermelon = loadImage("images/watermelon.png");
}

function setup(){
  createCanvas(displayWidth-60,displayHeight-75);
  basket1 = createSprite(displayWidth/2,displayHeight-150,20,20);
  basket1.setCollider("rectangle",0,80,150,150);
  basket1.debug = true;
  basket1.addImage(basket1_img);

  appleGroup = new Group()
}

function draw(){
  background(background_img);
  if(keyDown("RIGHT_ARROW")){
    basket1.x = basket1.x + 5;
  }

  if(keyDown("LEFT_ARROW")){
    basket1.x = basket1.x - 5;
  }
  spawnFruits();
  for(var i = 0; i < appleGroup.length; i++){
  if(basket1.isTouching(appleGroup)){
    appleGroup.get(i).destroy();
    score++
  }
  else{
    appleGroup.setLifetimeEach(40)
  }
}
  drawSprites();

  fill("black")
  textSize(35)
  text("Score: "+score,1025,30);
}
function spawnFruits(){
  if(frameCount % 50 === 0){
    var apples = createSprite(random(10,displayWidth-10),0,10,10);
    apples.debug = true
    apples.velocityY = 5;
    apples.scale = 0.2;
    apples.addImage(apple);
    appleGroup.add(apples);
  }
  
  //if(frameCount % 70 === 0){
    //var pineapples = createSprite(random(10,displayWidth-10,0,10,10))
  //}
}
    /*function fruits(){
  if(frameCount % 50 === 0){
    var fruit = createSprite(random(10,displayWidth-10),0,10,10);
    fruit.velocityY = 5;
    fruit.depth = basket1.depth;
    var rand = Math.round(random(1,5))
    switch(rand){
      case 1:
        fruit.addImage(apple);
        fruit.scale = 0.2
        break;
      case 2:
        fruit.addImage(banana);
        fruit.scale = 0.2
        break;
      case 3:
        fruit.addImage(grapes);
        fruit.scale = 0.2
        break;
      case 4:
        fruit.addImage(pineapple);
        fruit.scale = 0.5
        break;
      case 5:
        fruit.addImage(watermelon);
        fruit.scale = 0.2
        break;
    }
    if(fruit.isTouching(basket1)){
      score++;
      fruit.visible = false
    }
    fruit.debug = true
    basket1.debug = true
  }*/