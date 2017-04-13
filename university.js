var monURL = ""


function showInfo(data) {
    document.getElementById("list").innerHTML = ""
    document.getElementById("list").innerHTML += "<h1 id='base'>Your Current Base: </h1>"
    var total = data
    total.rates[document.getElementById("input").value.toUpperCase()] = 1
    //console.log(total.rates[total.rates["USD"]])
    document.getElementById("base").innerHTML = "Your Current Base: " + data.base;
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"AUD: "+total.rates["AUD"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"BGN: "+total.rates["BGN"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"BRL: "+total.rates["BRL"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"CAD: "+total.rates["CAD"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"CHF: "+total.rates["CNY"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"CZK: "+total.rates["CZK"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"DKK: "+total.rates["DKK"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"GPB: "+total.rates["GBP"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"HKD: "+total.rates["HKD"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"HRK: "+total.rates["HRK"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"HUF: "+total.rates["HUF"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"IDR: "+total.rates["IDR"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"ILS: "+total.rates["ILS"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"INR: "+total.rates["INR"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"JPY: "+total.rates["JPY"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"KRW: "+total.rates["KRW"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"MXN: "+total.rates["MXN"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"MYR: "+total.rates["MYR"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"NOK: "+total.rates["NOK"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"NZD: "+total.rates["NZD"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"PHP: "+total.rates["PHP"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"PLN: "+total.rates["PLN"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"RON: "+total.rates["RON"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"RUB: "+total.rates["RUB"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"SEK: "+total.rates["SEK"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"SGD: "+total.rates["SGD"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"THB: "+total.rates["THB"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"TRY: "+total.rates["TRY"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"USD: "+total.rates["USD"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"ZAR: "+total.rates["ZAR"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"EUR: "+total.rates["EUR"]+"</a></li>"
}

function makeRequest() {
  $.ajax({
    url: monURL,
    success: function(data) {
      showInfo(data)
    }
  })
}

function submit() {
var input = document.getElementById("input").value;
monURL = "http://api.fixer.io/latest?base=" + input;
makeRequest();
}

var e 
var calc
var input

var e2
var calc2

function makeCalculations() {
  $.ajax({
    url: monURL,
    success: function(data) {
      showCalculations(data)
    }
  })
}



function calculate() {
input = document.getElementById("firstval").value;
     e = document.getElementById("sel");
 calc = e.options[e.selectedIndex].value;
monURL = "http://api.fixer.io/latest?base=" + calc;
    console.log(calc)
makeCalculations();
}

function showCalculations(data) {
         e2 = document.getElementById("sel2");
 calc2 = e2.options[e2.selectedIndex].value;
    console.log(calc2)
    document.getElementById("result").innerHTML = input*data.rates[calc2];

}