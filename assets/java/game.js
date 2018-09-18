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
    function QnASetup(question, answer1, answer2, answer3, answer4, correctAnswer) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.correctAnswer = correctAnswer;

    };
    let jaws = new QnASetup(
        "What city does the 1975 film 'Jaws' take place in?",
        "Sydney",
        "Daytona",
        "Miami",
        "Amity",
        'Amity'
    );
    let starWars = new QnASetup(
        'Which young Jedi Knight becomes Darth Vader in the Star Wars series?',
        'Luke Skywalker',
        'Anakin Skywalker',
        'Obi Wan Kenobi',
        'Darth Maul',
        'Anakin Skywalker',
    );
    let wizardOfOz = new QnASetup(
        'What color road must Dorothy and her friends follow to meet the wizard?',
        'Orange',
        'Gold',
        'Yellow',
        'White',
        'Yellow'
    );
    let twister = new QnASetup(
        'Dr.Jo Harding and her husband Bill chase down the most powerful storm in decades in what movie?',
        'GeoStorm',
        'Sharknado',
        'Perfect Storm',
        'Twister',
        'Twister'
    );
    let titanic = new QnASetup(
        'The pride and joy of the White Star Line,at the time,the largest moving object ever built was the _____?',
        'R.M.S Titanic',
        'Enterprise',
        'Millennium Falcon',
        'The Black Pearl',
        'R.M.S Titanic'
    );


    $("body").on("click", ".startButton", function(event) {
        event.preventDefault();
        mainGame();
    });

    let currentQuestion = [];
    let questionsArray = [jaws,starWars,wizardOfOz,twister,titanic,];
    let correctAnswerArray = ['Amity','Anakin Skywalker','Yellow','Twister','R.M.S Titanic',]

    var timeLeft = 30;
    var elem = document.getElementById('timer');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft ==  0) {
            NewQuestion();
            console.log('Next Question')
        } else {
            $("#timer").text(timeLeft + ' seconds remaining');
            timeLeft--;
        }
    };

    function NewQuestion() {
        let Cq = -1;
        Cq++;
        let nextQuestion = questionsArray[Cq];
        questionsArray.splice(nextQuestion);
        currentQuestion.push(nextQuestion);
        $("#question").text(currentQuestion[0].question);
        $("#button1").text(currentQuestion[0].answer1);
        $("#button2").text(currentQuestion[0].answer2);
        $("#button3").text(currentQuestion[0].answer3);
        $("#button4").text(currentQuestion[0].answer4);
    };

    $("#button4").on("click", function() {
        if (data == currentQuestion[0].correctAnswer) {
            console.log('True!');
        } else {
            console.log('false');
        }   
    });


    // let answersArray = [currentQuestion[0].answer1, currentQuestion[0].answer2, currentQuestion[0].answer3, currentQuestion[0].correctAnswer];




    













});