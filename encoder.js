var shift = {
  "a": "z",
  "b": "a",
  "c": "b",
  "d": "c",
  "e": "d",
  "f": "e",
  "g": "f",
  "h": "g",
  "i": "h",
  "j": "i",
  "k": "k",
  "l": "l",
  "m": "l",
  "n": "m",
  "o": "n",
  "p": "o",
  "q": "p",
  "r": "z",
  "s": "r",
  "t": "s",
  "u": "t",
  "v": "u",
  "w": "v",
  "x": "w",
  "y": "x",
  "z": "y",
  " ": " "
}





//Check for true radio buttons
$("input[type='radio']").click(function() {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});

$("#inputArea").keydown(function(e) {
  if(e.keyCode == 13) {
  if ($("input:checked").val() == "echo") {

        $("#textArea").append(document.getElementById('inputText').value += " ");
        document.getElementById('inputText').value = "";

    }

  //Splits user input, divides into a individual characters
  else if ($("input:checked").val() == "caesar") {

    var ex = document.getElementById('inputText').value;

    var y = ex.length + 1;

    var minus = x - 1;

    for(var x = 0; x < y; x++) {
      var minus = x - 1;
      var z = ex.substring(minus, x);
      console.log(z);
      $("#textArea").append(caeserConvert[z]);
      document.getElementById('inputText').value = "";
      //loops through conversion and outputs each character individually

    }
    $("#textArea").append(" ");
    }


  //Loops user input through heiroglyphic converter
  else if ($("input:checked").val() == "heiro") {

    var ex = document.getElementById('inputText').value;

    var y = ex.length + 1;

    var minus = x - 1;

    for(var x = 0; x < y; x++) {
      var minus = x - 1;
      var z = ex.substring(minus, x);
      console.log(z);
      $("#textArea").append(heiroConvert[z]);
document.getElementById('inputText').value = "";
    }
    $("#textArea").append(" ");
    }
    };
  });

  $("#translationInputArea").keydown(function(e) {
    if(e.keyCode == 13) {
      var ex = document.getElementById('translationInputText').value;

      var y = ex.length + 1;

      var minus = x - 1;
      for(var x = 0; x < y; x++) {
        var minus = x - 1;
        var z = ex.substring(minus, x);
        console.log(z);
        $("#translationArea").append(decodeConvertC[z]);
  document.getElementById('translationInputText').value = "";


      }
    }
  });




//Converter objects used for input translation




var caeserConvert = {
  "a": "z",
  "b": "a",
  "c": "b",
  "d": "c",
  "e": "d",
  "f": "e",
  "g": "f",
  "h": "g",
  "i": "h",
  "j": "i",
  "k": "j",
  "l": "k",
  "m": "l",
  "n": "m",
  "o": "n",
  "p": "o",
  "q": "p",
  "r": "q",
  "s": "r",
  "t": "s",
  "u": "t",
  "v": "u",
  "w": "v",
  "x": "w",
  "y": "x",
  "z": "y",
  " ": " ",
}

//Because it's outputting html, this converter outputs images translating the users input

var heiroConvert = {
  "a": "<img src='images/heiroglyphics/a.gif'>",
  "b": "<img src='images/heiroglyphics/b.gif'>",
  "c": "<img src='images/heiroglyphics/c.gif'>",
  "d": "<img src='images/heiroglyphics/d.gif'>",
  "e": "<img src='images/heiroglyphics/e.gif'>",
  "f": "<img src='images/heiroglyphics/f.gif'>",
  "g": "<img src='images/heiroglyphics/g.gif'>",
  "h": "<img src='images/heiroglyphics/h.gif'>",
  "i": "<img src='images/heiroglyphics/i.gif'>",
  "j": "<img src='images/heiroglyphics/j.gif'>",
  "k": "<img src='images/heiroglyphics/k.gif'>",
  "l": "<img src='images/heiroglyphics/l.gif'>",
  "m": "<img src='images/heiroglyphics/m.gif'>",
  "n": "<img src='images/heiroglyphics/n.gif'>",
  "o": "<img src='images/heiroglyphics/o.gif'>",
  "p": "<img src='images/heiroglyphics/p.gif'>",
  "q": "<img src='images/heiroglyphics/q.gif'>",
  "r": "<img src='images/heiroglyphics/r.gif'>",
  "s": "<img src='images/heiroglyphics/s.gif'>",
  "t": "<img src='images/heiroglyphics/t.gif'>",
  "u": "<img src='images/heiroglyphics/u.gif'>",
  "v": "<img src='images/heiroglyphics/v.gif'>",
  "w": "<img src='images/heiroglyphics/w.gif'>",
  "x": "<img src='images/heiroglyphics/x.gif'>",
  "y": "<img src='images/heiroglyphics/y.gif'>",
  "z": "<img src='images/heiroglyphics/z.gif'>",
  " ": " ",
}

var decodeConvertC = {
  "a": "b",
  "b": "c",
  "c": "d",
  "d": "e",
  "e": "f",
  "f": "g",
  "g": "h",
  "h": "i",
  "i": "j",
  "j": "k",
  "k": "l",
  "l": "m",
  "m": "n",
  "n": "o",
  "o": "p",
  "p": "q",
  "q": "r",
  "r": "s",
  "s": "t",
  "t": "u",
  "u": "v",
  "v": "w",
  "w": "x",
  "x": "y",
  "y": "z",
  "z": "a",
  " ": " ",
}
