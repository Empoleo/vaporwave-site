var key = Math.floor(Math.random() * 4);

var dictionary = {0:"song", 1:"song2", 2:"song3", 3:"song4"};

document.getElementById("music").innerHTML="<div id='audio'><audio src='other/"+dictionary[key]+".mp3' loop='true' autoplay='true'>Audio is not supported</audio>"
