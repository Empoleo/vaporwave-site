var key = "7514c7f2bd284a3084e165159170902"
var weatherURL = ""
var sun = document.getElementById("sun").style.opacity;
var mun = document.getElementById("mun").style.opacity;

function showAnimal(data) {
    var total = data
var temp = total.current.temp_f;
    var condition = total.current.condition.text.toLowerCase();
    var time = total.current.is_day;
    var name = total.location.name
    var region = total.location.region
    var country = total.location.country
    document.getElementById("loca").innerHTML = name + ", " + region + ", " + country;
    var humidity = total.current.humidity
    var mph = total.current.wind_mph
    var localtime = total.location.localtime
    var feel = total.current.feelslike_f
    document.getElementById("con").innerHTML = "Wind: " + mph + " mph</br>" + "Humidity: " + humidity + "%</br>" + "Time: " + localtime + "</br>Temperature feel: " + feel + " degrees fahrenheit";
    if(time == 1) {
    document.getElementById("sun").style.opacity = 1;
    document.getElementById("mun").style.opacity = 0;
    }
    else{
    document.getElementById("sun").style.opacity = 0;
    document.getElementById("mun").style.opacity = 1;
    }
    if(temp <= 25) {
    document.getElementById("weatherinfocontainer").innerHTML = "It is " + temp + " degrees fahrenheit, as for the condition: " + condition + ".";
    document.getElementById("imagecontainer").innerHTML = "<img src='images/freezing.jpg' height='300' width='400'></img>";
    document.getElementById("color").style.background = "#4842f4";
    }
    else if(temp <= 45) {
    document.getElementById("weatherinfocontainer").innerHTML = "It is " + temp + " degrees fahrenheit, as for the condition: " + condition + ".";
    document.getElementById("imagecontainer").innerHTML = "<img src='images/cold.jpg' height='320' width='380'></img>";
    document.getElementById("color").style.background = "#42f4e8";
    }
    else if(temp <= 65) {
    document.getElementById("weatherinfocontainer").innerHTML = "It is " + temp + " degrees fahrenheit, as for the condition: " + condition + ".";
    document.getElementById("imagecontainer").innerHTML = "<img src='images/normal.jpg' height='300' width='400'></img>";
    document.getElementById("color").style.background = "#42f47a";
    }
    else if(temp <= 85) {
    document.getElementById("weatherinfocontainer").innerHTML = "It is " + temp + " degrees fahrenheit, as for the condition: " + condition + ".";
    document.getElementById("imagecontainer").innerHTML = "<img src='images/warm.jpg' height='300' width='400'></img>";
    document.getElementById("color").style.background = "orange";
    }
    else {
    document.getElementById("weatherinfocontainer").innerHTML = "It is " + temp + " degrees fahrenheit, as for the condition: " + condition + ".";
    document.getElementById("imagecontainer").innerHTML = "<img src='images/hot.jpg' height='300' width='400'></img>";
    document.getElementById("color").style.background = "red";
    }
    
}

function makeRequest() {
  $.ajax({
    url: weatherURL,
    success: function(data) {
      showAnimal(data)
    }
  })
}

function submit() {
var input = document.getElementById("zipcode").value;
weatherURL = "https://api.apixu.com/v1/current.json?key=" + key + "&q=" + input;
makeRequest();
}
