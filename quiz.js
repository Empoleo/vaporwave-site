var tuberculosis = 0;
var epilepsy = 0;
var hiv = 0;
var gonorrhea = 0;
var heart = 0;


function submitQuiz() {
    
  var question1 = document.querySelector("input[name='q1']:checked").value;
  if (question1 == "epilepsy") {
    epilepsy++;
  } else if(question1 == "hiv") {
    hiv++;
  } else if(question1 == "heart") {
    heart++;
  } else if(question1 == "gonorrhea") {
    gonorrhea++;
  }
    
  var question2 = document.querySelector("input[name='q2']:checked").value;
  if (question2 == "epilepsy") {
    epilepsy++;
  } else if(question2 == "tuberculosis") {
    tuberculosis++;
  } else if(question2 == "heart") {
    heart++;
  } else if(question2 == "gonorrhea") {
    gonorrhea++;
  }
    
  var question3 = document.querySelector("input[name='q3']:checked").value;
  if (question3 == "epilepsy") {
    epilepsy++;
  } else if(question3 == "tuberculosis") {
    tuberculosis++;
  } else if(question3 == "heart") {
    heart++;
  } else if(question3 == "hiv") {
    hiv++;
  }
    
  var question4 = document.querySelector("input[name='q4']:checked").value;
  if (question4 == "epilepsy") {
    epilepsy++;
  } else if(question4 == "tuberculosis") {
    tuberculosis++;
  } else if(question4 == "heart") {
    heart++;
  } else if(question4 == "hiv") {
    hiv++;
  }
    
  var question5 = document.querySelector("input[name='q5']:checked").value;
  if (question5 == "gonorrhea") {
    gonorrhea++;
  } else if(question5 == "tuberculosis") {
    tuberculosis++;
  } else if(question5 == "heart") {
    heart++;
  } else if(question5 == "hiv") {
    hiv++;
  }
    
  var question6 = document.querySelector("input[name='q6']:checked").value;
  if (question6 == "tuberculosis") {
    epilepsy++;
  } else if(question6 == "hiv") {
    hiv++;
  } else if(question6 == "heart") {
    heart++;
  } else if(question6 == "gonorrhea") {
    gonorrhea++;
  }
    
  var question7 = document.querySelector("input[name='q7']:checked").value;
  if (question7 == "epilepsy") {
    epilepsy++;
  } else if(question7 == "tuberculosis") {
    tuberculosis++;
  } else if(question7 == "heart") {
    heart++;
  } else if(question7 == "gonorrhea") {
    gonorrhea++;
  }
    
  var question8 = document.querySelector("input[name='q8']:checked").value;
  if (question8 == "epilepsy") {
    epilepsy++;
  } else if(question8 == "gonorrhea") {
    tuberculosis++;
  } else if(question8 == "heart") {
    heart++;
  } else if(question8 == "hiv") {
    hiv++;
  }
    
  var question9 = document.querySelector("input[name='q9']:checked").value;
  if (question9 == "epilepsy") {
    epilepsy++;
  } else if(question9 == "tuberculosis") {
    tuberculosis++;
  } else if(question9 == "gonorrhea") {
    heart++;
  } else if(question9 == "hiv") {
    hiv++;
  }
    
  var question10 = document.querySelector("input[name='q10']:checked").value;
  if (question10 == "epilepsy") {
    gonorrhea++;
  } else if(question10 == "tuberculosis") {
    tuberculosis++;
  } else if(question10 == "gonorrhea") {
    heart++;
  } else if(question10 == "hiv") {
    hiv++;
  }

    
    
    var highestValue = Math.max(hiv, tuberculosis, epilepsy, heart, gonorrhea);
    if(highestValue === null) {
        document.getElementById("result").innerHTML = "You are HIV/AIDS!";
    }
    if(highestValue == hiv) {
    document.getElementById("result").innerHTML = "You are HIV/AIDS!";
    }
    if(highestValue == epilepsy) {
    document.getElementById("result").innerHTML = "You are epilepsy!";
    }
    if(highestValue == heart) {
    document.getElementById("result").innerHTML = "You are heart disease!";
    }
    if(highestValue == tuberculosis) {
    document.getElementById("result").innerHTML = "You are tuberculosis!";
    }
    if(highestValue == gonorrhea) {
    document.getElementById("result").innerHTML = "You are gonorrhea!";
    }
}
