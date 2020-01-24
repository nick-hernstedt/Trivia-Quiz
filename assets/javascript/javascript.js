// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceA = document.getElementById("B");
const choiceA = document.getElementById("C");
const choiceB = document.getElementById("counter");
const choiceC = document.getElementById("timerGauge");
const counter = document.getElementById("progress");
const progress = document.getElementById("score");

//  create our questions
 let questions = [
     {
         question : "",
         imgSrc : "",
         choiceA : "Correct",
         choiceB : "Wrong",
         choiceC : "Wrong",
         correct : "A"
     } ,   {
        question : "",
        imgSrc : "",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    } ,  {
        question : "",
        imgSrc : "",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    } ,
 ]

//  create some variables

const lastQuestion = questions.length -1;
let runningQuestion = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.style.display = "none";
renderQuestion();
quiz.style.display= "block";
renderProgress();

// render progress
function renderProgress () {
    for(let qIndex = 0; qIndex <= listQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex +"></div>";
    }
}
