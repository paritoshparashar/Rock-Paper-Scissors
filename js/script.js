function makeChoice (choice) {
    
        playerChoice = choice.toUpperCase();
        showPlayerImage(choice);
        ++tries;
        game();
    
}


function showPlayerImage (choice){

    switch(choice){

        case "rock":
            imageConatinerleft.src = "images/rock.png";
            break;

        case "paper":
            imageConatinerleft.src = "images/paper.png";
            break;
        
        case "scissor":
            imageConatinerleft.src = "images/scissor.png";
            break;

        default:
            imageConatinerleft.src = "images/rock.png"; 
            break;
    }
}

function showComputerImage (choice){

    switch(choice){

        case "ROCK":
            imageConatinerright.src = "images/rock.png";
            break;

        case "PAPER":
            imageConatinerright.src = "images/paper.png";
            break;
        
        case "SCISSOR":
            imageConatinerright.src = "images/scissor.png";
            break;

        default:
            imageConatinerright.src = "images/rock.png" ;
            break;
    }

    
}

function getComputer (){

    newNumber = Math.ceil(Math.random() * 3);

    while (newNumber === previousNumber && (previousNumber=== 1 ) ) {
        newNumber = Math.ceil(Math.random() * 3);
    }

    // Update the previousRandomNumber with the current one
    previousNumber = newNumber;
    return newNumber;

}

function computerChoiceToString (computerNum){

    switch (computerNum){

        case 1:
            return "Rock";

        case 2:
            return "Paper";

        case 3:
            return "Scissor";

   }

}


function choiceToNum(playerChoice){

    switch (playerChoice){

        case "ROCK":
            return 1;
        
        case "PAPER": 
            return 2;

        case "SCISSOR":
            return 3;    
    }

}
        
function result (playerNum, computerNum){

    if ((playerNum*computerNum) !== 3){

        switch (true) {

            case (playerNum > computerNum):
                return "Win";

            case (playerNum < computerNum):
                return "Lose";

            default:
                return "Tie";
        }
    } 

    else {

        switch (true) {

            case (playerNum < computerNum):
                return "Win";

            case (playerNum > computerNum):
                return "Lose";
            
            default:
                return "Tie";
        }

    }
}

function game (){

    
       
        computerNum = getComputer();
        computerChoice =  computerChoiceToString(computerNum).toUpperCase(); //Computer String
        showComputerImage(computerChoice);
        playerNum = choiceToNum(playerChoice);
        
        let results = result(playerNum, computerNum) 
        if ( results == "Lose") {
            ++scoreComputer;
            scoreComputerUI.textContent = scoreComputer;
         }
         else if (results == "Win") {
            ++scorePlayer;
            scorePlayerUI.textContent = scorePlayer;
         }// store this in an array/ or rather keep a score instead of printing it

         console.log(results); 
        

            
         if (bestOf === tries) {
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissor').disabled = true;
            

                 endGame();
             
           
        }
       
}

function startGame (){
    imageConatinerright.src = "images/rock.png" ;
    imageConatinerleft.src = "images/rock.png" ;
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissor').disabled = false;
    document.getElementById('start').disabled = true;
    finalResultUI.textContent = ""
    scoreComputerUI.textContent = scoreComputer;
    scorePlayerUI.textContent = scorePlayer;

}

function endGame (){
    
    document.getElementById('start').disabled = false;
    
    
   if (scorePlayer > scoreComputer) {
    finalResultUI.textContent = "Player WINs";
    } 
   else if (scorePlayer < scoreComputer){(
    finalResultUI.textContent = "Computer WINS");
    }
    else{
        finalResultUI.textContent = "It's a TIE"
    }
    tries = 0;
    scoreComputer = 0;
    scorePlayer = 0;
    
}

let computerChoice;
let playerChoice;
let playerNum;
let computerNum;
let results;
let previousNumber = null;
let newNumber = null;
let scorePlayer = 0
let scoreComputer = 0;
let bestOf = 5;
let tries = 0;
const imageConatinerleft = document.getElementById('final-image-player');
const imageConatinerright = document.getElementById('final-image-computer');
const scorePlayerUI = document.getElementById('sP');
const scoreComputerUI = document.getElementById('sC');
const finalResultUI = document.getElementById('rUI');

document.getElementById('rock').disabled = true;
document.getElementById('paper').disabled = true;
document.getElementById('scissor').disabled = true;
document.getElementById('start').disabled = false;


