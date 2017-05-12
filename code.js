var mouse = {x: 0, y: 0}

var increase = 3;

var ammoArray = [];

var ammospawn = 0;

var shotBegin = false;

var accel = 1;

var acidcdn = false;

var diecheck = true;

var begin = false;

var floors = makeText("Floor: 1", 1700, 70, 80, "VT323", "white", 1)

song = new Audio('music.mp3');
song.volume = 0.3
song.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
song.play();

var shots = [];
var values = [];

var spitters = [];
var spittercdns = [];


var acids = [];
var acidAngles = [];

var spiders = [];
var spiderAng = [];

var walls = [document.getElementById("top"),document.getElementById("left"),document.getElementById("bottom"),document.getElementById("right")]


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

var decrease = 1000;

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
    if(gameOver == true && diecheck == true){
    checkForDeath();
        console.log("")
    }
if(gameOver == false) {
    if (keyState[37] || keyState[65]){
        if(movingud == false){
lr = lr+4;
        }
        else{lr = lr+3}
        main.setAttribute("transform","translate("+lr+","+ud+")")
for(var i = 0; i<shots.length;i++){
move(shots[i],3,0)
}movinglr = true;

    }


    if (keyState[39] || keyState[68]){
        if(movingud==false){
lr = lr-4;
        }
        else{lr = lr-3}
        main.setAttribute("transform","translate("+lr+","+ud+")")
    for(var i = 0; i<shots.length;i++){
move(shots[i],-3,0)
}    movinglr = true;
    }
       if (keyState[40] || keyState[83]){
           if(movinglr == false){
ud = ud-4;
           }
           else{ud= ud-3}
        main.setAttribute("transform","translate("+lr+","+ud+")")
        for(var i = 0; i<shots.length;i++){
move(shots[i],0,-3)
}      movingud = true;
    }
        if (keyState[38] || keyState[87]){
            if(movinglr == false){
ud = ud+4;
            }
            else{ud = ud+3}
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
    drawAcid()
    checkDistance()
    checkCollisionsWalls()
    checkCollisionsPlayer()
    checkCollisionsDoor()
    checkDistanceSpitter()
    

}    }

document.addEventListener('click', function () {
if(shotBegin==true){
     shotPrepare();
}


});




var rts = makeRect(6000,0,2000,1000,"darkgrey",1,"load")
var rtBt = makeRect(6000,500,400,100,"white",1,"load")
var rtTxt = makeText("Restart", 6000, 575, 70, "sans-serif", "black", 1)

    rtTxt.addEventListener('click', function () {
location.reload();
});

rtBt.addEventListener('click', function () {
location.reload();
});

function checkForDeath(){
diecheck = false;
rts.setAttribute("x",0)
rtBt.setAttribute("x",800)
rtTxt.setAttribute("x",885)
player.setAttribute("x",3000)
}

var cdn = false;
var scdn = false;

function shotPrepare() {
    if(cdn == false&&scdn == false&&begin==true){
        if(gameOver == false){

fireShot()
fireAudio = new Audio('shot.mp3');
            fireAudio.volume = 0.3
fireAudio.play();

cdn=true;

setTimeout(function() {scdn=false;cdn = false;}, 1000/accel)
if(scdn == false){
showReload()
}
        scdn= true;
    }

    }
}



function showReload(){

    if(add<101){

red.setAttribute("width",add)
holder1[0]=load
holder2[0]=red



add+=(1*accel);

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
var shot = makeSpecialRect(1060,525,10,10,"black",1)

shots.push(shot)
values.push(angle)
    }
if(pointing == "left"){
var angle = (Math.atan2(536-mouse.y,959-mouse.x))+Math.PI
var shot = makeSpecialRect(960,525,10,10,"black",1)

shots.push(shot)
values.push(angle)
    }
    }
}
function drawSpitters(){
    for(var i=0;i<5;i++){
        var list = [0,random(-900,-100),random(1100,2900)]
        var val = random(1,2)
        var list2 = [0,random(-900,-100),random(1100,2900)]
        var val2 = random(1,2)
var spitter = makegImage("images/spitter.gif",list[val],list2[val2],100,100,1,"spitter")
spittercdns.push(false)
spitters.push(spitter)
}
}

