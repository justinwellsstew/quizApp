//declare variables //
var quiz1, quiz2, quizArray, questionField;


// quiz objects //
var quiz1 = {
  question : "What is the Capital of Kansas? ",
  options : ["Topeka", "Des Moines", "Iowa City"],
  answer  : "Topeka"
}

var quiz2 = {
  question : "What is the Capital of Kentucky? ",
  option1 : "Lexington",
  option2 : "Des Moines",
  option3 : "Iowa City"
}

var quizArray = [quiz1, quiz2]


document.getElementById('question').innerHTML = quizArray[0].question;

questionField = document.getElementById('question-options');


for(x = 0; x < quizArray[0].options.length; x++){
  var input  = document.createElement('input');
  var label  = document.createElement('label');
  var lineBreak = document.createElement('br');
  input.type = "radio";
  input.name = "question1";
  input.value = quizArray[0].options[x];
  input.id = quizArray[0].options[x];
  questionField.appendChild(input);
  label.innerHTML = quizArray[0].options[x];
  label.htmlFor = quizArray[0].options[x];
  questionField.appendChild(label);
  questionField.appendChild(lineBreak);
}




