//declare variables //
var quiz1, quiz2, quizArray, questionArray, questionField, questionNumber, submitButton, response, points;


// quiz objects //
quizQuestion0 = {
  question : "What is the Capital of Kansas? ",
  options : ["Topeka", "Des Moines", "Iowa City"],
  answer  : "Topeka"
}

quizQuestion1 = {
  question : "What is the Capital of Kentucky? ",
  options : ["Lexington", "Nashville",  "Bowling Greens"],
  answer : "Lexington"
}

quizQuestion2 = {
  question : "What is the Capital of Mississippi? ",
  options : ["Oxford", "Mobile",  "Jackson"],
  answer : "Jackson"
}

quizQuestion3 = {
  question : "What is the Capital of Montana? ",
  options : ["Butte", "Helena",  "Montana City", "Toronto"],
  answer : "Helena"
}

quizArray = [quizQuestion0, quizQuestion1, quizQuestion2, quizQuestion3];
quizQuestionNumber = 0;
points = 0;

createQuestion(quizQuestionNumber);


submitButton.onclick = function(){
  questionArray = document.getElementsByTagName('input');
  for(y = 0; y < questionArray.length; y++){
     if(questionArray[y].checked){
      response = questionArray[y].value;
    }
  }
  if( response == quizArray[quizQuestionNumber].answer){
    points++;
    alert('You rock, you have ' + points + ' points');
  }else{
    alert('Sorry :(, wrong answer');
  }
  quizQuestionNumber++;
  if(quizQuestionNumber < quizArray.length){
    createQuestion(quizQuestionNumber);
  }else{
    document.getElementById('quiz-area').className = 'hide';
    document.getElementById('final').innerHTML = '<p>You are all done. <br> Your final score is ' + points + ' points<p>';
  }
}

//functions//

function createQuestion(quizQuestionNumber){
  document.getElementById('question').innerHTML = quizArray[quizQuestionNumber].question;
  submitButton = document.getElementById('submit-button');
  questionField = document.getElementById('question-options');
  questionNumbercounter = document.getElementById('question-number');
  questionNumbercounter.innerHTML = "Question "+ quizQuestionNumber + " of "+ quizArray.length; 
  questionField.innerHTML ="";

  for(x = 0; x < quizArray[quizQuestionNumber].options.length; x++){
    var input  = document.createElement('input');
    var label  = document.createElement('label');
    var lineBreak = document.createElement('br');
    input.type = "radio";
    input.name = "question"+quizQuestionNumber;
    input.value = quizArray[quizQuestionNumber].options[x];
    input.id = quizArray[quizQuestionNumber].options[x];
    questionField.appendChild(input);
    label.innerHTML = quizArray[quizQuestionNumber].options[x];
    label.htmlFor = quizArray[quizQuestionNumber].options[x];
    questionField.appendChild(label);
    questionField.appendChild(lineBreak);
  }
}    





