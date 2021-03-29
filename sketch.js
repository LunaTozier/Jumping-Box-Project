var canvas;
var note1, note2, note3 , note4, note5;

var box1, box2, box3, box4, box5;

var movingBox;

function preload(){
 note1 = loadSound("Do.wav");
 note2 = loadSound("Re.wav");
 note3 = loadSound("Mi.wav");
 note4 = loadSound("Fa.wav");
 note5 = loadSound("So.wav");


}


function setup(){
    canvas = createCanvas(800,600);

    //create 5 different surfaces
   box1 = createSprite(80,560,150,40);
   box1.shapeColor = "red";
   box2 = createSprite(240,560,150,40);
   box2.shapeColor = "blue";
   box3 = createSprite(400,560,150,40);
   box3.shapeColor = "yellow";
   box4 = createSprite(560,560,150,40);
   box4.shapeColor = "orange";
   box5 = createSprite(720,560,150,40);
   box5.shapeColor = "green";

    //create box sprite and give velocity
 movingBox = createSprite(70, 70, 40,40);
 movingBox.shapeColor = "white";
 movingBox.velocityY = 7 ; 
 movingBox.velocityX = 9;

 edges = createEdgeSprites();
}

function draw() {
    background("black");

   movingBox.bounceOff(edges);
   

    //add condition to check if box touching surface and make it box

if (movingBox.isTouching(box1) && movingBox.bounceOff(box1)){
movingBox.shapeColor = "red";
note1.play();
}
if (movingBox.isTouching(box2) && movingBox.bounceOff(box2)){
    movingBox.shapeColor = "blue";
    note2.play();
    }
    if (movingBox.isTouching(box3) && movingBox.bounceOff(box3)){
        movingBox.shapeColor = "yellow";
        note3.play();
        }
        if (movingBox.isTouching(box4) && movingBox.bounceOff(box4)){
            movingBox.shapeColor = "orange";
            note4.play();
            }
            if (movingBox.isTouching(box5) && movingBox.bounceOff(box5)){
                movingBox.shapeColor = "green";
                note5.play();
                }


    drawSprites();
}
