var key = "7514c7f2bd284a3084e165159170902"
var weatherURL = ""


function showAnimal(data) {
var temp = data.current.temp_f;
    var condition = data.current.condition.text.toLowerCase();
    console.log(temp)
    if(temp <= 20) {
    document.getElementById("weatherinfocontainer").innerHTML = "It is " + temp + " degrees, as for the condition: " + condition + ".";
    document.getElementById("imagecontainer").innerHTML = "<img src='images/freezing.jpg'></img>";
    }
    else if(temp <= 40) {
    document.getElementById("weatherinfocontainer").innerHTML = "It is " + temp + " degrees, as for the condition: " + condition + ".";
    document.getElementById("imagecontainer").innerHTML = "<img src='images/cold.jpg'></img>";
    }
    else if(temp <= 60) {
    document.getElementById("weatherinfocontainer").innerHTML = "It is " + temp + " degrees, as for the condition: " + condition + ".";
    document.getElementById("imagecontainer").innerHTML = "<img src='images/normal.jpg'></img>";
    }
    else if(temp <= 80) {
    document.getElementById("weatherinfocontainer").innerHTML = "It is " + temp + " degrees, as for the condition: " + condition + ".";
    document.getElementById("imagecontainer").innerHTML = "<img src='images/warm.jpg'></img>";
    }
    else {
    document.getElementById("weatherinfocontainer").innerHTML = "It is " + temp + " degrees, as for the condition: " + condition + ".";
    document.getElementById("imagecontainer").innerHTML = "<img src='images/hot.jpg'></img>";
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
