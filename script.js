var chosenWord = "";
var chosenLetter = "";	
var arrWord = [];
var lives = 10;
var newGameLives = 10;
var isCorrect = false;
var underscore = "_";

var goBtn = document.querySelector("#go-btn").addEventListener("click", generateUnderscores);
var guessBtn = document.querySelector("#guess-btn").addEventListener("click", guessLetter);
var newGameBtn = document.querySelector("#new-game").addEventListener("click", newGame);
var underscoreWord = document.querySelector("#underscore-word");
var message = document.querySelector("#display-message");
var displayLives = document.querySelector("#display-lives");
		

function generateUnderscores(){
	var inputWord = document.querySelector("#input-word").value;
	chosenWord = inputWord;
	arrWord = inputWord.split("");

	for (var i = 0; i < arrWord.length; i++){
		arrWord[i] = underscore;
		
	};	
	
	underscoreWord.textContent = arrWord.join(" ");
	document.querySelector("#input-word").value = "";
};


function guessLetter()
{
	var inputLetter = document.querySelector("#input-letter").value;
 	chosenLetter = inputLetter;
 	
	for (var i = 0; i < chosenWord.length; i++)
		{
		
 		if (chosenWord[i] === chosenLetter)
 			
 			{
	 			arrWord[i] = chosenLetter;
	 			underscoreWord.textContent = arrWord.join(" ");
	 			isCorrect = true;
	 			message.textContent = "Correct!"; 
			} 	
		
		}	
		if (isCorrect === false)	
			{
				lives --;
				displayLives.textContent = lives;
				message.textContent = "Try Again!";

				
			}
	
	isCorrect = false;
	document.querySelector("#input-letter").value = "";

};


function newGame()
{
	message.textContent = ".";
	displayLives.textContent = newGameLives;
	underscoreWord.textContent = ".";
	
}







