 function randomNumber(min,max){
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
 }
 let counter = 1, randNumber = randomNumber(1,100);
 let guessedNumber = 0;
 let firstBorder = 1, secondBorder = 100;
 //console.log(randNumber);
 
 for(;;){
  guessedNumber = prompt(`Guess number from 1 to 100:`);
    
    //console.log(`gussed ${+guessedNumber}`);
    if(guessedNumber == null){
      alert("You cancelled!");
      break;
    }else{
      if((+guessedNumber) == randNumber){
            alert(`Congrats! You guessed number ${randNumber} ! You tried ${counter} times.`);
            break;
      }else{
          counter++;
          alert("Think more");
        }
    }
}
