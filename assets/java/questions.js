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
