//initial number 
let totalAttempts = 5;
let attempts = 0;
let totalWon=0;
let totalLost=0;




//finding value 
const cardBody = document.querySelector(".card-body");
const form = cardBody.querySelector("form");
const guessingNumber = form.querySelector("#gussingNumber");
const checkButton = form.querySelector("#btn");
const result = cardBody.querySelector(".result");
const remaining = cardBody.querySelector(".remaining");
const lostWonMessage = document.createElement("p");
form.addEventListener("submit",function(event)
{
    event.preventDefault();
    
    attempts++;
    if(guessingNumber==5)
    {
        
        guessingNumber.disabled = true;
        checkButton.disabled = true;

    }else{
        checkNumber(guessingNumber.value);
        remaining.innerHTML=`you are remainig :${totalAttempts-attempts}`;

    }
    guessingNumber.value = "";
});
  function checkNumber(guessingNumber){
    const randomNumber = getRandomNumber(5);
    if(guessingNumber == randomNumber)
    {
        result.innerHTML= `you have won`;
        totalWon++;
    }else{
  
  result.innerHTML=`you have lost ; Random number was: ${randomNumber}`;
  totalLost++;
    }

    lostWonMessage.innerHTML = `Won : ${totalWon} ,Lost : ${totalLost}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);

                                       
  }
 

function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}

