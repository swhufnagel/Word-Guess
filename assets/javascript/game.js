var words = {
    blankList: ["_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _", "_ _ _ _   _ _ _ _", "_ _ _ _ _", "_ _ _ _ _ _ _ _ _ _", "_ _ _ _ _", "_ _ _   _ _ _ _   _ _ _ _"],
    //blanklist: [],
    list: ["Leonardo", "Donatello", "Raphael", "Michelangelo", "Splinter", "Shredder", "April", "Foot Clan", "Bebop", "Rocksteady", "Krang", "New York City"],
    word: "",
    blankWord: ""
};
var scoreboard = {
    index: 0,
    wins: 0,
    guesses: "",
    guessesRemaining: 0,
    guessed: "",
    playerChoice: "",
    guessesleft: 0,
    randomize:function() {
        scoreboard.index = Math.floor(Math.random() * words.list.length);
        words.word = words.list[scoreboard.index];
        words.blankWord = words.blankList[scoreboard.index];
    }
};

// var word = "";
// var blankWord = "";
// var index = 0;
// function randomize() {
//     index = Math.floor(Math.random() * words.list.length);
//     word = words.list[index];
//     blankWord = words.blankList[index];
// }
scoreboard.randomize();
scoreboard.guessesleft = words.word.length;
document.onkeyup = function (event) {
    scoreboard.playerChoice = event.key;
    console.log("player: " + scoreboard.playerChoice);
    console.log("computer: " + words.word);

    for(i = 0; i < words.word.length; i++){
        if(words.word[i].toLowerCase() === scoreboard.playerChoice){
            words.blankWord[i] = scoreboard.playerChoice;
            console.log("you got one");
        }

    }console.log(words.blankWord);
    
}

var blankWordSend = document.getElementById("theWord").innerHTML = words.blankWord;
