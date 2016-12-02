var val = 700;
var yval = 375;



var foodEaten = 0;

var timeStart = Date.now()

var endcheck = 0;

var bool = true;
// var overlap = (PlayX <= FoodX - 100 && PlayX <= FoodX + 100 && PlayY >= FoodY - 200 && PlayY <= FoodY + 200);

  var randur1 = 8;
    var randur2 = 8;

var tx = document.getElementById("qq");
var a = document.getElementById("wop");

function restart() {
  Location.reload();
}


document.addEventListener("keydown", function(e) {
  var PlayX = Number(document.getElementById("numb").getAttribute("x"));
  var PlayY = Number(document.getElementById("numb").getAttribute("y"));
  var FoodX = Number(document.getElementById("spag").getAttribute("x"));
  var FoodY = Number(document.getElementById("spag").getAttribute("y"));

  var EneX = Number(document.getElementById("frot").getAttribute("x"));
  var EneY = Number(document.getElementById("frot").getAttribute("y"));

  var Food2X = Number(document.getElementById("spago").getAttribute("x"));
  var Food2Y = Number(document.getElementById("spago").getAttribute("y"));

  var ran = Math.floor((Math.random() * 650) + 0);
  var ran1 = Math.floor((Math.random() * 650) + 0);

  if(PlayX >= EneX - 100 && PlayX <= EneX + 100 && PlayY >= EneY - 100 && PlayY <= EneY + 100) {

    var popo = document.getElementById("box");
    popo.setAttribute("opacity", 1);

    var ewok = document.getElementById("txt");
    txt.setAttribute("opacity", 1);

    tx.innerHTML = "You Lost!";
    endcheck = 1;
    tx.setAttribute("opacity", 1);
    var e = document.getElementById("end");
    e.setAttribute("opacity", 1);
    var y = document.getElementById("chro");
    y.setAttribute("opacity", 0);
    wop.setAttribute("opacity", 1)
        document.getElementById("p").pauseAnimations()
    //randur1*=0.9;
    //document.getElementById("spagA").setAttribute("dur", randur1);
    //foodEaten++;
    //document.getElementById("chro").textContent = "Chromosomes Collected: ";
    //    document.getElementById("chro").textContent += foodEaten;
  }


  if(PlayX >= FoodX - 100 && PlayX <= FoodX + 100 && PlayY >= FoodY - 100 && PlayY <= FoodY + 100) {
    document.getElementById("spag").setAttribute("y", ran)
    randur1*=0.9;
    document.getElementById("spagA").setAttribute("dur", randur1);
    foodEaten++;
    document.getElementById("chro").textContent = "Chromosomes Collected: ";
        document.getElementById("chro").textContent += foodEaten;
  }
  if(PlayX >= Food2X - 100 && PlayX <= Food2X + 100 && PlayY >= Food2Y - 100 && PlayY <= Food2Y + 100) {
    document.getElementById("spago").setAttribute("y", ran1)
    randur2*=0.9;
    document.getElementById("spagB").setAttribute("dur", randur2);
    foodEaten++;

    document.getElementById("chro").textContent = "Chromosomes Collected: ";
        document.getElementById("chro").textContent += foodEaten;

  }

  if (foodEaten >= 46) {

tx.innerHTML = "You Collected All 46 Chromosomes!";
endcheck = 1;
tx.setAttribute("opacity", 1);
var e = document.getElementById("end");
e.setAttribute("opacity", 1);

var popo = document.getElementById("box");
popo.setAttribute("opacity", 1);

var ewok = document.getElementById("txt");
txt.setAttribute("opacity", 1);

var y = document.getElementById("chro");
y.setAttribute("opacity", 0);
wop.setAttribute("opacity", 1)
    document.getElementById("p").pauseAnimations()

}


  if (endcheck == 1) {
    if(bool == true) {
      a.innerHTML = "Game Duration: ";
      var timeStop = Date.now();
      var en = timeStop - timeStart;
      a.innerHTML += Math.round(en/1000);
      a.innerHTML += " Seconds"
      endcheck = 0;
      bool = false;
    }
  }

  var b = document.getElementById("numb");
  if (e.keyCode == 37) {
 val -= 30;

  b.setAttribute("x", val);

  }
  if (e.keyCode == 39) {
    val += 30;

  b.setAttribute("x", val);

  }
  if (e.keyCode == 38) {
    yval -= 30;

  b.setAttribute("y", yval);

}
  if (e.keyCode == 40) {
    yval += 30;

  b.setAttribute("y", yval);

  }

}
)



setInterval(

  function(){ if(bool == true){ var sol = Math.floor((Math.random() * 650) + 0); document.getElementById("frot").setAttribute("y",sol)}},7000);
