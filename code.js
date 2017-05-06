var mouse = {x: 0, y: 0}

var increase = 3;

var floors = makeText("Floor: 1", 1800, 60, 50, "Bitter", "white", 1)



var shots = [];
var values = [];

var spiders = [];
var spiderAng = [];

var walls = []
walls.push(document.getElementById("top"),document.getElementById("left"),document.getElementById("bottom"),document.getElementById("right"))

var movesx = [0,5,0,-5]
var movesy = [5,0,-5,0]

var score = 1;

var load = makeSpecialRect(960,600,100,20,"black",1,"load")
var red = makeSpecialRect(960,600,0,20,"red",1,"red")

var gameOver = false;

var holder1 = [];
var holder2 = [];

var add = 0;

var spin = [0,90,180,270,360];

var moving = false;

var movinglr = false;
var movingud = false;

var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
    moving=true;

},true);    
window.addEventListener('keyup',function(e){
    if (keyState[38] || keyState[87]){
    movingud=false;
    }
    if (keyState[37] || keyState[65]){

movinglr = false
    }    
    
    
    if (keyState[39] || keyState[68]){
movinglr = false
    }
    
    
       if (keyState[40] || keyState[83]){
           movingud=false;
       }

    keyState[e.keyCode || e.which] = false;
    moving=false;
},true);

x = 100;

var lr = 0;
var ud = 0;

var blr = 0
var bud = 0;

var pointing = "right"

var player = makeImage("images/right.png",800,480,80,110,1,"player")

var heart1 = makeImage("images/heart.png",1000,450,20,20,1,"heart")
var heart2 = makeImage("images/heart.png",970,450,20,20,1,"heart")
var heart3 = makeImage("images/heart.png",1030,450,20,20,1,"heart")

var life = 3;

function gameLoop() {
    
if(gameOver == false) {
    if (keyState[37] || keyState[65]){
        if(movingud == false){
lr = lr+3;
        }
        else{lr = lr+1.5}
        main.setAttribute("transform","translate("+lr+","+ud+")")
for(var i = 0; i<shots.length;i++){
move(shots[i],3,0)
}

    }    
    
    
    if (keyState[39] || keyState[68]){
        if(movingud==false){
lr = lr-3;
        }
        else{lr = lr-1.5}
        main.setAttribute("transform","translate("+lr+","+ud+")")
    for(var i = 0; i<shots.length;i++){
move(shots[i],-3,0)
}    
    }  
       if (keyState[40] || keyState[83]){
           if(movinglr == false){
ud = ud-3;
           }
           else{ud= ud-1.5}
        main.setAttribute("transform","translate("+lr+","+ud+")")
        for(var i = 0; i<shots.length;i++){
move(shots[i],0,-3)
}      
    }
        if (keyState[38] || keyState[87]){
            if(movinglr == false){
ud = ud+3;
            }
            else{ud = ud+1.5}
        main.setAttribute("transform","translate("+lr+","+ud+")")
        for(var i = 0; i<shots.length;i++){
move(shots[i],0,3)
}
            movingud = true;
        }

if(mouse.x<1000){
    if(moving==true){
        removeElement(player)
player = makeImage("images/leftwalk.gif",960,480,100,120,1,"player")
pointing = "left"
    }
    else{
    removeElement(player)
player = makeImage("images/left.png",960,480,100,120,1,"player")
pointing = "left"
    }
}
    else{
        if(moving==true){
        removeElement(player)
player = makeImage("images/rightwalk.gif",960,480,100,120,1,"player")
pointing = "right"
    }
    else{
    removeElement(player)
player = makeImage("images/right.png",960,480,100,120,1,"player")
pointing = "right"
    }
    }

    setTimeout(gameLoop, 10);
    checkCollisionsShots()
    drawShot()
    checkDistance()
    checkCollisionsWalls()
    checkCollisionsPlayer()
    checkCollisionsDoor()
}    }

document.addEventListener('click', function () {

     shotPrepare();
        
        
  
});

var cdn = false;
var scdn = false;

function shotPrepare() {
    if(cdn == false&&scdn == false){
        if(gameOver == false){
    
fireShot()


cdn=true;
        
setTimeout(function() {scdn=false;cdn = false;}, 1000)
if(scdn == false){
showReload()
}
        scdn= true;
    }

    }
}



function showReload(){

    if(add<100){
        
red.setAttribute("width",add)
holder1[0]=load
holder2[0]=red



add+=1;

        setTimeout(showReload,7)
}
else{
add=0;
}
    
}

function fireShot(){
    if(gameOver == false){
        if(pointing == "right"){
var angle = (Math.atan2(533-mouse.y,1060-mouse.x))+Math.PI
var shot = makeSpecialRect(1060,530,10,10,"black",1)

shots.push(shot)
values.push(angle)
    }
if(pointing == "left"){
var angle = (Math.atan2(536-mouse.y,959-mouse.x))+Math.PI
var shot = makeSpecialRect(960,530,10,10,"black",1)

shots.push(shot)
values.push(angle)
    }
    }
}

