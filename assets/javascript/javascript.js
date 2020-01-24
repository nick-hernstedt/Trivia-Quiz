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
