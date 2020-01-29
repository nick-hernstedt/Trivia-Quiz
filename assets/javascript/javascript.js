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
const scoreDiv = document.getElementById("scoreContainer");
const reStart = document.getElementById("reStart")


//  create some variables

const lastQuestion = questions.length -1;
let runningQuestion = 0;
let count = 15;
const questionTime = 15; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let score = 0;
let localStorageName  = "";
let highScore;


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
    if(count >= 0){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count--
    }else{
        count = 15;
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
        score += count;
        //change progress color to green
        answerIsCorrect();
    }else{
        //answer is wrong
        //change to red
        answerIsWrong();
    }
    count = 15;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        //end the quiz and show the score
        clearInterval(TIMER);
        topScore();
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

// function to save high score
function topScore(){
   
    if(localStorage.getItem(localStorageName) == null){
        highScore = 0;
    } else {
        highScore = localStorage.getItem(localStorageName);
    }
}



// score render
function scoreRender(){
    scoreDiv.style.display = "block";
       
        highScore = Math.max(score, highScore);
        localStorage.setItem(localStorageName, highScore);

        let img = "./assets/images/80.jpg";
            
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>" + "High Score:"  + highScore  + "<br>"  + "Current Score:" + + score +"</p>";
    reStart.style.display= "block";
}


reStart.addEventListener("click", function(e){
    location.reload();
}, false);







