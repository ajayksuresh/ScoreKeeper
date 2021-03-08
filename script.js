const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');  

let p1score = 0;
let p2score = 0;

let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function(){
    if(!isGameOver){
        p1score++;
        if(p1score === winningScore){
            isGameOver = true;
            p1Display.classList.add('winner'); 
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1score;
    }
})

p2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2score++;
        if(p2score === winningScore){
            isGameOver = true;   
            p2Display.classList.add('winner'); 
            p1Display.classList.add('loser');    
        }
        p2Display.textContent = p2score;
    } 
})

winningScoreSelect.addEventListener('change', function(){
    resetGame();
    winningScore = parseInt(this.value);
})

reset.addEventListener('click',resetGame);

function resetGame(){
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1score = 0;
    p2score = 0;
    isGameOver = false;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}