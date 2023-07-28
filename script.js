function makeChoice (choice) {
    playerChoice = choice.toUpperCase();
    showPlayerImage(choice);
    game();
}


function showPlayerImage (choice){

    const imageConatiner = document.getElementById('final-image-player');

    switch(choice){

        case "rock":
            imageConatiner.src = "images/rock.png";
            break;

        case "paper":
            imageConatiner.src = "images/paper.png";
            break;
        
        case "scissor":
            imageConatiner.src = "images/scissor.png";
            break;

        default:
            imageConatiner.src = "images/rock.png" 
            break;
    }
}

function showComputerImage (choice){

    const imageConatiner = document.getElementById('final-image-computer');

    switch(choice){

        case "ROCK":
            imageConatiner.src = "images/rock.png";
            break;

        case "PAPER":
            imageConatiner.src = "images/paper.png";
            break;
        
        case "SCISSOR":
            imageConatiner.src = "images/scissor.png";
            break;

        default:
            imageConatiner.src = "images/rock.png" 
            break;
    }

    
}

function getComputer (){

    newNumber = Math.ceil(Math.random() * 3);

    while (newNumber === previousNumber) {
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

function playerSelection (){
   return prompt("Enter Your Choice", "Rock");
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
         }
         else if (results == "Win") {
            ++scoreComputer;
         }// store this in an array/ or rather keep a score instead of printing it

         console.log(results);      
    
}

function startGame (){

    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissor').disabled = false;
    document.getElementById('start').disabled = true;

    

}

let cimputerCoice;
let playerChoice;
let playerNum;
let computerNum;
let results;
let previousNumber = null;
let newNumber = null;
let scorePlayer = 0
let scoreComputer = 0;
let bestOf = 0;
document.getElementById('rock').disabled = true;
document.getElementById('paper').disabled = true;
document.getElementById('scissor').disabled = true;

//(scorePlayer > scoreComputer) ? console.log("You WIN"): console.log("You LOSE");


