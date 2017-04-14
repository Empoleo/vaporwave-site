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
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"CHF: "+total.rates["CHF"]+"</a></li>"
    document.getElementById("list").innerHTML += "<li><a href='#'>"+"CNY: "+total.rates["CNY"]+"</a></li>"
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


function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

var ul = document.getElementById('list');
ul.onclick = function(event) {
    var target = getEventTarget(event);
    var result = target.innerHTML
    result = result.substring(0,3);
    explain(result)
    
};

function explain(para) {
        if(para == "AUD"){
document.getElementById("explanation").innerHTML = 'AUD, or Australian dollar, is the currency of the Commonwealth of Australia.'
}
if(para == "BGN"){
document.getElementById("explanation").innerHTML = 'BGN, or Bulgarian lev, is the currency of Bulgaria.'
}
if(para == "ZAR"){
document.getElementById("explanation").innerHTML = 'ZAR, or South African rand, is the currency of South Africa.'
}
if(para == "BRL"){
document.getElementById("explanation").innerHTML = 'BRL, or the Brazilian real, is the currency of Brazil.'
}
        if(para == "CAD"){
document.getElementById("explanation").innerHTML = 'CAD, or Canadian dollar, is the currency of Canada.'
}
if(para == "CHF"){
document.getElementById("explanation").innerHTML = 'CHF, or Swiss franc, is the currency of Switzerland and Liechtenstein.'
}
if(para == "CNY"){
document.getElementById("explanation").innerHTML = 'CNY, or Chinese yuan, is the basic currency of Renmibi, the currency of the People\'s Republic of China.'
}
if(para == "CZK"){
document.getElementById("explanation").innerHTML = 'CZK, or Czech kurana, is the currency of the Czech Republic'
}
        if(para == "DKK"){
document.getElementById("explanation").innerHTML = 'DKK, or Danish krone, is the currency of Denmark, Greenland and the Faroe Islands.'
}
if(para == "GPB"){
document.getElementById("explanation").innerHTML = 'GPB, or British pound, is the currency or similar currency of the United Kingdom, Egypt, Lebanon, South Sudan, Sudan, and Syria.'
}
if(para == "HKD"){
document.getElementById("explanation").innerHTML = 'HKD, or Hong Kong dollar, is the currency of Hong Kong.'
}
if(para == "HRK"){
document.getElementById("explanation").innerHTML = 'HRK, or Croatian kuna, is the currency of Croatia'
}
        if(para == "HUF"){
document.getElementById("explanation").innerHTML = 'HUF, or Hungarian forint, is the currency of Hungary.'
}
if(para == "IDR"){
document.getElementById("explanation").innerHTML = 'IDR, or Indonesian rupiah, is the currency of Indonesia.'
}
if(para == "ILS"){
document.getElementById("explanation").innerHTML = 'ILS, or Israeli new shekel, is the currency of Israel.'
}
if(para == "INR"){
document.getElementById("explanation").innerHTML = 'INR, or Indian rupee, is the currency of the Republic of India.'
}
        if(para == "JPY"){
document.getElementById("explanation").innerHTML = 'JPY, or Japanese yen, is the currency of Japan.'
}
if(para == "KRW"){
document.getElementById("explanation").innerHTML = 'KRW, or South Korean won, is the currency of South Korea.'
}
if(para == "MXN"){
document.getElementById("explanation").innerHTML = 'MXN, or Mexican peso, is the currency of Mexico.'
}
if(para == "MYR"){
document.getElementById("explanation").innerHTML = 'MYR, or Malaysian ringgit, is the currency of Malaysia.'
}
        if(para == "NOK"){
document.getElementById("explanation").innerHTML = 'NOK, or Norwegian krone, is the currency of  currency of Norway and its dependent territories.'
}
if(para == "NZD"){
document.getElementById("explanation").innerHTML = 'NZD, or New Zealand dollar, is the currency and legal tender of New Zealand, the Cook Islands, Niue, the Ross Dependency, Tokelau, and a British territory, the Pitcairn Islands.'
}
if(para == "PHP"){
document.getElementById("explanation").innerHTML = 'PHP, or Philippine Peso, is the currency of the Philippines.'
}
if(para == "PLN"){
document.getElementById("explanation").innerHTML = 'PLN, or Polish zloty, is the currency of Poland.'
}
        if(para == "RON"){
document.getElementById("explanation").innerHTML = 'RON, or Romanian leu, is the currency of Romania.'
}
if(para == "RUB"){
document.getElementById("explanation").innerHTML = 'RUB, or Russian ruble, is the currency of the Russian Federation, along with the two partially recognized republics of South Ossetia and Abkhazia, as well as the two unrecognized republics of Donetsk and Luhansk.'
}
if(para == "SEK"){
document.getElementById("explanation").innerHTML = 'SEK, or Swedish krona, is the currency of Sweden.'
}
if(para == "SGD"){
document.getElementById("explanation").innerHTML = 'SGD, or Singapore dollar, is the currency of Singapore.'
}
    if(para == "THB"){
document.getElementById("explanation").innerHTML = 'THB, or Thai baht, is the currency of Thailand.'
}
    
    if(para == "TRY"){
document.getElementById("explanation").innerHTML = 'TRY, or Turkish lira, is the currency of Turkey and the Turkish Republic of Northern Cyprus.'
}
if(para == "USD"){
document.getElementById("explanation").innerHTML = 'USD, or United States dollar, is the currency of the United States and it\'s territories.'
}
if(para == "ZAR"){
document.getElementById("explanation").innerHTML = 'ZAR, or South African rand, is the currency of South Africa.'
}
if(para == "EUR"){
document.getElementById("explanation").innerHTML = 'EUR, or Euro, is the currency of the European Union.'
}
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
monURL = "https://api.fixer.io/latest?base=" + input;
makeRequest();
}

var e 
var calc
var input

var e2
var calc2
var equal

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
monURL = "https://api.fixer.io/latest?base=" + calc;
    console.log(calc)
makeCalculations();
}

function showCalculations(data) {
    
         e2 = document.getElementById("sel2");
 calc2 = e2.options[e2.selectedIndex].value;
    equal = {calc2: 1}
    console.log(calc2)
if(calc != calc2){
document.getElementById("result").innerHTML = input*data.rates[calc2];
}
    else{
    document.getElementById("result").innerHTML = input;
    }

}