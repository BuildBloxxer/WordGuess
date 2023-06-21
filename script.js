const word = "ABOUT";
const maxGuesses = 5;
let guesses = 0;

function handleGuess() {
  const inputElement = document.getElementById("wordguess-input");
  const resultElement = document.getElementById("wordguess-result");
  const guess = inputElement.value.toUpperCase();

  if (guess.length !== word.length) {
    resultElement.textContent = "Invalid guess!";
    return;
  }

  guesses++;

  let correct = 0;
  let misplaced = 0;

  for (let i = 0; i < word.length; i++) {
    if (guess[i] === word[i]) {
      correct++;
    } else if (word.includes(guess[i])) {
      misplaced++;
    }
  }

  if (correct === word.length) {
    resultElement.textContent = "Congratulations! You guessed the word.";
    disableKeyboard();
  } else {
    resultElement.innerHTML = `
      Correct: <span class="wordguess-correct">${correct}</span>
      Misplaced: <span class="wordguess-misplaced">${misplaced}</span>
    `;
  }

  inputElement.value = "";

  if (guesses >= maxGuesses) {
    resultElement.textContent = `Game over! The word was ${word}.`;
    disableKeyboard();
  }

  updateGuesses();
}

function handleLetter(letter) {
  const inputElement = document.getElementById("wordguess-input");
  inputElement.value += letter;
}

function handleBackspace() {
  const inputElement = document.getElementById("wordguess-input");
  const inputValue = inputElement.value;
  inputElement.value = inputValue.slice(0, -1);
}

function toggleDarkMode() {
  const bodyElement = document.body;
  bodyElement.classList.toggle("dark-mode");
}

function disableKeyboard() {
  const keyboardButtons = document.getElementsByClassName("wordguess-keyboard-btn");
  for (let i = 0; i < keyboardButtons.length; i++) {
    keyboardButtons[i].disabled = true;
  }
}

function updateGuesses() {
  const guessesElement = document.getElementById("wordguess-guesses");
  guessesElement.textContent = `Guesses: ${guesses}/${maxGuesses}`;
}
