// sets grid rows and columns and the size of each square
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//btn.onclick = function() {
//    modal.style.display = "block";
//}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//    }
//}


var rows = 10;
var cols = 10;
var squareSize = 50;

// gets the container element
var gameBoardContainer = document.getElementById("gameboard");

// you can use this to convert your letters into numbers for use
// with the 2D array
var letterConversion = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9,
//  "a": 0,
//	"b": 1,
//	"c": 2,
//	"d": 3,
//	"e": 4,
//	"f": 5,
//	"g": 6,
//	"h": 7,
//	"i": 8,
//	"j": 9
}

// makes the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

var columnLetter = ["A","B","C","D","E","F","G","H","I","J"];

var rowNumber = i + 1;

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;
		square.className = "boardSquare";

		// THIS IS WHERE YOU WILL ADD CODE FOR PART 1 TO ADD TEXT TO EACH SQUARE
square.textContent = columnLetter[j] + rowNumber;

		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}

// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

				var fireInput;
				var inputColumn;
				var inputRow;
				var target;
				var firstInput;
				var secondInput;
				var convertedFirstInput;
				var fireVal;
				var inputCount = 0;
				var winCondition = 0;
        var x = document.getElementById("hitSound");

        function playAudio() {
            x.play();
        }

function fireTorpedo() {

	// Your game logic will go here!
//modal.style.display = "block";
inputCount++;
document.getElementById("tries").textContent = "You have won in " + inputCount + " turns! Now restarting...";
	fireVal = document.getElementById("blah").value;
	firstInput = fireVal.substring(0, 1);
	convertedFirstInput = letterConversion[firstInput];
	secondInput = fireVal.substring(1, 3);

	console.log("The first input value is " + convertedFirstInput);
	console.log("The second input value is " + secondInput);
	if(gameBoard[convertedFirstInput][secondInput - 1] == 1)
	{
    window.setTimeout(playAudio,1);
		console.log("Hit");
		document.getElementById("s" + convertedFirstInput + (secondInput - 1)).style.backgroundColor = "red";
		winCondition++;
    console.log(gameBoard[convertedFirstInput][secondInput - 1]);
    gameBoard[convertedFirstInput][secondInput - 1] = 2;
		if(winCondition == 17) {
			modal.style.display = "block";
			window.setTimeout(reloadPage,5000);
			function reloadPage() {
				location.reload();
			}
		}
	}
	else
	{
    if (gameBoard[convertedFirstInput][secondInput - 1] == 2) {
    console.log("Null");
  }
    else if(gameBoard[convertedFirstInput][secondInput - 1] == 0) {
		document.getElementById("s" + convertedFirstInput + (secondInput - 1)).style.backgroundColor = "grey";
		console.log("Miss");
  }
	}
}
