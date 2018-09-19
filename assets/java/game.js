$(document).ready(function () {
    function StartScreen() {
        startScreen = "<div class='row justify-content-center'><h3 class='col-lg-12'>Iconic Movie Trivia Game</h3><p class='col-lg-12'><a class='btn btn-primary btn-lg btn-block startButton' href='#' role='button' type='submit'>Start Quiz</a></p></div>";
        $(".center-screen").html(startScreen);
    };
    StartScreen();
    function mainGame() {
        mainScreen = "<div class='row maingame'><div class='col-lg-12 justify-content-center' id='question'></div></div><div class='col-lg-3-9'><a id='button1' class='btn btn-primary answerbtn' href='#' role='button'></a><a id='button2' class='btn btn-primary answerbtn' href='#' role='button'></a><a id='button3' class='btn btn-primary answerbtn' href='#' role='button'></a><a id='button4' class='btn btn-primary answerbtn' href='#' role='button'></a></div><div class='col-lg-12'><p id='timer'></p></div>"
        $(".center-screen").html(mainScreen);
        NewQuestion();
    };
    let correctAnswerCount = 0;
    let incorrectAnswerCount = 0;
    
    $("body").on("click", ".startButton", function(event) {
        event.preventDefault();
        mainGame();
    });

    let currentQuestion = [];
    let questionsArray = [jaws,starWars,wizardOfOz,twister,titanic,];
    let correctAnswerArray = ['Amity','Anakin Skywalker','Yellow','Twister','R.M.S Titanic',]

    var timeLeft = 30;
    var timerId = setInterval(countdown, 1000);
    let Cq = 0;

    function countdown() {
        if (timeLeft ==  -1) {
            NewQuestion();
            console.log('Next Question')
            clearInterval(timerId);
        } else {
            $("#timer").text(timeLeft + ' seconds remaining');
            timeLeft--;
        }
    };

    function NewQuestion() {
        $('.btn').removeClass('correctA incorrectA');
        // let nextQuestion = questionsArray[Cq];
        // questionsArray.splice(nextQuestion);
        currentQuestion.push(questionsArray[Cq]);
        $("#question").text(currentQuestion[Cq].question);
        $("#button1").text(currentQuestion[Cq].answer1);
        $("#button2").text(currentQuestion[Cq].answer2);
        $("#button3").text(currentQuestion[Cq].answer3);
        $("#button4").text(currentQuestion[Cq].answer4);
    };
    
    function correctA() {
        $(currentQuestion[0].correctAnswer).addClass('correctA')
    };
    
    $(document).on("click", function() {
        console.log(event.target.innerText);
        if (event.target.innerText == currentQuestion[Cq].correctAnswer) {
            console.log('Correct');
            $(event.target).addClass("correctA");
            correctAnswerCount++;
            console.log('Correct: ' + correctAnswerCount);

        } else {
            $(event.target).addClass('incorrectA');
            correctA();
            incorrectAnswerCount++;
            console.log('Wrong: ' + incorrectAnswerCount);
        };
        Cq++;
        setInterval(NewQuestion, 5000);
        console.log('Current Q: ' + Cq);
    });







    













});