

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["15f971bf-31f0-42df-8945-b7851a41bc6a","d8d38fa6-f579-438f-9a1b-7e7c28e7a917"],"propsByKey":{"15f971bf-31f0-42df-8945-b7851a41bc6a":{"name":"pacmanA","sourceUrl":null,"frameSize":{"x":20,"y":21},"frameCount":3,"looping":true,"frameDelay":12,"version":"vXR8FHbR.uhg7kREUeMb5dYa1NJTT_IO","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":42},"rootRelativePath":"assets/15f971bf-31f0-42df-8945-b7851a41bc6a.png"},"d8d38fa6-f579-438f-9a1b-7e7c28e7a917":{"name":"ghostA","sourceUrl":null,"frameSize":{"x":20,"y":22},"frameCount":3,"looping":true,"frameDelay":12,"version":"zx2cxZVRJLPC5aj_K69g5Lw3Oyzh874i","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":44},"rootRelativePath":"assets/d8d38fa6-f579-438f-9a1b-7e7c28e7a917.png"}}};
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

var pacman=createSprite(350,350,10,10);
pacman.setAnimation("pacmanA");

var ghost=createSprite(50,50,10,10);
ghost.setAnimation("ghostA");

var pared1=createSprite(200,75,300,20);
var pared2=createSprite(200,100,20,150);

var pared3=createSprite(90,175,100,20);
var pared4=createSprite(130,225,20,100);
var pared5=createSprite(120,275,100,20);

var pared6=createSprite(320,175,100,20);
var pared7=createSprite(325,225,20,100);
var pared8=createSprite(285,275,100,20);

var pared9=createSprite(50,350,100,20);
var pared10=createSprite(275,375,20,75);

function jugador1 (){
  if (keyDown("up")){
    pacman.y = pacman.y - 10;
  }
  if (keyDown("down")){
    pacman.y = pacman.y + 10;
  }
  if (keyDown("right")){
    pacman.x = pacman.x + 10;
  }
  if (keyDown("left")){
    pacman.x = pacman.x - 10;
  }
}

function jugador2 (){
  if (keyDown("w")){
    ghost.y = ghost.y - 10;
  }
  if (keyDown("s")){
    ghost.y = ghost.y + 10;
  }
  if (keyDown("d")){
    ghost.x = ghost.x + 10;
  }
  if (keyDown("a")){
    ghost.x = ghost.x - 10;
  }
}



function draw() {
  background("black");
  createEdgeSprites();
  ghost.bounceOff(allSprites);
  pacman.bounceOff(allSprites);

  
  if (ghost.isTouching(pacman)){
    fill("yellow");
    textSize(20);
    textAlign(CENTER,CENTER);
    text("ghost gana", 200,325);

  } else {
    fill("yellow");
    textSize(20);
    textAlign(CENTER,CENTER);
    text("pacman corre de ghost", 200,320);
    jugador1();
    jugador2();
  }
  
  drawSprites();
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
