$(document).ready(function() {

  var question = prompt("Ask me a YES/NO question");
  var magic8Ball = {};
  magic8Ball.listOfAnswers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  magic8Ball.askQuestion = function(question) {
  	var randomNumber = Math.random();
  	var randomAnswer = randomNumber * this.listOfAnswers.length;
  	var randomIndex = Math.floor(randomAnswer);
  	var answer = this.listOfAnswers[randomIndex];

  	console.log(question);
  	console.log(answer);
  };

});
