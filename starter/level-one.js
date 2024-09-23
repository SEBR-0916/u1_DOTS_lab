/*
 * DOTS: Level One
 *
 */


let score = 0
const ball = document.querySelector('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

//document.getElementbyClassName.innerText = score



ball.addEventListener('click', () => {
    score = score + 10;
    scoreDisplay.innerText=score
    if (score >= 100){
        levelWinner.style.opacity=1;
    }
  });



console.log()

//js-ball.addEventListener