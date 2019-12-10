let randNumber = (min,max)=>{
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
 }
let guessedFields = {
  guessField: document.querySelector('.guessField'),
  guessSubmit: document.querySelector('.guessSubmit'),
  guessCount: 1
};
let resultFields = {
  guesses: document.querySelector('.guesses'),
  lastResult: document.querySelector('.lastResult'),
  lowOrHi: document.querySelector('.lowOrHi')
};
let changedBorder = document.querySelector('.changedBorder');
let randomNumber = randNumber(1,100);
let firstBorder = 1, secondBorder = 100;
console.log(randomNumber);

let checkGuess = ()=>{
  let userGuess = Number(guessedFields.guessField.value);
  if (guessedFields.guessCount === 1) {
    resultFields.guesses.textContent = 'Previous guesses: ';
  }

  resultFields.guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    resultFields.lastResult.textContent = `Congrats! You tried ${+guessedFields.guessCount} times.`;
    resultFields.lastResult.style.backgroundColor = 'green';
    resultFields.lowOrHi.textContent = '';
  } else {
    resultFields.lastResult.textContent = 'Wrong!';
    resultFields.lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      resultFields.lowOrHi.textContent = 'Low!' ;
      firstBorder+=5;
      if(firstBorder > randomNumber) firstBorder = randomNumber - 1;
    }
    if(userGuess > randomNumber) {
      resultFields.lowOrHi.textContent = 'High!';
      secondBorder-=5;  
      if(secondBorder < randomNumber) secondBorder = randomNumber + 1;
    }
  }
console.log(randomNumber);
  changedBorder.textContent = `Guessing border is from: ${firstBorder} to ${secondBorder}`;
  guessedFields.guessCount++;
  guessedFields.guessField.value = '';
  guessedFields.guessField.focus();
}
guessedFields.guessSubmit.addEventListener('click', checkGuess);