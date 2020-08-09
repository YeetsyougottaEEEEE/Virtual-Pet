var database; 
var dog, happydoug;
var foods, foodStock;

function preload()
{
  dogimage = loadImage("images/dogImg.png");
  happydougImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  foodStock=database.ref('Food');
  foodStock.on('value',readStock,ohno);

  dog = createSprite(500,400);
  dog.addImage(dogimage);

}


function draw() {  
  background("lime green");
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happydougImg);
  }
  
  
  drawSprites(); 
  text("food left:"+foodStock,200,200);
  fill("white");
  textSize(20);
}

function readStock(data){
  foods=data.val();
}

function writeStock(x){
  
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  
  database.ref('/').update({
    Food:x
  })
}

function ohno(){
  console.log("oops something went wrong");
}





