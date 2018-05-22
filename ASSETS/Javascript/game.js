//document ready function
$(document).ready(function() {

//varible to store random generated number    
var targetNum = 0;
var wins = 0;
var losses = 0;

//generates a random number 19-120
var targetNum = Math.floor(Math.random() * 101 + 19);
console.log(targetNum);

//this displays the random number on live site
$("#numberToGuess").text(targetNum);

//counter varible to store the added value that the user clicks
var counter = 0;

//set random number between 1-12 per gem (4 total)
var gem1 = Math.floor(Math.random() * 12 + 1);
    console.log(" gem1 " + gem1);
yellowGem = $("<img>");
yellowGem.addClass("gems");
yellowGem.attr("src", "file:///Users/nataliecolwell/Desktop/repositories/HW_4jQuery/Unit-4-game/ASSETS/Images/YellowSquareGems.png");
yellowGem.attr("data-gemvalue", gem1);
$("#yellowGem").append(yellowGem);

var gem2 = Math.floor(Math.random() * 12 + 1);
    console.log(" gem2 " + gem2);
pinkGem = $("<img>");
pinkGem.addClass("gems");
pinkGem.attr("src", "file:///Users/nataliecolwell/Desktop/repositories/HW_4jQuery/Unit-4-game/ASSETS/Images/PinkHeartGem.png");
pinkGem.attr("data-gemvalue", gem2);
$("#pinkGem").append(pinkGem);

var gem3 = Math.floor(Math.random() * 12 + 1);
    console.log(" gem3 " + gem3);
blueGem = $("<img>");
blueGem.addClass("gems");
blueGem.attr("src", "file:///Users/nataliecolwell/Desktop/repositories/HW_4jQuery/Unit-4-game/ASSETS/Images/BlueOvalGems.png");
blueGem.attr("data-gemvalue", gem3);
$("#blueGem").append(blueGem);

var gem4 = Math.floor(Math.random() * 12 + 1);
    console.log(" gem4 " + gem4);
redGem = $("<img>");
redGem.addClass("gems")
redGem.attr("src","file:///Users/nataliecolwell/Desktop/repositories/HW_4jQuery/Unit-4-game/ASSETS/Images/RedTriGems.png");
redGem.attr("data-gemvalue", gem4);
$("#redGem").append(redGem);

//function to reset game & generate new random number(s)
function reset() {
    targetNum = Math.floor(Math.random() * 101 + 19);
console.log(targetNum);
$("#numberToGuess").text(targetNum);
    gem1 = Math.floor(Math.random() * 12 + 1);
    console.log(" gem1 " + gem1);
    gem2 = Math.floor(Math.random() * 12 + 1);
    console.log(" gem2 " + gem2);   
    gem3 = Math.floor(Math.random() * 12 + 1);
    console.log(" gem3 " + gem3);
    gem4 = Math.floor(Math.random() * 12 + 1);
    console.log(" gem4 " + gem4);
    counter = 0;
    $("#userTotal").text(counter); 
}

//click function that generates and displays the hidden gem value
$("#gemImages").on("click", ".gems", function() {
    var gemValue = ($(this).attr("data-gemvalue"));
    gemValue = parseInt(gemValue);
    counter += gemValue;
    console.log(counter);
    $("#userTotal").text(counter);

    if(counter === targetNum) {
        wins++;
        console.log(wins);
        $("#wins").text("WIns: " + wins);
        reset();
    }
    else if (counter >= targetNum) {
        losses++;
        console.log(losses);
        $("#losses").text("Losses: " + losses);
        reset();
    }
});



});