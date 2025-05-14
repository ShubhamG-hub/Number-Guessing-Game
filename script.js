let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const guessValue = guessInput.value.trim();

      // Check for empty input
      if (guessValue === "") {
        message.textContent = "Please enter a number.";
        message.style.color = "orange";
        return;
      }
    const guess = parseInt(guessInput.value);
    attempts++;

    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        message.style.color = 'green';
    } else if (guess > randomNumber) {
        message.textContent = 'Too High! Try again.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Too Low! Try again.';
        message.style.color = 'red';
    }
}