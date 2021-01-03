//Create variables here
var dog,happyDog,database,foodS,foodStock


function preload()
{
  dog1 = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,300,50,50)
  dog.addImage(dog1)
  dog.scale = 0.2
  database = firebase.database()
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }
  textSize(20);
  fill("white")
  text("Note: Click UP_ARROW to feed Drago milk!",50,30)

  textSize(20);
  fill("white")
  text("Food remaining:"+foodS,180,200)


  drawSprites();
  //add styles here
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



