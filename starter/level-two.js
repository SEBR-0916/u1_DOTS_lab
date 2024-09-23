/*
 * DOTS: Level Two
 *
 */





score = 0
let ball = document.querySelector('.js-ball')
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')

   const triple = document.querySelectorAll('.js-ball')
    console.log('.js-ball')
    for (let i =0; i< triple.length; i++ ) {
        triple[i].addEventListener('click', () => {
            score = score + 10;
            console.log('Ten Points')   
            scoreDisplay.innerText = score;
            console.log('Score Again')
            if (score >= 100 ) {
            console.log(' You Win')
            levelWinner.style.opacity = 1;
            }
            console.log(score)
            console.log(scoreDisplay)
        });
    }; 