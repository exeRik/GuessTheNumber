"using strict";
document.addEventListener("DOMContentLoaded", function () {

    let mystreyNumber = Math.trunc(Math.random() * 20) + 1;
    let scoreboard = 10;
    let highscore = 0;
    // document.querySelector('.number').textContent = mystreyNumber;

    document.querySelector(".check").addEventListener("click", function () {
        const guess = document.querySelector(".guess").value;


        if (!guess) {
            if (scoreboard > 1) {
                document.querySelector(".message").textContent = "Please insert any number!😵‍💫";
                scoreboard--;
                document.querySelector(".score").textContent = scoreboard;

            }
            else {
                document.querySelector(".score").textContent = 0;
                document.querySelector('body').style.backgroundColor = " #b90404";
                document.querySelector(".message").textContent = "YOU LOSE!!☹️..Try Again. ";
            }
        }
        else if (guess > 20) {
            if (scoreboard > 1) {
                document.querySelector(".message").textContent = "Enter the number within the range!😵";
                scoreboard--;
                document.querySelector(".score").textContent = scoreboard;

            }
            else {
                document.querySelector(".score").textContent = 0;
                document.querySelector('body').style.backgroundColor = " #b90404";
                document.querySelector(".message").textContent = "YOU LOSE!!☹️..Try Again. ";
            }
        }
        else if (guess == mystreyNumber) {
            document.querySelector('.number').textContent = mystreyNumber;
            document.querySelector(".message").textContent = "Correct number!!🥳";
            document.querySelector('body').style.backgroundColor = " #18c045";
            if (highscore < scoreboard) {
                document.querySelector(".highscore").textContent = scoreboard;
                document.querySelector(".message").textContent = "NEW HIGH SCORE!!!🎉🎉";
            }
        }
        else if (guess < mystreyNumber) {
            if (scoreboard > 1) {
                document.querySelector(".message").textContent = "Too LOW!";
                scoreboard--;
                document.querySelector(".score").textContent = scoreboard;

            }
            else {
                document.querySelector(".score").textContent = 0;
                document.querySelector('body').style.backgroundColor = " #b90404";
                document.querySelector(".message").textContent = " YOU LOSE!!☹️..Try Again.";
            }

        }
        else if (guess > mystreyNumber) {
            if (scoreboard > 1) {
                document.querySelector(".message").textContent = "Too HIGH!";
                scoreboard--;
                document.querySelector(".score").textContent = scoreboard;

            }
            else {
                document.querySelector(".score").textContent = 0;
                document.querySelector('body').style.backgroundColor = " #b90404";
                document.querySelector(".message").textContent = "YOU LOSE!!☹️..Try Again.";
            }

        }
    });
    document.querySelector(".again").addEventListener("click", function () {
        // document.querySelector('.number').textContent = mystreyNumber;
        mystreyNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector(".score").textContent = 10;
        document.querySelector('.number').textContent = '?';
        document.querySelector('body').style.backgroundColor = " #222";
        document.querySelector(".message").textContent = "One more chance!";
        document.querySelector(".guess").value = "";

    });

});

