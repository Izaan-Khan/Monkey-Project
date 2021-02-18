var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","72babf44-780f-4c04-8de1-aed78bca11b3","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","e28149c1-6070-4474-ade2-1d49a46d2d1b","f2dbd706-65a2-4e59-83e2-66673cef92e3","03f4f8e7-ae72-4720-99a8-482c8e468dac","6bad6bc1-38d7-45d5-bdf8-a5d56d753ac7","db80f14a-a3c4-45b3-8cfd-a53e2a13dc8b","c6a3e7f8-d0c8-44ed-8b9d-fed29dba6648","cbdc4022-4da2-4344-b91f-a55b90c22161"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":9,"looping":true,"frameDelay":12,"version":"hkLadA3kdFjAkBZIJy4ZEH8pjQ6JjGd5","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"72babf44-780f-4c04-8de1-aed78bca11b3":{"name":"monkey_copy_1","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":9,"looping":true,"frameDelay":12,"version":"Bzdp48Uro8y0uCGIk2XvQ.FbYl02lX_s","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/72babf44-780f-4c04-8de1-aed78bca11b3.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"RZjDYM2C0BOxTL7zZYvTyL5BdFDZ4Rda","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"LZqYvSjyQN7LPajOCgcmMbwavSQBAvCL","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"e28149c1-6070-4474-ade2-1d49a46d2d1b":{"name":"city_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"K80jCcbD4Wo_hVl1c1T.pZpDHorcjZiM","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/e28149c1-6070-4474-ade2-1d49a46d2d1b.png"},"f2dbd706-65a2-4e59-83e2-66673cef92e3":{"name":"ground_grass_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.xUQB0vdGDWHYaiv77BrpTnxeNBV_bNj/category_environment/ground_grass.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":".xUQB0vdGDWHYaiv77BrpTnxeNBV_bNj","categories":["environment"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.xUQB0vdGDWHYaiv77BrpTnxeNBV_bNj/category_environment/ground_grass.png"},"03f4f8e7-ae72-4720-99a8-482c8e468dac":{"name":"GameOver","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"},"6bad6bc1-38d7-45d5-bdf8-a5d56d753ac7":{"name":"r","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"NcpW9TEasSM9B86vRlWWoPbUKhb.1Y7X","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6bad6bc1-38d7-45d5-bdf8-a5d56d753ac7.png"},"db80f14a-a3c4-45b3-8cfd-a53e2a13dc8b":{"name":"O","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"D10qDCIqdX.rtYr7DbO7QlJfk8EtcSBU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/db80f14a-a3c4-45b3-8cfd-a53e2a13dc8b.png"},"c6a3e7f8-d0c8-44ed-8b9d-fed29dba6648":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"m.VA1Y2.uqrRhf.e9qfToAy2DspJg9TP","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c6a3e7f8-d0c8-44ed-8b9d-fed29dba6648.png"},"cbdc4022-4da2-4344-b91f-a55b90c22161":{"name":"animation_2","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

   var ObstaclesGroup = createGroup();
   var bananasGroup = createGroup();
var PLAY = 1;
var END = 0;
var gameState = PLAY;



var bg  = createSprite(200,200);
bg.setAnimation("city_1");

var r = createSprite(200,300)
r.setAnimation("r");
r.scale = 0.5;
r.visible = false

var don = createSprite(40, 200);
don.setAnimation("monkey");
don.scale = 0.1;

var o = createSprite(315,280);
o.setAnimation("O");
o.visible = false;




var ground = createSprite(10,399,0,0);
ground.setAnimation("ground_grass_1");
ground.x = 0;
ground.width = 1000;






var invisibleGround = createSprite(200,356,400,5);
invisibleGround.visible = false;
 
 
 
 

  
  
 var gameOver = createSprite(200,200);
 gameOver.setAnimation("GameOver");
 gameOver.visible = false;
 


var count = 0;

function draw() {
  
  background(255);
  
  
  
  text.visible = true;
  
   if(keyDown("space")){
      don.velocityY = -12 ;
     
    }
  if (keyDown("UP_ARROW")&& (gameState === END)) {
  reset();
}

if (keyDown("r")&& (gameState === END)) {
  reset();
}

  if (bananasGroup.isTouching(don) ) {
    count = count +1;
    bananasGroup.destroyEach();
   don.scale = don.scale+0.01;
  }
  
  
   
   don.velocityY = don.velocityY + 0.8;
    don.collide(invisibleGround);
  
  
    ObstaclesGroup.setColliderEach("rectangle",0,0,200,200);
 bananasGroup.setColliderEach("rectangle",0,0,200,200);
 
     if(ObstaclesGroup.isTouching(don)){
       gameState = END;
     
    }
     
     createEdgeSprites();
    don.collide(edges);
    
  
  spawnObstacles();
spawnBananas();
  drawSprites();

text("Score: "+ count, 202, 53,textSize(40));
  
    if(gameState === END) {
    ObstaclesGroup.destroyEach();
    bananasGroup.destroyEach();
    ObstaclesGroup.setVisibleEach = false;
    bananasGroup.setVisibleEach = false;
    gameOver.visible = true;
    r.visible = true;
    o.visible = true;
    don.scale = 0.1
    } 
showMobileControls(true, true, false, false);





}










 
  
  
  
  
  
  
  
  
  
   function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,332,10,40);
  
    obstacle.velocityX = -10 ;
   var rand = randomNumber(1,6);
    obstacle.setAnimation("Stone");
   
    obstacle.setCollider("circle",2,2);
  
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 100;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
   }
   
  
   

   
  


function spawnBananas() {
  if(World.frameCount % 80 === 0) {
    var bananas = createSprite(460,0,0,0);
    bananas.velocityX = -10 ;
    bananas.y = randomNumber(246,320);
    bananas.setAnimation("Banana");

   bananas.setCollider("circle",2,2);
    
    //assign scale and lifetime to the obstacle           
   bananas.scale = 0.1;
   bananas.lifetime = 100;
 
   bananasGroup.add(bananas);
  }
}





function reset(){
  gameState = PLAY;
  
  ObstaclesGroup.destroyEach();
 gameOver.visible = false;
  r.visible = false;
  o.visible = false;
  count=0;
}

 
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
