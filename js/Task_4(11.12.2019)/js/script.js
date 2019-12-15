let randNumber = (min,max)=>{
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
 }
let guessedFields = {
  guessSubmit: document.querySelector('.guessSubmit'),
  guessCount: 1
};
let resultFields = {
  guesses: document.querySelector('.guesses'),
  lastResult: document.querySelector('.lastResult'),
};
let changedBorder = document.querySelector('.changedBorder');
let firstBorder = 1, secondBorder = 100;
let randomNumber;

let guessingNumber = ()=>{
  randomNumber = randNumber(firstBorder,secondBorder);
}

let start = () =>{
  document.querySelector('.guessSubmit').style.display = 'none';
  document.querySelector('.guessed').style.display = 'inline-block';
  document.querySelector('.more').style.display = 'inline-block';
  document.querySelector('.less').style.display = 'inline-block';
  guessingNumber();
  lastGuess();
  guessingBorder();
  previousGuess();
  guessedFields.guessCount++;
}
let more = () =>{
  if((+randomNumber)>firstBorder) firstBorder = (+randomNumber);
  guessingNumber();
  lastGuess();
  guessingBorder();
  previousGuess();
  guessedFields.guessCount++;
}
let less = () =>{
  if((+randomNumber)<secondBorder) secondBorder = (+randomNumber);
  guessingNumber();
  lastGuess();
  guessingBorder();
  previousGuess();
  guessedFields.guessCount++;
}
let guessed = () =>{
  document.querySelector('.success').style.display = 'block';
  document.querySelector('.success').style.background = 'green';
  document.querySelector('.success').textContent = `Success! Computer tried ${guessedFields.guessCount-1} times. Your numer is ${randomNumber}.`;
}
let previousGuess = () =>{
  if (guessedFields.guessCount === 1) {
    resultFields.guesses.textContent = 'Previous guesses: ';
  }
  resultFields.guesses.textContent += randomNumber + ' ';
}
let lastGuess = () =>{
  resultFields.lastResult.textContent = `Your number is: ${randomNumber}?`;
}
let guessingBorder = () =>{
  changedBorder.textContent = `Guessing border is from: ${firstBorder} to ${secondBorder}`;
}