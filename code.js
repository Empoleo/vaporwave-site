var rotation = 0;
var lines = [];
var carArray = [];
var boulderList = [];


var gameOver = false;


var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;

},true);    
window.addEventListener('keyup',function(e){

    if(e.keyCode == 38||e.keyCode == 87) {
    accel=0;
    }
    if(e.keyCode == 40||e.keyCode == 83) {
    baccel=0;
    }
    
    keyState[e.keyCode || e.which] = false;
},true);

x = 100;

var driving = false;
var drivingback = false;

var accel = 0;
var baccel = 0;

function create(){
var car = makeImage("turncar.png",800,480,80,110,1,"car")
}



function gameLoop() {
if(gameOver == false) {
    if (keyState[37] || keyState[65]){
        turnLeft();
    }    
    if (keyState[39] || keyState[68]){
        turnRight();
    }
       if (keyState[40] || keyState[83]){
           if(baccel<8){
        baccel = baccel + 0.1
    }
        backwards();
           drivingback = true;
    }
    else{
    drivingback = false;
    }
        if (keyState[38] || keyState[87]){
            if(accel<8){
        accel = accel + 0.1
    }
       drive();
            driving = true;
        }
    else{
    driving = false;
    }
checkCollisions()
checkCollisionsBoulders()

if(getX(car)>2000||getX(car)<-50||getY(car)<-50||getY(car)>950){
gameOver = true;
}

    setTimeout(gameLoop, 10);
}    }

var mouse = {x: 0, y: 0}

function turnLeft() {
    if(driving == true||drivingback == true) {
    rotation -= 1.5;
    car.setAttribute("transform", "rotate(" + rotation + ","+ (getX(car)+40) +","+ (getY(car)+65) +")");
    }
}


function turnRight() {
    if(driving == true||drivingback == true) {
    rotation += 1.5;
car.setAttribute("transform", "rotate(" + rotation + ","+ (getX(car)+40) +","+ (getY(car)+65) +")");
    }
}

function drive() {
    var value = rotation*(Math.PI/180)
move(car,Math.cos(value)*accel,Math.sin(value)*accel)

car.setAttribute("transform", "rotate(" + rotation + ","+ (getX(car)+40) +","+ (getY(car)+65) +")");
}

function backwards() {
    var value = rotation*(Math.PI/180)
move(car,-(Math.cos(value)*baccel),-(Math.sin(value)*baccel))

car.setAttribute("transform", "rotate(" + rotation + ","+ (getX(car)+40) +","+ (getY(car)+65) +")");
}

function initialize(){
    if (gameOver == false) {
    var val = 50
for(var i=0;i<21;i++){
var line = makeRect(val,495,50,10,"yellow",1)
lines.push(line)
    val = val+100;
}
}
}
    
function drawRoad(){
    if(gameOver == false){
    for(var i = 0;i<21;i++) {
    move(lines[i],-2,0)
    if(getX(lines[i])<-50) {
    setX(lines[i],2050)
    }
    }
    setTimeout(drawRoad,1)
}
}

function checkCollisions() {
    for (var i = 0; i < carArray.length; i++) {

            
          if (car != undefined && carArray[i] != undefined) {  
          if (collide(car, carArray[i], 10, 10) == true) {
               
                drawExplosion(getX(car)+40,getY(car)+65)
                
                gameOver = true;
                i++;
                
          }
         
            }
            }
        }

function checkCollisionsBoulders() {
    for (var i = 0; i < boulderList.length; i++) {

            
          if (car != undefined && boulderList[i] != undefined) {  
          if (collide(car, boulderList[i], 10, 10) == true) {
               
                drawExplosion(getX(car)+40,getY(car)+65)
                
                gameOver = true;
                i++;
                
          }
         
            }
            }
        }
        
function makeBoulders() {
    if(gameOver == false) {
var obstacle = makeImage("boulder.png",random(500,2000),-100,120,120,1,"boulder")
boulderList.push(obstacle)
setTimeout(makeBoulders,1500)
}
}


function drawBoulders() {
    if(gameOver == false) {
for(var i = 0; i < boulderList.length;i++) {

move(boulderList[i],-4,2)
    if(getX(boulderList[i])<-100) {
        
    removeArrayElement(boulderList, i)
    }
}
    setTimeout(drawBoulders,1)
}
}




function makeRocks() {
    if(gameOver == false) {
var obstacle = makeImage("rock.png",2100,random(-10,1000),120,120,1,"rock")
carArray.push(obstacle)
setTimeout(makeRocks,200)
}
}


function drawRocks() {
    if(gameOver == false) {
for(var i = 0; i < carArray.length;i++) {

move(carArray[i],-2,0)
    if(getX(carArray[i])<-100) {
        
    removeArrayElement(carArray, i)
    }
}
    setTimeout(drawRocks,1)
}
}


function back() {
    if(gameOver == false) {
move(car,-2,0)
car.setAttribute("transform", "rotate(" + rotation + ","+ (getX(car)+40) +","+ (getY(car)+65) +")");
setTimeout(back,1)
}
}

document.getElementById("begin").addEventListener('click', start)
document.getElementById("extra").addEventListener('click', start)

function start(){

    document.getElementById("start").setAttribute("opacity", 0)
    document.getElementById("txt").setAttribute("opacity", 0)
    document.getElementById("begin").setAttribute("opacity", 0)
    document.getElementById("begin").setAttribute("x", 1500)
    document.getElementById("extra").setAttribute("opacity", 0)
    document.getElementById("extra").setAttribute("x", 1500)
    initialize();
    create();
drawRoad();
makeRocks();
drawRocks();
setTimeout(makeBoulders,1000)
drawBoulders();
gameLoop();
back();
}


