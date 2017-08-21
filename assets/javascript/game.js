$(document).ready(function() {

    //Global variables.
    var randomNum = Math.floor(Math.random() * 101) + 19;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    $("#randomNum").html(randomNum);
    $(".click-show").hide();
    $("#playAgain").hide();

    $('#ruby').on("click", function() {
        var gemNum1 = Math.floor(Math.random() * 11) + 1;
        totalScore = totalScore + gemNum1;
        $("#totalScore").html(totalScore);
        $("#ruby").hide();
        $("#btn-1").show("#gemNum1").html(gemNum1);
        $("#btn-1").on("click", function() {
            totalScore = totalScore + gemNum1;
            $("#totalScore").html(totalScore)
            wol();

        });

    });

    $('#sapphire').on("click", function() {
        var gemNum2 = Math.floor(Math.random() * 11) + 1;
        totalScore = totalScore + gemNum2;
        $("#totalScore").html(totalScore);
        $("#sapphire").hide();
        $("#btn-2").show("#gemNum2").html(gemNum2);
        $("#btn-2").on("click", function() {
            totalScore = totalScore + gemNum2;
            $("#totalScore").html(totalScore)
            wol();
        });



    });

    $('#diamond').on("click", function() {
        var gemNum3 = Math.floor(Math.random() * 11) + 1;
        totalScore = totalScore + gemNum3;
        $("#totalScore").html(totalScore);
        $("#diamond").hide();
        $("#btn-3").show("#gemNum3").html(gemNum3);
        $("#btn-3").on("click", function() {
            totalScore = totalScore + gemNum3;
            $("#totalScore").html(totalScore);
            wol();
        });


    });

    $('#crystal').on("click", function() {
        var gemNum4 = Math.floor(Math.random() * 11) + 1;
        totalScore = totalScore + gemNum4;
        $("#totalScore").html(totalScore);

        $("#crystal").hide();
        $("#btn-4").show("#gemNum4").html(gemNum4);
        $("#btn-4").on("click", function() {
            totalScore = totalScore + gemNum4;
            $("#totalScore").html(totalScore);
            wol();
        });


    });

    function wol() {
        if (totalScore === randomNum) {
            wins++;
            $("#wins").html(wins);
            $("#feedback").html("You Win! Play Again!");
            gameOver();

        } else if (totalScore > randomNum) {
            losses++;
            $("#losses").html(losses);
            $("#feedback").html("You Lose. Try Again!");
            gameOver();

        } else {
            $("#feedback").html("Match Your Total Score to the Computer's Score");
        }
    };

    function gameOver() {
        $("#playAgain").show();
        totalScore = 0;

    };

    $("#playAgain").on("click", function() {
    	randomNum = Math.floor(Math.random() * 101) + 19;
        $("#randomNum").html(randomNum);
        $("#totalScore").html(totalScore);
        $(".click-show").hide();
        $(".click-hide").show();
        $("#feedback").html("Click the Gems to See Your Numbers!");
        $("#playAgain").hide();
    })

});