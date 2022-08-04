// Create variables from elements

const guessInput = document.querySelector("#guessinput");
const guessSubmit = document.querySelector("#guesssubmit");

const attempts = document.querySelector("#attempts");
const lastAnswer = document.querySelector("#lastanswer");
const lowOrHigh = document.querySelector("#loworhigh");

const guessCount = 1;
let resetButton;

guessInput.focus();

// Create random number between 1 and 1000

let randomNumber = Math.floor(Math.random() * 1000) + 1;

// Add function that checks if your guess is correct or incorrect

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
    
    // Disable input after 20 attempts and show game is over
    } else if (guessAttempt === 20) {
        lastAnswer.textContent = 'Game over!';
        lowOrHigh.textContent = '';
        gameOver();
    } else {
        lastAnswer.textContent = 'Wrong!';
        lastAnswer.style.backgroundColor = 'red';

        // Display if guess was too low or too high
        if (guessAttempt < randomNumber) {
            lowOrHigh.textContent = 'Your guess is too low!';
        } else if (guessAttempt > randomNumber) {
            lowOrHigh.textContent = 'Your guess is too high!';
        }
    }

    // Keep track of number of attempts
    guessCount++;
    guessInput.value = '';
    guessInput.focus();
}

// Display all attempted numbers

// Display wrongt guesses



// Create restart button to play game again

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
}