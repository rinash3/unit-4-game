$(document).ready(function() {


    var wins = 0;
    var losses = 0;
    var numberMatch = "";
    var totalScore = 0;

    //select a random number for the user to match
    numberMatch = [Math.floor(Math.random() * (120 - 19 + 1) + 19)];
    console.log("number to match:" + numberMatch);
    //display the value based on id 
    $("#numToMatch").text(numberMatch);

    //assigning random numbers to crystals
    var numBlue = [Math.floor(Math.random() * 11 + 1)];
    console.log("blue value:" + numBlue);
    var numRed = [Math.floor(Math.random() * 11 + 1)];
    console.log("red value:" + numRed);
    var numGold = [Math.floor(Math.random() * 11 + 1)];
    console.log("gold value:" + numGold);
    var numPurple = [Math.floor(Math.random() * 11 + 1)];
    console.log("purple value:" + numPurple);

    function parse() {
        totalScore = parseInt(totalScore);
        numBlue = parseInt(numBlue);
        numGold = parseInt(numGold);
        numRed = parseInt(numRed);
        numPurple = parseInt(numPurple);
        numberMatch = parseInt(numberMatch);
    }

    parse()
        //on click event for gold crystal
    $("#gold").on("click", function() {

        //update new user total
        totalScore = totalScore + numGold;
        console.log("new" + totalScore);
        $("#final").text(totalScore);
        if (numberMatch == totalScore) {
            winner();
        } else if (numberMatch < totalScore) {
            loser();
        }
    });

    //on click event for red crystal

    $("#red").on("click", function() {

        //update new user total
        totalScore = totalScore + numRed;
        console.log(totalScore);
        $("#final").text(totalScore);
        if (numberMatch === totalScore) {
            winner();
        } else if (numberMatch < totalScore) {
            loser();
        }
    });

    //on click event for blue crystal
    $("#blue").on("click", function() {
        //update new user total
        totalScore = totalScore + numBlue;
        console.log(totalScore);
        $("#final").text(totalScore);
        if (numberMatch === totalScore) {
            winner();
        } else if (numberMatch < totalScore) {
            loser();
        }
    });
    //on click event for purple crystal
    $("#purple").on("click", function() {

        //update new user total
        totalScore = totalScore + numPurple;
        console.log(totalScore);
        $("#final").text(totalScore);
        if (numberMatch === totalScore) {
            winner();
        } else if (numberMatch < totalScore) {
            loser();
        }
    });



    function winner() {
        wins++
        $("#wins").text(wins);
        reset();
    }

    function loser() {
        losses++
        $("#losses").text(losses);
        reset();
    }

    function reset() {
        totalScore = 0;
        $("#final").text(totalScore);
        numberMatch = [Math.floor(Math.random() * (120 - 19 + 1) + 19)];
        console.log("number to match:" + numberMatch);
        //display the value based on id 
        $("#numToMatch").text(numberMatch);
        numBlue = [Math.floor(Math.random() * 11 + 1)];
        console.log("blue value:" + numBlue);
        numRed = [Math.floor(Math.random() * 11 + 1)];
        console.log("red value:" + numRed);
        numGold = [Math.floor(Math.random() * 11 + 1)];
        console.log("gold value:" + numGold);
        numPurple = [Math.floor(Math.random() * 11 + 1)];
        console.log("purple value:" + numPurple);
        parse()
    }

})