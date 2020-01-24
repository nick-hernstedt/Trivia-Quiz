// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const score = document.getElementById("score");

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
renderQuestion

// render progress
function renderProgress () {
    for(let qIndex = 0; qIndex <= listQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex +"></div>";
    }
}

// counter render
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit;
        count++
    }else{
        count = 0;
    }
}
