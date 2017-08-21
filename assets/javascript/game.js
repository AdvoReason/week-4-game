$(document).ready(function() {

    //Global variables.
    var randomNum = Math.floor(Math.random() * 101) + 19;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    $("#randomNum").html(randomNum);
    $(".click-show").hide();

    $('#ruby').on("click", function() {
            var gemNum1 = Math.floor(Math.random() * 11) + 1;
            $("#ruby").hide();
            $("#btn-1").show("#gemNum1").html(gemNum1);

            totalScore = totalScore + gemNum1;
            $("#totalScore").html(totalScore)
        wol();

    });

    $('#sapphire').on("click", function() {

            var gemNum2 = Math.floor(Math.random() * 11) + 1;
            $("#sapphire").hide();
            $("#btn-2").show("#gemNum2").html(gemNum2);

            totalScore = totalScore + gemNum2;
            $("#totalScore").html(totalScore)

        wol();

    });

    $('#diamond').on("click", function() {
            var gemNum3 = Math.floor(Math.random() * 11) + 1;
            $("#diamond").hide();
            $("#btn-3").show("#gemNum3").html(gemNum3);

            totalScore = totalScore + gemNum3;
            $("#totalScore").html(totalScore)
            wol();

    });

    $('#crystal').on("click", function() {

            var gemNum4 = Math.floor(Math.random() * 11) + 1;
            $("#crystal").hide();
            $("#btn-4").show("#gemNum4").html(gemNum4);

            totalScore = totalScore + gemNum4;
            $("#totalScore").html(totalScore);

        wol();

    });
        
    function wol() {
        if (totalScore === randomNum) {
            wins++;
            $("#wins").html(wins);
            $("#feedback").html("You Win! Play Again!");
            playAgain();

        } else if (totalScore > randomNum) {
            losses++;
            $("#losses").html(losses);
            $("#feedback").html("You Lose. Try Again!");
            playAgain();

        } else {
        	$("#feedback").html("Keep Clicking!");
        }
    }

    function playAgain() {
    	randomNum = Math.floor(Math.random() * 101) + 19;
    	$("#randomNum").html(randomNum);
    	totalScore = 0;
    	$("#totalScore").html("");
		$(".click-show").hide();


    }

});