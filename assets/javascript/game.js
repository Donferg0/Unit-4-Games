var userScore = 0;
var compNum = 0;
var wins = 0;
var losses = 0;

var crystals = [
    "assets/images/images1.jpg",
    "assets/images/images2.jpg",
    "assets/images/images3.jpg",
];

function createCrystals() {
    for (var i = 0; i < crystals.length; i++) {
        var randomVal = Math.floor(Math.random() * 25 + 1);
        var img = $("<img>")
        img.addClass('crystal');
        img.attr('id', 'crystal-' + (i + 1));
        img.attr('src', crystals[i]);
        img.attr('val', randomVal)
        $("#crystals").append(img);
    }
}


function createCompNum() {
    compNum = Math.floor(Math.random() * 200 + 19);
    $("#compNum-text").text(compNum);
    console.log(compNum)
}

function updateCrystals() {
    for (var i = 0; i < crystals.length; i++) {
        var randomVal = Math.floor(Math.random() * 12 + 1);
        $("#crystal" + i).attr('val', randomVal)
    }
}

function resetGame() {
    updateCrystals();
    createCompNum();
    userScore = 0;
    $("#userScore-text").text(userScore);
}

createCrystals();
createCompNum();

$(".crystal").on("click", function () {

    var crystalVal = $(this).attr('val');
    userScore += parseInt(crystalVal);

    $("#userScore-text").text(userScore);
    if (userScore === compNum) {
        alert("Winner");
        wins++;
        $("#wins-text").text(wins);
        resetGame();
    } else if (userScore > compNum) {
        alert("Score: " + userScore + ". You got the next one!");
        losses++;
        $("#losses-text").text(losses);
        resetGame();
    }

});