function checkDistanceSpitter(){

for(var i = 0;i<spitters.length;i++){
var bgx = getX(spitters[i])+lr
var bgy = getY(spitters[i])+ud
var ggx = getX(player)
var ggy = getY(player)
//console.log(Math.sqrt(Math.pow(bgx-ggx,2) + Math.pow(bgy-ggy,2)))
if(Math.sqrt(Math.pow(bgx-ggx,2) + Math.pow(bgy-ggy,2))<1500){
    if(spittercdns[i] == false){
    var acid = makegImage("images/acid.png",getX(spitters[i]),getY(spitters[i]),100,100,1,"acid")
    var angle = (Math.atan2(bgy-ggy,bgx-ggx))+Math.PI
    acids.push(acid)
    acidAngles.push(angle)
    spittercdns[i] = true;
    cooldown(i)

    }
}

}
}

function cooldown(val){
if(spittercdns[val] = true){
setTimeout(function() {spittercdns[val] = false;}, 4000);
}
}



function drawAcid(){
    for(var i=0;i<acids.length;i++){
move(acids[i],Math.cos(acidAngles[i])*(increase*1.2),Math.sin(acidAngles[i])*(increase*1.2))
if(getX(acids[i])>3000||getX(acids[i])<-1000||getY(acids[i])>3000||getY(acids[i])<-1000){
    removeArrayElement(acids,i)
    removeArrayElement(acidAngles,i)
    }
    }}

function enemySpawn(){
    for(var i=0;i<25;i++){
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

    move(shots[i],Math.cos(values[i])*15,Math.sin(values[i])*15)
    if(getX(shots[i])>3000||getX(shots[i])<-1000||getY(shots[i])>3000||getY(shots[i])<-1000){
    removeArrayElement(shots,i)
    removeArrayElement(values,i)
    }
    }

}

function drawBack(){
    var drawx = -1000;
    var drawy = -1000;
for(var i=0;i<1600;i++){
var grass = makegImage("images/grass2.png",drawx,drawy,100,100,1,"grass")
grass.setAttribute("transform","rotate("+spin[random(1,4)]+","+(drawx+50)+","+(drawy+50)+")")
drawx = drawx+100;
    if(drawx==3000){
    drawy= drawy+100;
        drawx=-1000;
    }
}
}

function drawPlants(){
    for(var i=0;i<40;i++){
        var rocks = makegImage("images/rocks.png",100*random(-9.5,28.5),100*random(-9.5,28.5),100,100,1,"rocks")
        var flower = makegImage("images/flowers.png",100*random(-9.5,28.5),100*random(-9.5,28.5),100,100,1,"flower")
var shrub = makegImage("images/shrub.png",100*random(-9.5,28.5),100*random(-9.5,28.5),100,100,1,"shrub")
var bush = makegImage("images/bush.png",100*random(-9.5,28.5),100*random(-9.5,28.5),100,100,1,"bush")
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
          if (specialCollide(shots[i], spiders[j], -40, -40) == true) {


                removeArrayElement(shots, i)
                removeArrayElement(values, i)
                removeArrayElement(spiders, j)
                i++;
                j++;

          }
          }


        }
        }
        for (var i = 0; i < shots.length; i++) {
    for (var j = 0; j < spitters.length; j++) {


          if (shots[i] != undefined && spitters[j] != undefined && values[i] != undefined) {
          if (specialCollide(shots[i], spitters[j], -40, -40) == true) {


                removeArrayElement(shots, i)
                removeArrayElement(values, i)
                removeArrayElement(spitters, j)
                i++;
                j++;

          }
          }


        }
        }
    }

