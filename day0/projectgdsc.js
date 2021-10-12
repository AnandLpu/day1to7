var readlinesync = require("readline-sync");
function welcome() {
    var username = readlinesync.question("Hello fellow batchmate! what is your name? ");
    console.log("welcome " + username + " to DO YOU KNOW YOUR GDSC CIRCLE");
    startPlaying(username);
}
var score = 0;
var highscore = {
    name: "Nishtha rastogi",
    score: 3,

}
var array = [{
    question: "who is our circle manager?",
    options: {
        a: "Anshika",
        b: "Pooja di",
        c: "Phoebe"

    },
    answer: "a"
}, {
    question: 'Did you submit your last project? :")',
    options: {
        a: "yes",
        b: "no",
        c: "apne kaam se kaam rakh"

    },
    answer:{
        1:"a",
        2:"c"
    }

}, {
    question: "Bhai tum sab ne kitne achhe project bnae hain this is just for appreciating",
    options: {
        a: "Thanks qty",
        b: "nai nai source code nai milega hehe",
        c: "Bhai submit hi nhi kia lmao"
    },
    answer: "a"
}]
function startPlaying(username) {
    
    for (var i = 0; i < array.length; i++) {
    
        var currentQ = array[i];
        play(currentQ.question, currentQ.answer, currentQ.options);
    }
    showscore(username);
}
function play(question, answer, options) {
    console.log(question);
    for (const key in options) {
        console.log(`${key}: ${options[key]}`);
    }
    for(const key in answer)
    var useranswer = readlinesync.question("choose an option: ");
    if (useranswer.toUpperCase() === answer.toUpperCase()) {
        console.log("correct!");
        score = score + 1;
    }
    else {
        console.log("wrong")
    }
    console.log("___________________________________________________");
    console.log("your current score: ", score);
    console.log("___________________________________________________");
}
function showscore(username) {
    console.log("YOUR FINAL SCORE: ", score);
    if (highscore <= score) {
        highscore.name = username;
        highscore.score = score;
    }
    console.log("Check out the highscore");
    console.log(highscore.name, ":", highscore.score);
}
welcome();
