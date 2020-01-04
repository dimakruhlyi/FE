let randNumb = (min,max)=>{
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
 }
let guessField = {
  guessSubmit: document.querySelector('.guessSubmit2'),
  guessCount: 1
};
let resFields = {
  guesses: document.querySelector('.guesses2'),
  lastResult: document.querySelector('.lastResult2'),
};
let changedBord = document.querySelector('.changedBorder2');
let firstBord = 1, secondBord = 100;
let randomNumb;

let guessingNumber = ()=>{
  randomNumb = randNumb(firstBord,secondBord);
}

let start = () =>{
  document.querySelector('.guessSubmit2').style.display = 'none';
  document.querySelector('.guessed2').style.display = 'inline-block';
  document.querySelector('.more2').style.display = 'inline-block';
  document.querySelector('.less2').style.display = 'inline-block';
  guessingNumber();
  lastGuess();
  guessingBorder();
  previousGuess();
  guessField.guessCount++;
}
let more = () =>{
  if((+randomNumb)>firstBord) firstBord = (+randomNumb);
  guessingNumber();
  lastGuess();
  guessingBorder();
  previousGuess();
  guessField.guessCount++;
  hideArea();
}
let hideArea = () =>{
  document.querySelector('.second-box').style.display = 'none';
  document.querySelector('.first-box').style.display = 'block';
}
let hideButtons = () =>{
  document.querySelector('.lastResult2').style.display = 'none';
  document.querySelector('.more2').style.display = 'none';
  document.querySelector('.less2').style.display = 'none';
}
let less = () =>{
  if((+randomNumb)<secondBord) secondBord = (+randomNumb);
  guessingNumber();
  lastGuess();
  guessingBorder();
  previousGuess();
  guessField.guessCount++;
  hideArea();
}
let guessed = () =>{
  document.querySelector('.success2').style.display = 'block';
  document.querySelector('.success2').style.background = 'green';
  document.querySelector('.success2').textContent = `Success! Computer tried ${guessField.guessCount - 1} times. Your numer is ${randomNumb}.`;
  hideButtons();
  hideArea();
}
let previousGuess = () =>{
  if (guessField.guessCount === 1) {
    resFields.guesses.textContent = 'Previous guesses: ';
  }
  resFields.guesses.textContent += randomNumb + ' ';
}
let lastGuess = () =>{
  resFields.lastResult.textContent = `Your number is: ${randomNumb}?`;
}
let guessingBorder = () =>{
  changedBord.textContent = `Guessing border is from: ${firstBord} to ${secondBord}`;
}