function checkCollisionsPlayer() {
    if(ammoArray[0]!=undefined){
    if(specialCollide(player,ammoArray[0],0,0)==true){
    removeArrayElement(ammoArray, 0)
    accel = accel+0.05
    maketxt("Reload Speed Up",760)
    }
    }
    for (var j = 0; j < spiders.length; j++) {


          if (spiders[j] != undefined) {
          if (specialCollide(player, spiders[j], 0, 0) == true) {


                removeArrayElement(spiders, j)
                life-=1;

          }
          }


        }
        for (var j = 0; j < acids.length; j++) {


          if (acids[j] != undefined) {
          if (specialCollide(player, acids[j], 0, 0) == true) {



                removeArrayElement(acids, j)
                removeArrayElement(acidAngles, j)
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

function createAmmo(){
    if(ammoArray[0]!=undefined){
    removeElement(ammoArray,0)
    }
var list = [0,random(-900,-100),random(1100,2900)]
var val = random(1,2)
var list2 = [0,random(-900,-100),random(1100,2900)]
var val2 = random(1,2)
var ammo = makegImage("images/ammo.png",list[val],list2[val2],90,70,1,"ammo")
ammoArray.push(ammo)
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
                
                ammoArray = []
                spiders = []
                acids = []
                acidAngles = []
                spitters = []
                spittercdns = [];

                lr=0
                ud=0


                drawBack()
drawPlants()
createAmmo()
drawSpitters();
enemySpawn();
              main.setAttribute("transform","translate(0,0)")
increase = increase+0.2;

              score++
              removeElement(floors)
              floors = makeText("Floor: "+score, 1700, 70, 80, "VT323", "white", 1)
              maketxt("Floor: "+score,870)
          }
          }


var screen = makeRect(0,0,2000,1000,"darkgrey",1,"load")

var txt = makeText("Shooty Knight", 680, 200, 100, "sans-serif", "white", 1)

var beginBt = makeRect(800,500,400,100,"white",1,"load")
var beginTxt = makeText("Begin", 910, 575, 70, "sans-serif", "black", 1)

var InfoBt = makeRect(800,700,400,100,"white",1,"load")
var InfoTxt = makeText("Info", 940, 775, 70, "sans-serif", "black", 1)

beginBt.addEventListener('click', function () {
start();
});

beginTxt.addEventListener('click', function () {
start();
});

InfoBt.addEventListener('click', function () {
info();
});

InfoTxt.addEventListener('click', function () {
info();
});

    var ibt = makeRect(6000,840,400,100,"white",1,"load")
    var itxt = makeText("Back", 6000, 915, 70, "sans-serif", "black", 1)

    var s = makeImage("images/spider.gif",6000,100,60,60,1,"ammo")
    var stxt = makeText(" - If you get close enough, this spider will chase you down until either you kill it, or it harms you.", 6000, 138, 40, "sans-serif", "black", 1)
    
    var sp = makeImage("images/spitter.gif",6000,250,60,60,1,"ammo")
    var sptxt = makeText(" - If you are within a certain range, this enemy will fire globs of acid towards you.", 6000, 288, 40, "sans-serif", "black", 1)
    
    var a = makeImage("images/ammo.png",6000,400,60,60,1,"ammo")
    var atxt = makeText(" - If you pick up this box of munitions, your gun's reload speed becomes quicker.", 6000, 438, 40, "sans-serif", "black", 1)
    
    var t = makeImage("images/trapdoor.png",6000,550,60,60,1,"ammo")
    var ttxt = makeText(" - Go through this trapdoor to move to the next floor, each floor slowly becoming harder.", 6000, 588, 40, "sans-serif", "black", 1)
    
function back(){
ibt.setAttribute("x",6000)
itxt.setAttribute("x",6000)

InfoTxt.setAttribute("x",940)
    InfoBt.setAttribute("x",800)
    beginTxt.setAttribute("x",910)
    beginBt.setAttribute("x",800)
    txt.setAttribute("x",680)
    s.setAttribute("x",6000)
    stxt.setAttribute("x",6000)
    sp.setAttribute("x",6000)
    sptxt.setAttribute("x",6000)
    atxt.setAttribute("x",6000)
    a.setAttribute("x",6000)
    ttxt.setAttribute("x",6000)
    t.setAttribute("x",6000)
}

function info(){
    InfoTxt.setAttribute("x",6000)
    InfoBt.setAttribute("x",6000)
    beginTxt.setAttribute("x",6000)
    beginBt.setAttribute("x",6000)
    txt.setAttribute("x",6000)
    ibt.setAttribute("x",1550)
    itxt.setAttribute("x",1670)
    s.setAttribute("x",100)
    stxt.setAttribute("x",200)
    sp.setAttribute("x",100)
    sptxt.setAttribute("x",200)
    a.setAttribute("x",100)
    atxt.setAttribute("x",200)
    ttxt.setAttribute("x",200)
    t.setAttribute("x",100)
if(ibt!==null){

    }
    else{
    ibt.setAttribute("x",1550)
    itxt.setAttribute("x",1670)
    }
    ibt.addEventListener('click', function () {
back();
});

itxt.addEventListener('click', function () {
back();
});
}

function startShots(){
shotBegin = true;
}

function start(){
    InfoTxt.setAttribute("x",6000)
    InfoBt.setAttribute("x",6000)
    beginTxt.setAttribute("x",6000)
    beginBt.setAttribute("x",6000)
    txt.setAttribute("x",6000)
    screen.setAttribute("x",6000)
drawBack()
drawPlants()
createAmmo()
enemySpawn();
gameLoop()
drawSpitters();
begin = true;
setTimeout(startShots, 10);
    
    
}