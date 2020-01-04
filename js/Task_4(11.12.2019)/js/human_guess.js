let randNumber = (min,max)=>{
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
 }
let guessedFields = {
  guessField: document.querySelector('.guessField'),
  guessSubmit: document.querySelector('.guessSubmit'),
  count: 1
};
let resultFields = {
  guesses: document.querySelector('.guesses'),
  lastResult: document.querySelector('.lastResult'),
  lowOrHi: document.querySelector('.lowOrHi')
};
let changedBorder = document.querySelector('.changedBorder');
let randomNumber = randNumber(1,100);
let firstBorder = 1, secondBorder = 100;
//console.log(randomNumber);
let hideArea2 = () =>{
  document.querySelector('.first-box').style.display = 'none';
  document.querySelector('.second-box').style.display = 'block';
}
let hideInputs = () =>{
  document.querySelector('.form').style.display = 'none';
  document.querySelector('.gg').style.display = 'block';
}

let checkGuess = ()=>{
  let userGuess = Math.round(Number(guessedFields.guessField.value));
  if (guessedFields.count === 1) {
    resultFields.guesses.textContent = 'Previous guesses: ';
  }

  resultFields.guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    resultFields.lastResult.textContent = `Congrats! You tried ${+guessedFields.count} times. Computer numer is ${randomNumber}.`;
    resultFields.lastResult.style.backgroundColor = 'green';
    resultFields.lowOrHi.textContent = '';
    hideInputs();
  } else {
    resultFields.lastResult.textContent = 'Wrong!';
    resultFields.lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      resultFields.lowOrHi.textContent = 'Low!' ;
      if((+userGuess)> firstBorder)firstBorder = (+userGuess);
    }
    if(userGuess > randomNumber) {
      resultFields.lowOrHi.textContent = 'High!';
      if((+userGuess)<secondBorder) secondBorder = (+userGuess);
    }
    setTimeout (function(){
      hideArea2();
    },1500);
  
  }
//console.log(randomNumber);
  changedBorder.textContent = `Guessing border is from: ${firstBorder} to ${secondBorder}`;
  guessedFields.count++;
  guessedFields.guessField.value = '';
  guessedFields.guessField.focus();
}
guessedFields.guessSubmit.addEventListener('click', checkGuess);
