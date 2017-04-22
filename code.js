var bulletArray = [];
var values = [];
var jets = [];

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

function drawEverything() {
    if(gameOver == false) {
    drawJets()
    checkCollisionsMissiles()
drawShot()
requestAnimationFrame(drawEverything)
}
    else{
    makeText("You Have Failed.", 150, 250, 100, "sans-serif", "white", 1)
    }
}


var mouse = {x: 0, y: 0}
var turn = 0;



function turnLeft() {
    if(turn > -50) {
    var gun = document.getElementById("gun");
    turn -= 1.2;
    gun.setAttribute("transform", "rotate(" + turn + ",500,488)");

    }
}

function turnRight() {
    if(turn < 50) {
    var gun = document.getElementById("gun");
    turn += 1.2;
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
var value = (turn - 90)*(Math.PI/180)
    var x = Math.cos(value)*50+497
        var y = Math.sin(value)*50+490
var bullet = makeRect(x,y,6,6,"red",1)
bulletArray.push(bullet)
values.push(value)
}

function drawShot() {
for(var i = 0; i < bulletArray.length; i++) {
    if(getY(bulletArray[i])>0){
move(bulletArray[i],Math.cos(values[i])*7,Math.sin(values[i])*7)

    }
    else{

    removeArrayElement(bulletArray,i)
    removeArrayElement(values,i)
    }
}
}

function makeJets() {
var jet = makeImage("plane.png",-100,random(5,350),80,40,1)
jets.push(jet)
setTimeout(makeJets,1500)
}

function drawJets() {
for(var i = 0; i < jets.length;i++) {
    if(getX(jets[i])>1100) {
        lives--;
        removeElement(livesText)
        livesText = makeText("Lives: "+lives, 800, 50, 25, "sans-serif", "white", 1)
        if(lives <= 0) {
        gameOver = true;
        }
    removeArrayElement(jets, i)
    }
move(jets[i],6,0)
}
}

function checkCollisionsMissiles() {
    for (var i = 0; i < bulletArray.length; i++) {
    for (var j = 0; j < jets.length; j++) {
        for (var z = 0; z < values.length; z++) {
        j
          if (jets[j] != undefined && bulletArray[i] != undefined || values[z] != undefined) {  
          if (collide(bulletArray[i], jets[j], 0, -20) == true) {
               
                drawExplosion(getX(bulletArray[i]),getY(bulletArray[i]))
                removeArrayElement(bulletArray, i)
                removeArrayElement(values, z)
                removeArrayElement(jets, j)
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
    }

makeJets()
gameLoop();
drawEverything();