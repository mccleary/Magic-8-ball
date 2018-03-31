$(document).ready(function() {  //notifies DOM that jQuery is being used

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

  $("#answer").hide();

  // function to choose random answer from listOfAnswers
  magic8Ball.askQuestion = function(question) {
  	var randomNumber = Math.random();
  	var randomAnswer = randomNumber * this.listOfAnswers.length;
  	var randomIndex = Math.floor(randomAnswer);
  	var answer = this.listOfAnswers[randomIndex];
    // jQuery to display answer on html answer id answer
    $("#8ball").effect("shake");
    $("#answer").text(answer);
    $("#answer").fadeIn(2000);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

  	console.log(question);
  	console.log(answer);
  };
  // function to display popup prompt window
  var onClick = function() {
    $("#answer").hide();

    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    // wait half a second before showing prompt
    setTimeout( function() {
      // show prompt
      var question = prompt("Ask me a YES or NO question");
      magic8Ball.askQuestion(question);
    }, 500);

  };
  // jQuery to tell js to run onClickfunction to display prompt window
  $("#questionButton").click(onClick);

});
