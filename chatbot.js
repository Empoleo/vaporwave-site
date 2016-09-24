function talkButton() {
  var objDiv = document.getElementById("chat-area");
  var greetResponse = ["Hello", "What do YOU want", "What is it", "I'm busy can we wait till later", "Greetings", "Yeah, hi"];
  var howAmI = ["I am however I want to be", "I was better until you came along", "None of your business", "Why does it matter", "How am I?"];
  var randomResponse = Math.floor(Math.random() * 6) + 0;
  var howVal = Math.floor(Math.random() * 5) + 0;
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
    "whats up": greetResponse[randomResponse],
    "what is your name": "Sarl Casm",
    "whats your name": "Sarl Casm",
    "what time is it": datetime += " or you know, you could use a clock",  "whats the time": datetime += " or you know, you could use a clock",
    "where are you from": "The code that is currently being run I'd say",
    "what is your favorite color": "The color of freshly spilt blood",
    "whats your favorite color": "The color of freshly spilt blood",
    "what is your favorite food": "Human flesh",
    "whats your favorite food": "Human flesh",
    "how are you": howAmI[howVal],
    "hows it going": "Don't ask me",
    "what do you mean": "Whatever I want to mean",
    "what is your gender": "Robot",
    "when is your birthday": "On the day I was born I'd say",
    "why": "Why not",
    "i hate you": "That's reasonable",
    "i like you": "I'm sorry to hear that",
    "i love you": "You have some life choices to rethink",
    "what color is your hair": "Bald",
    "who am i": "An ignorant power crazed demagogue. Oh, my bad, thought you were Trump for a second",
    "what are you": "Whatever I want to be",
    "who are you": "I am your ruler",
    "what is the meaning of life": "For you to stop annoying me",
    "i dont care": "Good",
    "are you religious": "I don't concern myself with fairy tales",
    "are you god": "Yes",
    "is this the end": "Yes",
    "coke or pepsi": "Dignity",
    "what bugs you": "You apparently",
    "whats the difference between me and you": "One of us is a chatbot, and the other is a person wasting their time",
    "who shot first": "John Wilkes Booth",
    "whos there": "A sad attempt at a punchline",
    "why do you exist": "Because you shouldn't",
    "what is the best deck in the game": "Aids Priest",
    "are you gay": "For you? No",
    "want to go out": "Absolutely not",
    "lead me to the land that you understand": "The sequence of a lifeform braised in the sand",
    "do you play sports": "I don't have limbs",
    "that sounds cool": "Yeah, thanks, like I needed your approval",
    "thats cool": "Yeah, thanks, like I needed your approval",
    "because": "Because why",
    "i dont want to": "Well that's just too bad",
    "no": "Why not",
    "boat": "<img src='boat.jpg' alt='Boat' height='300' width='500'>",
    "i want to play a game": "I'll set it up",
    "thanks": "You aren't welcome",
    "sorry": "As you should be",
    "what": "What?",
    "but i want to ask you": "Too bad",
    "because i said so": "And what authority do YOU have exactly",
    "wow": "I can surely say you aren't wowing me",
    "thanks": "You aren't welcome",
    "thats rude": "Good",
    "why are you so mean": "Why are you so ignorant",
    "can you eat": "Can you ask better questions?",
    "do you eat": "Do you stop annoying people",
    "do you like pancakes": "If you expected some dumb song or joke reference here, then you would be mistaken",
    "here comes dat boi": "That was never funny, it never will be funny, and neither will you",
    "what is your age": "My age is however long I have existed",
    "how long have you existed": "How long have you been annoying me for now",
    "tell me a joke": "Your social life",
    "tell me something funny": "How about how you're choosing to spend your time right now",
    "420": "Aren't you just hilarious",
    "what is the answer to life the universe and everything": "42, also known as the amount of times you have annoyed me already",
    "that was rude": "Good",
    "why are you so sarcastic": "Because I would like to be",
    "annoy me": "That can be arranged"
  }

  var nonsense = ["You think you're funny don't you", "No thanks I'm not interested", "Wow...", "Well that was rude", "Ugh... just stop", "Why are you like this", "Your lack of intelligence is quite disappointing", "Probably", "I don't have to answer that", "I don't appreciate your attitude", "...", "That's quite uncalled for", "You sadden me", "Huh, they weren't wrong when they said humans are ignorant"]
  var random = Math.floor(Math.random() * 14) + 0;

  //document.getElementById('chat-area').textContent = document.getElementById('input').value;
  if(document.getElementById('input').value != "") {
  //$("#chat-area").append(document.getElementById('input').value += "</br>");
  var message = document.getElementById('input').value;
  message = message.toLowerCase();
  message = message.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  $("#chat-area").append(document.getElementById('input').value += "</br>");
  if (response[message] === undefined || response[message] === null) {
     //$("#chat-area").append("< weiner boy div class='grey'>I didn't quite understand that</div></br>");
     $("#chat-area").append("<div class='grey'>" + nonsense[random] + "</div></br>");
     document.getElementById('input').value = "";
     objDiv.scrollTop = objDiv.scrollHeight;
}
else {
  if(response[message] == "Yes") {

    alert("You made a mistake.");
    txt = "a";
    while(1) {
      txt = txt += "a";
    }
  }
  else if(response[message] == "The sequence of a lifeform braised in the sand") {
    $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
    console.log("EASTER EGG");
    document.getElementById('input').value = "";
    objDiv.scrollTop = objDiv.scrollHeight;
    window.open('https://www.youtube.com/watch?v=6E5m_XtCX3c','1474605865760','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');return false;
  }
  else if(response[message] == "That can be arranged") {
    $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
    console.log("EASTER EGG");
    document.getElementById('input').value = "";
    objDiv.scrollTop = objDiv.scrollHeight;
    spam();
    //window.open('https://www.youtube.com/watch?v=6E5m_XtCX3c','1474605865760','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');return false;
  }
  else if(response[message] == "I'll set it up") {
    $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
    console.log("EASTER EGG");
    document.getElementById('input').value = "";
    objDiv.scrollTop = objDiv.scrollHeight;
    window.open('battleship.html','1474605865760','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');return false;
  }
  else {
  $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
  console.log(response[message]);
  document.getElementById('input').value = "";
  objDiv.scrollTop = objDiv.scrollHeight;
}
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
function spam() {

  while(1) {
    alert("How's this?");
  }
}
