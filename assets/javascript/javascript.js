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
         question : "What species of reptile is this",
         imgSrc : "./assets/images/coral.jpg",
         choiceA : "Nerodia rhombifer",
         choiceB : "Micrurus fulvius",
         choiceC : "Ophiophagus hannah",
         correct : "B"
     } ,   {
        question : "What species of bird is this",
        imgSrc : "./assets/images/harpy.jpg",
        choiceA : "Falco peregrinus",
        choiceB : "Haliaeetus leucocephalus",
        choiceC : "Harpia harpyja",
        correct : "C"
    } ,  {
        question : "What species of amphibian is this",
        imgSrc : "./assets/images/sonoran.jpg",
        choiceA : "Megophrys nasuta",
        choiceB : "Incilius alvarius",
        choiceC : "Dendrobates tinctorius",
        correct : "B"
    } , {
        question : "What species of mammal is this",
        imgSrc : "./assets/images/opossum.jpg",
        choiceA : "Didelphis virginiana",
        choiceB : "Procyon lotor",
        choiceC : "Pseudocheirus peregrinus",
        correct : "A"
    } , {
        question : "What species of fish is this?",
        imgSrc : "./assets/images/parrotfish.jpg",
        choiceA : "Cetoscarus ocellatus",
        choiceB : "Chlorurus michrohinos",
        choiceC : "Chlorurus sordidus",
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
    let img = (scorePercent >= 80) ? "./assets/images/parrotfish.jpg" :
              (scorePercent >= 60) ? "./assets/images/parrotfish.jpg" :
              (scorePercent >= 40) ? "./assets/images/parrotfish.jpg" :
              (scorePercent >= 20) ? "./assets/images/parrotfish.jpg" :
                                        "./assets/images/parrotfish.jpg"

              scoreDiv.innerHTML = "<img src="+ img + ">";
              scoreDiv.innerHTML = "<p>" + scorePercent + "%</p>";

}