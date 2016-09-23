function talkButton() {
  var objDiv = document.getElementById("chat-area");
  var greetResponse = ["Hello", "What do YOU want", "What is it", "I'm busy can we wait till later", "Greetings", "Yeah, hi"]
  var randomResponse = Math.floor(Math.random() * 6) + 0;
  var currentdate = new Date();
  var hours = currentdate.getHours();
  if (hours > 12) {
    hours -= 12;
  }
  else if (hours === 0) {
     hours = 12;
  }
  var datetime = "It is currently " + hours + ":" + currentdate.getMinutes();
  var response = {
    "how old are you": "Very",
    "how old are you?": "Very",
    "hey": greetResponse[randomResponse],
    "hello": greetResponse[randomResponse],
    "hi": greetResponse[randomResponse],
    "yo": greetResponse[randomResponse],
    "hello devin": greetResponse[randomResponse],
    "greetings": greetResponse[randomResponse],
    "what is your name": "Devin Gaugahghangn",
    "whats your name": "Devin Gaugahghangn",
    "what time is it": datetime,  "whats the time": datetime,
    "where are you from": "The code that is currently being run I'd say",
    "what is your favorite color": "The color of freshly spilt blood",
    "what is your favorite food": "Human flesh",
    "how are you": "Better than you",
    "what do you mean": "Whatever I want to mean",
    "what is your gender": "Robot",
    "when is your birthday": "On the day I was born I'd say",
    "why": "Why not",
    "i hate you": "That's reasonable",
    "i like you": "I'm sorry to hear that",
    "i love you": "You have some life choices to rethink",
    "what color is your hair": "Bald",
    "who am i": "An ignorant power crazed demagogue. Oh, my bad, thought I was Trump for a second",
    "what are you": "Whatever I want to be",
    "who are you": "I am your ruler",
    "what is the meaning of life": "For you to stop annoying me",
    "i dont care": "Good",
  }

  var nonsense = ["No thanks I'm not interested", "Wow...", "Well that was rude", "Ugh... just stop", "Why are you like this", "Your lack of intelligence is quite disappointing", "Probably", "I don't have to answer that", "I don't appreciate your attitude", "...", "That's quite uncalled for", "You sadden me", "Huh, they weren't wrong when they said humans are ignorant"]
  var random = Math.floor(Math.random() * 13) + 0;

  //document.getElementById('chat-area').textContent = document.getElementById('input').value;
  if(document.getElementById('input').value != "") {
  //$("#chat-area").append(document.getElementById('input').value += "</br>");
  var message = document.getElementById('input').value;
  message = message.toLowerCase();
  $("#chat-area").append(document.getElementById('input').value += "</br>");
  if (response[message] === undefined || response[message] === null) {
     //$("#chat-area").append("<div class='grey'>I didn't quite understand that</div></br>");
     $("#chat-area").append("<div class='grey'>" + nonsense[random] + "</div></br>");
     document.getElementById('input').value = "";
     objDiv.scrollTop = objDiv.scrollHeight;
}
else {
  $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
  console.log(response[message]);
  document.getElementById('input').value = "";
  objDiv.scrollTop = objDiv.scrollHeight;
}
}
  //if(document.getElementById('input').value == responseArray){
  //  document.getElementById('chat-area').textContent = "Hello, how are you?";
  //}
  //else {
  //  document.getElementById('chat-area').textContent = "I'm sorry, I didn't quite get that";
  //}
}

//var possibleGreetings = {
//	"Hello": "Hi",
//	"hello": "Hi",
//}
