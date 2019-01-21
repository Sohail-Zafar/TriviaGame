// Assignment: Triva Game
// File: trivaGame.js
// Programmer: Sohail Zafar

// Global variables
var time = 60;
var timer;
var correctAnswersCount = 0;
var incorrectAnswersCount = 0;
var unAnsweredCount = 0;

// Question Form Load
function questionFormLoad() {
    document.getElementById("questionForm").style.visibility = "visible";
    document.getElementById("startButtonContainer").style.visibility = "hidden";
   countDownTimer();
}

// Count down timer. Checks to see if time has run out. If so then calls gameOver()
function countDownTimer() {
    timer = setTimeout(decrement, 1000);
    $("#timeRemaining").text(time);
    console.log(time);
    if (time <= 0) {
        console.log("Game Over");
        gameOver();
    }
}

// Decrement the time variable for the countDownTimer()
function decrement(){
    time = time - 1;
    countDownTimer();
}

// This function determines what the answers to the questions were and then displays results
function resultsLogicAndDisplay() {
    // References to radio buttons
    var radioGroup1Button1 = document.getElementById("question1RadioButton1");
    var radioGroup1Button2 = document.getElementById("question1RadioButton2");
    var radioGroup1Button3 = document.getElementById("question1RadioButton3");

    var radioGroup2Button1 = document.getElementById("question2RadioButton1");
    var radioGroup2Button2 = document.getElementById("question2RadioButton2");
    var radioGroup2Button3 = document.getElementById("question2RadioButton3");

    var radioGroup3Button1 = document.getElementById("question3RadioButton1");
    var radioGroup3Button2 = document.getElementById("question3RadioButton2");
    var radioGroup3Button3 = document.getElementById("question3RadioButton3");

    var radioGroup4Button1 = document.getElementById("question4RadioButton1");
    var radioGroup4Button2 = document.getElementById("question4RadioButton2");
    var radioGroup4Button3 = document.getElementById("question4RadioButton3");

    // Check to see what button was checked and if the user answered the questions correctly
    if ( radioGroup1Button1.checked == true) {
        incorrectAnswersCount++;}

    if ( radioGroup1Button2.checked == true ) {
        incorrectAnswersCount++; }

    if ( radioGroup1Button3.checked == true) {
        correctAnswersCount++;}

    if ( radioGroup1Button1.checked == false && radioGroup1Button2.checked == false && radioGroup1Button3.checked == false){
        unAnsweredCount++;}

    
    
    if ( radioGroup2Button1.checked == true) {
        correctAnswersCount++;}

    if ( radioGroup2Button2.checked == true ) {
        incorrectAnswersCount++; }

    if ( radioGroup2Button3.checked == true) {
        incorrectAnswersCount++;}

    if ( radioGroup2Button1.checked == false && radioGroup2Button2.checked == false && radioGroup2Button3.checked == false){
        unAnsweredCount++;}


    if ( radioGroup3Button1.checked == true) {
        incorrectAnswersCount++;}

    if ( radioGroup3Button2.checked == true ) {
        incorrectAnswersCount++; }

    if ( radioGroup3Button3.checked == true) {
        correctAnswersCount++;}

    if ( radioGroup3Button1.checked == false && radioGroup3Button2.checked == false && radioGroup3Button3.checked == false){
        unAnsweredCount++;}

    
    if ( radioGroup4Button1.checked == true) {
        incorrectAnswersCount++;}

    if ( radioGroup4Button2.checked == true ) {
        incorrectAnswersCount++; }

    if ( radioGroup4Button3.checked == true) {
        correctAnswersCount++;}

    if ( radioGroup4Button1.checked == false && radioGroup4Button2.checked == false && radioGroup4Button3.checked == false){
        unAnsweredCount++;}

    // Display the reults of the game after game logic is performed
    $("#correctNumberText").text(correctAnswersCount);
    $("#wrongNumberText").text(incorrectAnswersCount);
    $("#unansweredNumberText").text(unAnsweredCount);
}

// gameOver(). Stops timer, shows results and call the logic function resultsLogicAndDisplay
function gameOver() {
    clearTimeout(timer);
    document.getElementById("resultsBox").style.visibility = "visible";
    resultsLogicAndDisplay();
    
}
