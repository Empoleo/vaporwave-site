var bulletArray = [];
var values = [];
var jets = [];
var drops = [];

var gameOver = false;
var score = 0
var scoreText = makeText("Score: 0", 660, 50, 25, "sans-serif", "white", 1)
var lives = 3
var livesText = makeText("Lives: 3", 800, 50, 25, "sans-serif", "white", 1)
var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

x = 100;

function gameLoop() {
    if(gameOver == false) {
    if (keyState[37] || keyState[65]){
        turnLeft();
    }    
    if (keyState[39] || keyState[68]){
        turnRight();
    }

    // redraw/reposition your object here
    // also redraw/animate any objects not controlled by the user

    setTimeout(gameLoop, 10);
    }
}    

function drawEverything() {
    if(gameOver == false) {
        drawDrops()
    drawJets()
drawShot()
checkDrops()
checkCollisionsShots()
requestAnimationFrame(drawEverything)
}
    else{
    makeText("You Have Failed.", 145, 250, 100, "sans-serif", "white", 1)
    }
}


var mouse = {x: 0, y: 0}
var turn = 0;



function turnLeft() {
    if(turn > -50) {
    var gun = document.getElementById("gun");
    turn -= 1.5;
    gun.setAttribute("transform", "rotate(" + turn + ",500,488)");

    }
}

function turnRight() {
    if(turn < 50) {
    var gun = document.getElementById("gun");
    turn += 1.5;
    gun.setAttribute("transform", "rotate(" + turn + ",500,488)");

    }
}

document.addEventListener('keydown', function (e) {
    if (32 == e.keyCode) {
     shotPrepare();
  }
});

var cdn = false;

function shotPrepare() {
    if(cdn == false){
fireShot()
cdn=true;
setTimeout(function() {cdn = false;}, 600)
    }
    

}

function fireShot(){
    if(gameOver == false){
var value = (turn - 90)*(Math.PI/180)
    var x = Math.cos(value)*50+497
        var y = Math.sin(value)*50+490
var bullet = makeRect(x,y,6,6,"red",1)
bulletArray.push(bullet)
values.push(value)
    }
}

function drawShot() {
for(var i = 0; i < bulletArray.length; i++) {
    if(getY(bulletArray[i])>0 && getX(bulletArray[i])<1000){
move(bulletArray[i],Math.cos(values[i])*7,Math.sin(values[i])*7)

    }
    else{

    removeArrayElement(bulletArray,i)
    removeArrayElement(values,i)
    }
}
}

function makeJets() {
    if(jets.length<10){
var jet = makeImage("plane.png",-100,random(5,350),80,40,1)
jets.push(jet)
if(gameOver == false) {
setTimeout(makeJets,random(500,2000))
}
}
}

function drawJets() {
for(var i = 0; i < jets.length;i++) {

move(jets[i],6,0)
    if(getX(jets[i])>1100) {
        lives--;
        removeElement(livesText)
        livesText = makeText("Lives: "+lives, 800, 50, 25, "sans-serif", "white", 1)
        if(lives <= 0) {
        gameOver = true;
        }
    removeArrayElement(jets, i)
    }
}
}

function checkCollisionsShots() {
    for (var i = 0; i < bulletArray.length; i++) {
    for (var j = 0; j < jets.length; j++) {

        
          if (jets[j] != undefined && bulletArray[i] != undefined && values[i] != undefined) {  
          if (collide(bulletArray[i], jets[j], 0, -20) == true) {
               
                drawExplosion(getX(bulletArray[i]),getY(bulletArray[i]))
                removeArrayElement(bulletArray, i)
                
                removeArrayElement(jets, j)
                removeArrayElement(values, i)
                i++;
                j++;

                score++;
                removeElement(scoreText)
                scoreText = makeText("Score: "+score, 660, 50, 25, "sans-serif", "white", 1)
          
          }
            
        }
    }
        }
    }

function checkDrops() {
    for (var i = 0; i < bulletArray.length; i++) {
    for (var p = 0; p < drops.length; p++) {

        
          if (drops[p] != undefined && bulletArray[i] != undefined && values[i] != undefined) {  
          if (collide(bulletArray[i], drops[p], 0, -20) == true) {
                removeArrayElement(bulletArray, i)
                removeArrayElement(drops, p)
                removeArrayElement(values, i)
                i++;
                p++;

                lives++;
                removeElement(livesText)
                livesText = makeText("Lives: "+lives, 800, 50, 25, "sans-serif", "white", 1)
                score++;
                removeElement(scoreText)
                scoreText = makeText("Score: "+score, 660, 50, 25, "sans-serif", "white", 1)
          
          
            
        }
        }
    }
        }
    }

function makeDrops() {
    if(drops.length<2){
var drop = makeImage("supply.png",random(0,500),-100,60,60,1)
drops.push(drop)
if(gameOver == false) {
setTimeout(makeDrops,4000)
}
}
}

function drawDrops() {
for(var i = 0; i < drops.length;i++) {

move(drops[i],2,4)
if(getX(drops[i])>1100) {

    removeArrayElement(drops, i)
    }
}
}

document.getElementById("begin").addEventListener('click', start)

function start() {
    document.getElementById("start").setAttribute("opacity", 0)
    document.getElementById("txt").setAttribute("opacity", 0)
    document.getElementById("begin").setAttribute("opacity", 0)
    document.getElementById("begin").setAttribute("x", 1500)
    document.getElementById("extra").setAttribute("opacity", 0)
setTimeout(makeDrops,4000);
setTimeout(makeJets,4000);
gameLoop();
drawEverything();
}