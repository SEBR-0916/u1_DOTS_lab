/*
 * DOTS: Level Three
 *
 */
//small ball is 20, medium ball is 10,large ball is 5
score = 0
let ball = document.querySelector('.js-ball')
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')



const triple = document.querySelectorAll('.js-ball')
console.log('.js-ball')
for (let i =0; i< triple.length; i++ ) {
    triple[i].addEventListener('click', () => {
      const something = triple[i].getAttribute('data-increment')
      console.log(something)
        score = score + parseInt(something)
        console.log('data-increment')
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