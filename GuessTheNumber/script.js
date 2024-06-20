'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
// console.log(secretNumber);
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // let  score = document.querySelector('.score').textContent; 
    const highscore = document.querySelector('.highscore').textContent;
    if ( !guess)
        document.querySelector('.message').textContent = 'Enter a numberr YOU DUMBASS!🤬';
    else if(guess===secretNumber)
        {
            document.querySelector('.message').textContent = '🥳 Correct Numberr YAYY!!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = secretNumber;
             if( score > highscore)
                {
                    // highscore === score;
                    document.querySelector('.highscore').textContent = score;
                }
                
        }

        else if( guess!== secretNumber){
            document.querySelector('.message').textContent = guess> secretNumber?"TOO HIGH!🙄":"TOO LOW! 🥲";
            score-- ;
            document.querySelector('.score').textContent = score;
             if( score == 0)
                {
                    document.querySelector('.message').textContent = "YOUU LOSEEERR 😂😂";
                    document.querySelector('body').style.backgroundColor = '#ff0000';
                }
        }
    // else if (guess> secretNumber)
    //     {
    //         document.querySelector('.message').textContent = "TOO HIGH!🙄";
    //         score-- ;
    //         document.querySelector('.score').textContent = score;
    //          if( score == 0)
    //             {
    //                 document.querySelector('.message').textContent = "YOUU LOSEEERR 😂😂";
    //                 document.querySelector('body').style.backgroundColor = '#ff0000';
    //             }

    //     }
    // else
    //    {
    //      document.querySelector('.message').textContent = "TOO LOW! 🥲";
    //      score-- ;
    //      document.querySelector('.score').textContent = score;
    //      if( score == 0)
    //         {
    //             document.querySelector('.message').textContent = "YOUU LOSEEERR 😂😂";
    //             document.querySelector('body').style.backgroundColor = '#ff0000';
    //         }
    //    }

});

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start Guessing...';
    score = 20;
    document.querySelector('.score').textContent = '20';
    secretNumber = Math.trunc(Math.random()*20)+1;
    console.log (secretNumber);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';


})
