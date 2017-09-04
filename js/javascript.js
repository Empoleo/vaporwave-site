function music() {
$("#container").load("html/music.html .music");
}

function home() {
$("#container").load("html/home.html .home");
}

function about() {
$("#container").load("html/about.html .about");
}

function merchandise() {
$("#container").load("html/merchandise.html .merchandise");
}

function tour() {
$("#container").load("html/tour.html .tour");
}

var hurtval = false;
var insideval = false;
var melodyval = false;
var blindval = false;

function hurtlist(){
if(hurtval==false){

}
else{
hurtval=true;
}
}

function insidelist(){
if(insideval==false){
    insideval=true;
document.getElementById("insidelist").innerHTML="<ul class='list-group'><li class='list-group-item'><b>Songs:</b></li><li class='list-group-item'>heartbeat - 1.99$</li><li class='list-group-item'>disconnect - 1.99$</li><li class='list-group-item'>corrosion - 1.99$</li><li class='list-group-item'>loop - 1.99$</li></ul>"
}
else{
insideval=false;
document.getElementById("insidelist").innerHTML=""
}
}

function hurtlist(){
if(hurtval==false){
    hurtval=true;
document.getElementById("hurtlist").innerHTML="<ul class='list-group'><li class='list-group-item'><b>Songs:</b></li><li class='list-group-item'>missing - 1.99$</li><li class='list-group-item'>blood - 1.99$</li><li class='list-group-item'>break - 1.99$</li><li class='list-group-item'>forgotten - 1.99$</li></ul>"
}
else{
hurtval=false;
document.getElementById("hurtlist").innerHTML=""
}
}

function blindlist(){
if(blindval==false){
    blindval=true;
document.getElementById("blindlist").innerHTML="<ul class='list-group'><li class='list-group-item'><b>Songs:</b></li><li class='list-group-item'>ignorant - 1.99$</li><li class='list-group-item'>past - 1.99$</li><li class='list-group-item'>return - 1.99$</li><li class='list-group-item'>block - 1.99$</li></ul>"
}
else{
blindval=false;
document.getElementById("blindlist").innerHTML=""
}
}

function melodylist(){
if(melodyval==false){
    melodyval=true;
document.getElementById("melodylist").innerHTML="<ul class='list-group'><li class='list-group-item'><b>Songs:</b></li><li class='list-group-item'>tuned - 1.99$</li><li class='list-group-item'>focus - 1.99$</li><li class='list-group-item'>note - 1.99$</li><li class='list-group-item'>gone - 1.99$</li></ul>"
}
else{
melodyval=false;
document.getElementById("melodylist").innerHTML=""
}
}