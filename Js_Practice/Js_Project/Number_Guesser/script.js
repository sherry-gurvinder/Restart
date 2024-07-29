console.log("welcome");


const minus = () =>
{
    console.log("Minus");
    let user_Number = document.getElementById('user_no').value;
    if(user_Number>0 && user_Number<=10)
    {
        user_Number--;
        document.getElementById("user_no").value=user_Number;
    }
    button_Disabled (user_Number);

}
const addition = () =>
{
       let user_Number = document.getElementById('user_no').value;
    user_Number++;
    if(user_Number>=0 && user_Number<=10)
    {
    document.getElementById("user_no").value=user_Number;
   
    }
    button_Disabled (user_Number);
   
}
const button_Disabled = (active_user_no) =>
{
        
   
    
    if(active_user_no<10)
    {
       
        document.getElementById("addition").disabled=false;
        console.log(active_user_no+"active_user_no<=10");
    }
    else
    {
        document.getElementById("addition").disabled=true;
        console.log(active_user_no+"active_user_no<=10 else");
    }

    if(active_user_no>0)
    {
        document.getElementById("minus").disabled=false;
        console.log(active_user_no+"active_user_no>=0 If");
    }
    else
    {
        document.getElementById("minus").disabled=true;
        console.log(active_user_no+"active_user_no>=0 If");
    }
    
}


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
document.getElementById("game_round").innerHTML=currentRoundNumber;
// Write your code below:

const generateTarget = () =>
{
  let secret_target_number = Math.floor(Math.random() * 10);
  const computerGuess = Math.floor(Math.random() * 10);
  let user_Number = document.getElementById('user_no').value;
  console.log(user_Number,computerGuess,secret_target_number);
  document.getElementById("target_no").innerHTML=secret_target_number;
  document.getElementById("computer_guess").innerHTML=computerGuess;
  updateScore((compareGuesses(user_Number,computerGuess,secret_target_number)));


}

const compareGuesses = (user_guess,computer_guess,secret_no) =>
{

  let  computer_No =computer_guess ;
  let human_No = user_guess;
  let secret = secret_no;
  if(human_No < secret)
  {
     human_No = human_No - secret;
  }
  else
  {
    human_No = human_No - secret;
  }
  if(computer_No < secret)
  {
     computer_No = computer_No - secret;
  }
  else
  {
     computer_No = computer_No - secret;
  }

  if(human_No===computer_No)
  {
    return("Human");
  }
  else if(human_No < computer_No)
  {
    return("Human");
  }
  else
  {
    return("computer");
  }
}

const updateScore = ( result) =>
{
  if(result==="Human")
  {
    humanScore++;
    document.getElementById("human_score").innerHTML=humanScore;
  }
  else
  {
    computerScore++;
    document.getElementById("computer_score").innerHTML=computerScore;
  }
}

const advanceRound = () =>
{
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
currentRoundNumber++;
document.getElementById("computer_score").innerHTML=computerScore;
document.getElementById("human_score").innerHTML=humanScore;
document.getElementById("game_round").innerHTML=currentRoundNumber;
}



const guess_Game_Start = () =>
{
    let user_Number = document.getElementById('user_no').value;
    alert(user_Number);
    if(user_Number<=0 || user_Number>=10)
    {
        alert("nNumber is out of range. It’s not possible to set a number outside this range");
        return false;
    }
   
    generateTarget();
}

