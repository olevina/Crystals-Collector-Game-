$(document).ready(function () {

    //all the vars
    var userTotal = 0;
    var crystal1Click;
    var crystal2Click;
    var crystal3Click;
    var crystal4Click;
    var win = 0;
    var loss = 0;


    //adds value of each crystal to userTotal
    $("#clickCrystal1").on("click", function () {
        crystal1Click = 40;
        userTotal = userTotal + crystal1Click;
        $('#totalScore').text(userTotal);
        console.log(userTotal);
        winsAndLosses();

    });
    $("#clickCrystal2").on("click", function () {
        crystal2Click = 20;
        userTotal = userTotal + crystal2Click;
        $('#totalScore').text(userTotal);
        winsAndLosses();

    });
    $("#clickCrystal3").on("click", function () {
        crystal3Click = 5;
        userTotal = userTotal + crystal3Click;
        $('#totalScore').text(userTotal);
        winsAndLosses();

    });
    $("#clickCrystal4").on("click", function () {
        crystal4Click = 1;
        userTotal = userTotal + crystal4Click;
        $('#totalScore').text(userTotal);
        winsAndLosses();
    });



    //generates random number in randomNumber div in html on load. 
    var minNumber = 19;
    var maxNumber = 120;
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
    $('#randomNumber').html(randomnumber);
    return false;


    //updates wins and losses
    function winsAndLosses() {

        if (randomnumber === userTotal) {
            win++;
            $('#wins').text(win);
            reset();
        }

        else if (randomnumber < userTotal) {
            loss++;
            $('#losses').text(loss);
            reset();
        }
    }

    //function to reset total score and generate another random number when you win or loose
    function reset() {
        userTotal = 0;
        $('#totalScore').text(userTotal);
        var minNumber = 19;
        var maxNumber = 120;
        var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
        $('#randomNumber').html(randomnumber);
        return false;
    }


});



