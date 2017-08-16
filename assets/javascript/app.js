
$(document).ready(function(){

// start button click.  display: none

// number of seconds to complete the answer.
var number = 15;
var intervalId;

// timer starts 10 seconds to answer question once start button is pushed.

//list of questions, choices and answer. 
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, wrong=0, correct = 0;
var questions=[
	["The Eiffel Tower is located where in Paris?", "Bois de Boulogne", "Champ de Mars", "Jardin des Plantes", "Parc de Belleville", "B"],
	["Where is the London Bridge located?", "Paris", "Champ de Mars", "Lake Havasu City", "London", "C"],
	["Which is the most populated city in the world?", "New York City", "Tokyo Japan", "Delhi India", "Shanghai China", "B"],
	["Where is the largest pyramid in the world located?", "El Giza Egypt", "Meroe Sudan", "Puebla Mexico", "Cryo Egypt", "C"],
	["What city is the Taj Mahal in?", "Dehli", "Agra", "Kanpur", "Patna", "B"]
];

function _(x){
	return document.getElementById(x);
}

function renderQuestion() {
	test = _("test");
	if(pos >= questions.length){
		$("#test").html("<h2> Correct: " + correct+ "<br>Wrong: " + wrong +"</h2>");
		_("test_status").innerHTML = "Text Completed";
		pos =0;
		correct = 0;
		wrong = 0;
		return false;
		$("#test").html("<button id='restart'>restart</button>");
		$("#restart").on("click", run);

	}
	// _("test_status").innerHTML = "Question " +(pos+1) + " of " +questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	$("#test").html("<h3>" + question + "</h3>");
	$("#test").append("<input type='radio' name='choices' value='A'> "+chA + "<br>");
	$("#test").append("<input type='radio' name='choices' value='B'> "+chB + "<br>");
	$("#test").append("<input type='radio' name='choices' value='C'> "+chC + "<br>");
	$("#test").append("<input type='radio' name='choices' value='D'> "+chD + "<br><br>");
	$("#test").append("<button id='submit'>Submit</button>");
	$("#submit").on("click", checkAnswer);

}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for (var i=0; i<choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
			console.log(choice);
		}
	}
	if (choice === questions[pos][5]) {
		correct++;
		console.log("Correct!");
	} else {
		wrong++;
		console.log("Wrong!");
	}
	pos++;
	number=15;
	run();
	renderQuestion();
}

function run() {
	 intervalId = setInterval(decrement, 1000);
	 renderQuestion();
}

function decrement() {

	number--;

	$("#timer").html("<h2>Time Remaining: " + number + " seconds</h2>");

	if (number === 0) {

	alert("Time Up!");
	pos++;
	setTimeout(run, 5000);
	}
	else if (pos === 5) {
	$("#test").append("Thank you for playing!");
	}

}

$("#start").on("click", run);
window.addEventListener("load", renderQuestion, false);
});



// if answer is correct. play winner video.
// if anser is wrong. show correct answer and play loser video.

// end: show stats:  answered correct. answered wrong. unanswered.

// show start over button and reset if clicked.






