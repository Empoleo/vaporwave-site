var mouse = {x: 0, y: 0}

var shots = [];
var values = [];

var spiders = [];
var spiderAng = [];

var gameOver = false;

var add = 0;

var spin = [0,90,180,270,360];

var moving = false;

var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
    moving=true;

},true);    
window.addEventListener('keyup',function(e){ 
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



function gameLoop() {
    
if(gameOver == false) {
    if (keyState[37] || keyState[65]){
lr = lr+3;
        main.setAttribute("transform","translate("+lr+","+ud+")")
for(var i = 0; i<shots.length;i++){
move(shots[i],3,0)
}

    }    
    
    
    if (keyState[39] || keyState[68]){
lr = lr-3;
        main.setAttribute("transform","translate("+lr+","+ud+")")
    for(var i = 0; i<shots.length;i++){
move(shots[i],-3,0)
}    
    }
    
    
       if (keyState[40] || keyState[83]){
ud = ud-3;
        main.setAttribute("transform","translate("+lr+","+ud+")")
        for(var i = 0; i<shots.length;i++){
move(shots[i],0,-3)
}
    }
    
    
        if (keyState[38] || keyState[87]){
ud = ud+3;
        main.setAttribute("transform","translate("+lr+","+ud+")")
        for(var i = 0; i<shots.length;i++){
move(shots[i],0,3)
}
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
}    }

document.addEventListener('click', function () {
console.log(mouse.x,mouse.y)
     shotPrepare();
        
        
  
});

var cdn = false;

function shotPrepare() {
    if(cdn == false){
    
fireShot()


cdn=true;
        
setTimeout(function() {add = 0;cdn = false;}, 980)
showReload()
    }


}



function showReload(){
    if(cdn==true && add<110){
        
var load = makeRect(960,600,100,20,"black",1)
var red = makeRect(960,600,add,20,"red",1)
add+=10;
        setTimeout(showReload,90)
}
else{
removeElement(load)
removeElement(red)
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
var grass = makegImage("images/shrub.png",100*random(-9.5,28.5),100*random(-9.5,28.5),100,100,1,"grass")
    }
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
    move(spiders[i],Math.cos(angle)*4,Math.sin(angle)*4)
}


}
}

function checkCollisionsShots() {
    for (var i = 0; i < shots.length; i++) {
    for (var j = 0; j < spiders.length; j++) {
        

          if (shots[i] != undefined && spiders[j] != undefined && values[i] != undefined) {
          if (specialCollide(shots[i], spiders[j], -50, 0) == true) {


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


gameLoop()
drawBack()
drawPlants()
enemySpawn();
