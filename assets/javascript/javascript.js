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
const scoreDiv = document.getElementById("score");

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
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

//start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display= "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms
}



// render progress
function renderProgress () {
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change bubble to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            //end the quiz and show the score
            clearInterval(TIMER);
        }
    }
}


//check answer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct) {
        //answer is correct
        score++;
        //change progress color to green
        answerIsCorrect();
    }else{
        //answer is wrong
        //change to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        //end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

//answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0"
}

//answer is wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00"
}

//score render
function scoreRender(){
    scoreDiv.style.display = "block";

    //calculate % correct answers
    const scorePercent = Math.round(100 * score/questions.length);

    //show image based off the score
    let img = (scorePercent >= 80) ? "img/5.png" :
              (scorePercent >= 60) ? "img/5.png" :
              (scorePercent >= 40) ? "img/5.png" :
              (scorePercent >= 20) ? "img/5.png" :
              "img/1.png"

              scoreDiv.innerHTML = "<img src="+ img + ">";
              scoreDiv.innerHTML = "<p>" + scorePercent + "%</p>";

}