function enemySpawn(){
    for(var i=0;i<30;i++){
        var list = [0,random(-900,-100),random(1100,2900)]
        var val = random(1,2)
        var list2 = [0,random(-900,-100),random(1100,2900)]
        var val2 = random(1,2)
var spider = makegImage("images/spider.gif",list[val],list2[val2],100,100,1,"spider")
spiders.push(spider)
    }
}

function drawShot() {
for(var i = 0; i < shots.length; i++) {

    move(shots[i],Math.cos(values[i])*10,Math.sin(values[i])*10)
    if(getX(shots[i])>3000||getX(shots[i])<-1000||getY(shots[i])>3000||getY(shots[i])<-1000){
    removeArrayElement(shots,i)
    }
    }
    
}

function drawBack(){
    var drawx = -1000;
    var drawy = -1000;
for(var i=0;i<1600;i++){
var grass = makegImage("images/grass3.png",drawx,drawy,100,100,1,"grass")
grass.setAttribute("transform","rotate("+spin[random(1,4)]+","+(drawx+50)+","+(drawy+50)+")")
drawx = drawx+100;
    if(drawx==3000){
    drawy= drawy+100;
        drawx=-1000;
    }
}
}

function drawPlants(){
    for(var i=0;i<50;i++){
var grass = makegImage("images/flowers.png",100*random(-9.5,28.5),100*random(-9.5,28.5),100,100,1,"grass")
var flower = makegImage("images/shrub.png",100*random(-9.5,28.5),100*random(-9.5,28.5),100,100,1,"flower")
    }
    var list = [0,random(-900,-100),random(1100,2900)]
        var val = random(1,2)
        var list2 = [0,random(-900,-100),random(1100,2900)]
        var val2 = random(1,2)
    var door = makegImage("images/trapdoor.png",list[val],list2[val2],100,100,1,"door")
}

function checkDistance(){

for(var i = 0;i<spiders.length;i++){
var bgx = getX(spiders[i])+lr
var bgy = getY(spiders[i])+ud
var ggx = getX(player)
var ggy = getY(player)
//console.log(Math.sqrt(Math.pow(bgx-ggx,2) + Math.pow(bgy-ggy,2)))
if(Math.sqrt(Math.pow(bgx-ggx,2) + Math.pow(bgy-ggy,2))<1000){

    var angle = (Math.atan2(bgy-ggy,bgx-ggx))+Math.PI
    move(spiders[i],Math.cos(angle)*increase,Math.sin(angle)*increase)
}


}
}

function checkCollisionsShots() {
    for (var i = 0; i < shots.length; i++) {
    for (var j = 0; j < spiders.length; j++) {
        

          if (shots[i] != undefined && spiders[j] != undefined && values[i] != undefined) {
          if (specialCollide(shots[i], spiders[j], -60, 0) == true) {


                removeArrayElement(shots, i)
                removeArrayElement(values, i)
                removeArrayElement(spiders, j)
                i++;
                j++;

          }
          }

            
        }
        }
    }

function checkCollisionsPlayer() {
    for (var j = 0; j < spiders.length; j++) {
        

          if (spiders[j] != undefined) {
          if (specialCollide(player, spiders[j], -60, 0) == true) {


                removeArrayElement(spiders, j)
                life-=1;

          }
          }

            
        }
    if(life==2){
    heart3.setAttribute("opacity",0)
    }
    if(life==1){
    heart3.setAttribute("opacity",0)
    heart2.setAttribute("opacity",0)
    }
    if(life<= 0){
    heart3.setAttribute("opacity",0)
    heart2.setAttribute("opacity",0)
    heart1.setAttribute("opacity",0)
    gameOver = true;
    }
        }
    

function checkCollisionsWalls() {
    for (var i = 0; i < walls.length; i++) {


          if (specialCollide2(player, walls[i], 0, 0) == true) {
lr= lr-movesx[i]
ud= ud-movesy[i]
                main.setAttribute("transform","translate("+lr+","+ud+")")

          }
          }

            
        }

function checkCollisionsDoor() {


          if (specialCollide2(player, document.getElementById("door"), 0, 0) == true) {
                main.innerHTML = "<rect x='-1000' width='4000' height='4000' y='-1000' fill='green'></rect><rect x='-1050' width='50' y='-1050' height='4100' fill='grey' id='left'></rect><rect x='-1050' width='4100' y='-1050' height='50' fill='grey' id='top'></rect><rect x='3000' width='50' y='-1050' height='4100' fill='grey' id='right'></rect><rect x='-1050' width='4100' y='3000' height='50' fill='grey' id='bottom'></rect>"

                spiders = []
                
                lr=0
                ud=0
                
                
                drawBack()
drawPlants()

enemySpawn();
              main.setAttribute("transform","translate(0,0)")
increase = increase+0.5;
              
              score++
              removeElement(floors)
              floors = makeText("Floor: "+score, 1800, 60, 50, "Bitter", "white", 1)
          }
          }

            
        
        
    



drawBack()
drawPlants()
enemySpawn();
gameLoop()