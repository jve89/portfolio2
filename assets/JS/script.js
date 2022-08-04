// Create variables from elements

let randomNumber = Math.floor(Math.random() * 1000) + 1;

let guessLabel = document.querySelector("#guesslabel");
let guessInput = document.querySelector("#guessinput");
let guessSubmit = document.querySelector("#guesssubmit");

let attempts = document.querySelector("#attempts");
let lastAnswer = document.querySelector("#lastanswer");
let lowOrHigh = document.querySelector("#loworhigh");

let guessCount = 1;
let resetButton;

guessInput.focus();

guessSubmit.addEventListener('click', checkGuess);

function gameOver() {
    guessInput.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start a new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    let resetAll = document.querySelectorAll('.result-area span');
    for (let i = 0; i < resetAll.length; i++) {
        resetAll[i].textContent = '';
    }


    resetButton.parentNode.removeChild(resetButton);

    guessInput.disabled = false;
    guessSubmit.disabled = false;
    guessInput.value = '';
    guessInput.focus();

    lastAnswer.style.backgroundColor = '#12aab4';
    attempts.style.backgroundColor = '#12aab4';

    randomNumber = Math.floor(Math.random() * 1000) + 1;
}

function checkGuess() {
    let guessAttempt = Number(guessInput.value);
    if (guessCount === 1) {
        attempts.textContent = 'previous attempts: ';
    }
    attempts.textContent += guessAttempt + '';
    attempts.style.backgroundColor = 'blue';
    if (guessAttempt === randomNumber) {
        lastAnswer.textContent = 'Congratulations! You got it right!';
        lastAnswer.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        gameOver();
    
 
    } else if (guessAttempt === 20) {
        lastAnswer.textContent = 'Game over!';
        lowOrHigh.textContent = '';
        gameOver();
    } else {
        lastAnswer.textContent = 'Wrong!';
        lastAnswer.style.backgroundColor = 'red';


        if (guessAttempt < randomNumber) {
            lowOrHigh.textContent = 'Your guess is too low!';
        } else if (guessAttempt > randomNumber) {
            lowOrHigh.textContent = 'Your guess is too high!';
        }
    }

    guessCount++;
    guessInput.value = '';
    guessInput.focus();
}