var words = {
    blankList: [],
    list: ["Leonardo", "Donatello", "Raphael", "Michelangelo", "Splinter", "Shredder", "April", "Foot Clan", "Bebop", "Rocksteady", "Krang", "New York City"],
    word: ""
};
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var scoreboard = {
    show: false,
    index: 0,
    wins: 0,
    losses: 0,
    guessed: [],
    playerChoice: "",
    guessesLeft: 0,
    lettersLeft: 0,
    clicked: "",
    randomize: function () {
        words.blankList = [];
        scoreboard.index = Math.floor(Math.random() * words.list.length);
        words.word = words.list[scoreboard.index];
        for (var i = 0; i < words.word.length; i++) {
            words.blankList[i] = "_";
            if (words.word[i] === " ") {
                words.blankList[i] = "-"
            }
        }
    },
    reset: function () {
        scoreboard.guessed = [];
        scoreboard.guessesLeft = 10;
        document.getElementById("wins").innerHTML = "Wins: " + scoreboard.wins;
        document.getElementById("losses").innerHTML = "Losses: " + scoreboard.losses;
        document.getElementById("guessed").innerHTML = "Guessed: " + scoreboard.guessed.join(" ");
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + scoreboard.guessesLeft;
        // document.getElementById("startGame").innerHTML = ("<button class='playAgain'>Play again</button");
        document.getElementById("images").innerHTML = (" ");
        // document.getElementById("playAgain").addEventListener("click", function () {
        //     scoreboard.randomize();
        //     scoreboard.lettersLeft = words.word.length;
        //     document.getElementById("images").innerHTML = ("<img id='theimg' src='assets/images/teenage-mutant-ninja-turtles-tmnt-logo-cartoon-background-tablet.png'>");
        //     setTimeout(showem, 500)
        //     function showem() {
        //         document.getElementById("theWord").innerHTML = words.blankList.join(" ");
        //         document.getElementById("startGame").innerHTML = ("");
        //         context.clearRect(0, 0, 400, 400);
        //     }
        // })

    }
};
document.getElementById("restart").addEventListener("click", function(){
    scoreboard.guessed = [];
        scoreboard.guessesLeft = 10;
        scoreboard.randomize();
        scoreboard.lettersLeft = words.word.length;
        document.getElementById("wins").innerHTML = "Wins: " + scoreboard.wins;
        document.getElementById("losses").innerHTML = "Losses: " + scoreboard.losses;
        document.getElementById("guessed").innerHTML = "Guessed: " + scoreboard.guessed.join(" ");
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + scoreboard.guessesLeft;
        document.getElementById("startGame").innerHTML = ("<button class='playAgain'>Play again</button");
        document.getElementById("images").innerHTML = (" ");
        document.getElementById("theWord").innerHTML = words.blankList.join(" ");
        document.getElementById("startGame").innerHTML = ("");
        context.clearRect(0, 0, 400, 400);
})
var images = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.png", "img6.png", "img7.jpg", "img8.jpg", "img9.png", "img10.jpg", "img11.jpg"];

// Animate man
var drawMe = 10;
var animate = function () {
    drawMe = scoreboard.guessesLeft;
    drawArray[drawMe]();
}


// Hangman
var context = null;
var myStickman = null;
function canvas() {

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    if (drawMe > 6) {
        context.strokeStyle = "#fff";
        context.lineWidth = 3;
    }
    else {
        context.strokeStyle = "#ADFF2F";
        context.lineWidth = 3;
    }
};

head = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
}

draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}

frame1 = function () {
    draw(0, 150, 150, 150);
    draw();
};

frame2 = function () {
    draw(10, 0, 10, 600);
};

frame3 = function () {
    draw(0, 5, 70, 5);
};

frame4 = function () {
    draw(60, 5, 60, 15);
};

torso = function () {
    draw(60, 36, 60, 70);
};

rightArm = function () {
    draw(60, 46, 100, 50);
};

leftArm = function () {
    draw(60, 46, 20, 50);
};

rightLeg = function () {
    draw(60, 70, 100, 100);
};

leftLeg = function () {
    draw(60, 70, 20, 100);
};
var drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];
scoreboard.randomize();
scoreboard.lettersLeft = words.word.length;
scoreboard.guessesLeft = 10;
document.onkeyup = function (event) {
    scoreboard.playerChoice = event.key;
    scoreboard.clicked += scoreboard.playerChoice.toLowerCase();
    
    //show words and guess in console
    console.log("player: " + scoreboard.playerChoice);
    console.log("computer: " + words.word);
    //when player presses a letter show scoreboard
    scoreboard.show = true;
    if (words.blankList.indexOf(scoreboard.playerChoice.toUpperCase()) === -1) {
        //compare if playerchoice exists in the word
        for (var i = 0; i < words.word.length; i++) {
            if (words.word[i].toLowerCase() === scoreboard.playerChoice) {
                words.blankList[i] = scoreboard.playerChoice.toUpperCase();
                scoreboard.lettersLeft--;
                document.getElementById("theWord").innerHTML = words.blankList.join(" ");
                console.log(scoreboard.lettersLeft);
            }
        }
    }
    //if the letter is not already showing & is not in the word & its in the alphabet add it to the guessed list
    
    if(scoreboard.guessed.indexOf(scoreboard.playerChoice.toUpperCase()) === -1){
        if(words.blankList.indexOf(scoreboard.playerChoice.toUpperCase()) === -1 && words.word.indexOf(scoreboard.playerChoice) === -1 && alphabet.indexOf(scoreboard.playerChoice) > -1) {
            scoreboard.guessed.push(scoreboard.playerChoice.toUpperCase());
            scoreboard.guessesLeft--;
            animate();
            document.getElementById("guessed").innerHTML = "Guessed: " + scoreboard.guessed.join(" ");
            document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + scoreboard.guessesLeft;
            
        }
    }
    if(alphabet.indexOf(scoreboard.playerChoice) > -1){
    document.getElementById("restart").innerHTML= "<button class='playAgain'>Restart</button>";
    }
    
    //show scoreboard if player presses a letter
    if (scoreboard.show === true && alphabet.indexOf(scoreboard.playerChoice) > -1) {
        document.getElementById("startGame").innerHTML = (" ");
        document.getElementById("wins").innerHTML = "Wins: " + scoreboard.wins;
        document.getElementById("losses").innerHTML = "Losses: " + scoreboard.losses;
        document.getElementById("guessed").innerHTML = "Guessed: " + scoreboard.guessed.join(" ");
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + scoreboard.guessesLeft;
    }
    //if theres no letters left in the word player wins
    if (scoreboard.lettersLeft === 0) {
        alert("You win! The word was " + words.word)
        scoreboard.wins++;
        //reset scoreboard
        scoreboard.reset();
        document.getElementById("images").innerHTML = "<img id='theimg' src='assets/images/" + images[scoreboard.index] + "'>";
    }
    //if theres no guesses left you lose
    if (scoreboard.guessesLeft === 0 && alphabet.indexOf(scoreboard.playerChoice) > -1) {
        alert("Game Over!");
        scoreboard.losses++;
        //reset scoreboard
        document.getElementById("theWord").innerHTML = words.word.toUpperCase();
        scoreboard.reset();
        document.getElementById("images").innerHTML = "<img id='theimg' src='assets/images/" + images[scoreboard.index] + "'>";
    }
}

canvas();
document.getElementById("startGame").innerHTML = ("Press any key to start playing!");
document.getElementById("theWord").innerHTML = words.blankList.join(" ");
