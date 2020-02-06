var basket,fruitsGroup,ground,END
var score = 0
function preload(){
    Apple = loadImage('images/Apple.jpg')
    Mango = loadImage('images/Mango.png')
    Guava = loadImage('images/Guava.jpg')
    Grapes = loadImage('images/Grapes.png')
    Basket = loadImage('images/Basket.jpg')
    BackGround = loadImage('images/Background.jpg')
    Banana = loadImage('images/Banana.jpg')
    
    
  }
  function setup() {
      createCanvas(800,400);
     
      basket = createSprite(380,380,100,20)
      ground = createSprite(400,380,800,20)
      ground.shapeColor = 'brown'
      basket.addImage(Basket)
      fruitsGroup = new Group()
      fruits1Group = new Group()
      basket.scale = 0.3;
      score = 0
       
  
      
    
    }
    
    function draw() {
      background('white');
      basket.x = mouseX  
      spawnFruits()
      spawnFruits1()
      text("score:" + score,500,50)
     if (fruitsGroup.isTouching(basket)) {
        fruitsGroup.destroyEach()
    score = score + 1
    
     }
    
     

     if(fruits1Group.isTouching(basket)){
       fruits1Group.destroyEach()
       score = score + 1
       
     }
     if(fruitsGroup.isTouching(ground)|| fruits1Group.isTouching(ground)){
       score = score - 1
       fruitsGroup.destroyEach()
       fruits1Group.destroyEach()
     }
     if(score === -5){
       GameState = END
     }
     if(GameState === END){
       
     }
    
    

    
      drawSprites();
    }
    function spawnFruits() {
      if (frameCount % 30 === 0) {
        fruits = createSprite(400,0,50,40)
        fruits.velocityY = 5;
        fruits.x = random(0,800)
     fruitsGroup.add(fruits)
  
     
     var rand = Math.round(random(1,5));
      switch(rand) {
        case 1: fruits.addImage(Apple);
                break;
        case 2: fruits.addImage(Mango);
                break;
        case 3: fruits.addImage(Guava);
                break;
        case 4: fruits.addImage(Grapes);
                break;
        case 5: fruits.addImage(Banana);
                break;        
       
        default: break;
      }
      fruits.scale = 0.1;
    
                      
      }
    }
    function spawnFruits1(){
      if(frameCount % 40 ===0) {
        fruits1 = createSprite(400,0,50,40) 
        fruits1.velocityY = 5;
        fruits1.x = random(0,800)
        fruits1Group.add(fruits1)
      }

    }