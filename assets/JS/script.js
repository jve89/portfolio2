// Generate a random number between 1 and 1000
let randomNumber = Math.floor(Math.random() * 500) + 1;

// Create variables from elements
let guessLabel = document.querySelector("#guesslabel");
let guessInput = document.querySelector("#guessinput");
let guessSubmit = document.querySelector("#guesssubmit");

let attempts = document.querySelector("#attempts");
let lastAnswer = document.querySelector("#lastanswer");
let lowOrHigh = document.querySelector("#loworhigh");

// Other important variables
let guessCount = 1;
let resetButton;

// Focus cursor on input field after site is loaded
guessInput.focus();

// Add event listener to submit button. When clicked the checkGuess function will be used
guessSubmit.addEventListener('click', checkGuess);

// Check the inserted number and display the previous used numbers, the result, and a hint
function checkGuess() {
    let guessAttempt = Number(guessInput.value);
    if (guessCount === 1) {
        attempts.textContent = 'previous attempts: ';
    }
    guessCount++;
    attempts.textContent += guessAttempt + ' ';

    if (guessAttempt === randomNumber) {
        lastAnswer.textContent = 'Congratulations! You got it right!';
        lastAnswer.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        gameOver();
    
    } else if (guessCount === 10) {
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
    guessInput.value = '';
    guessInput.focus();
}

// Game over function to reset the game after too many attempts or answering right answer
function gameOver() {

    guessInput.disabled = true;
    guessSubmit.disabled = true;

    let resetButton = document.createElement('button');
    resetButton.textContent = 'Start a new game';

    let resetButtonDiv = document.getElementById('resetbuttondiv')
    resetButtonDiv.appendChild(resetButton);

    resetButton.addEventListener('click', resetGame);
}

// After clicking newly created reset button, function resetGame will be used 

function resetGame() {
    guessCount = 1;

    let resetAll = document.querySelectorAll('.result-area div');
    for (let i = 0; i < resetAll.length; i++) {
        resetAll[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessInput.disabled = false;
    guessSubmit.disabled = false;
    guessInput.value = '';
    guessInput.focus();

    randomNumber = Math.floor(Math.random() * 500) + 1;
}

