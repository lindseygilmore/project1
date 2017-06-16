
//GLOBAL VARIABLES/////////////////////////////////////////////////////////////

var game = { //game defines the game and who/what is involved
    players: 2,
    startingPlayer: 1,
    scorePlayer1: 0,
    scorePlayer2: 0,

    increaseScorePlayer1: function(){ //increase score of player one by 1
        this.scorePlayer1++
        $('#player1').text(game.scorePlayer1);
    },
    increaseScorePlayer2: function(){ //increase the score of player two by 1
        this.scorePlayer2++
        $('#player2').text(game.scorePlayer2);
    }

    

};

var player_one = 1;
var player1Score = document.getElementById('player1');
var player2Score = document.getElementById('player2');



//EVENT LISTENER FUNCTION//////////////////////////////////////////////////////

function display_input(box){ //function to call something once a box is clicked

    var element = document.getElementById(box); //declaring var element for when the box is clicked, the ID will pass through

    if(element.className === 'X' || element.className === 'O'){ //if the element contains class 'X' or 'O',
        return; //return, or 'kick back', the remaining if statements in the function and leave as-is once the cell is clicked to avoid multiple classes
    }

    if(player_one == 1){ //defined in the global scope
        element.innerHTML = 'X'; //set the innerHTML to 'X'
        element.className = 'X'; //and set the class to 'X'
        element.innerHTML = ('<img src=\"images/anchor-128.png\">'); //and set the image
        player_one = 0; //switch to player 2
  
    } else { //if player 2 makes a play, do the following
        element.innerHTML = "O"; //set the innerHTML to 'O'
        element.className = 'O'; //and set the class to 'O'
        element.innerHTML = ('<img src=\"images/lobster-icon.png\">'); //and set the image
        player_one = 1; //switch to player 1

    }

    checkForWinner(); //check for the winner after each play is made
}



//CHECK WINNER FUNCTION////////////////////////////////////////////////////////

function checkForWinner() { //make a var for each cell and set them equal to class so the if statemenets can read the class of each cell
    var cell1 = $('#one').attr('class'); 
    var cell2 = $('#two').attr('class'); 
    var cell3 = $('#three').attr('class');
    var cell4 = $('#four').attr('class');
    var cell5 = $('#five').attr('class');
    var cell6 = $('#six').attr('class');
    var cell7 = $('#seven').attr('class');
    var cell8 = $('#eight').attr('class');
    var cell9 = $('#nine').attr('class');

    var player1win = 'Player 1 wins! Player 2, time to step your game up.'; //var for when player 1 wins
    var player2win = 'Player 2 wins! Player 1, time for you to score a W.'; // var for when player 2 wins

    if ((cell1 === 'X' && cell2 === 'X' && cell3 === 'X') || (cell4 === 'X' && cell5 === 'X' && cell6 === 'X') || (cell7 === 'X' && cell8 === 'X' && cell9 === 'X') || (cell1 === 'X' && cell5 === 'X' && cell9 === 'X') || (cell3 === 'X' && cell5 === 'X' && cell7 === 'X') || (cell1 === 'X' && cell4 === 'X' && cell7 === 'X') || (cell2 === 'X' && cell5 === 'X' && cell8 === 'X') || (cell3 === 'X' && cell6 === 'X' && cell9 === 'X')) {
        alert(player1win); //if one of the player 1 win combinatinos are true, tell the players that player 1 won
        game.increaseScorePlayer1(); //increase player 1 score
        reset(); //reset the game board

        }else if((cell1 === 'O' && cell2 === 'O' && cell3 === 'O') || (cell4 === 'O' && cell5 === 'O' && cell6 === 'O') || (cell7 === 'O' && cell8 === 'O' && cell9 === 'O') || (cell1 === 'O' && cell5 === 'O' && cell9 === 'O') || (cell3 === 'O' && cell5 === 'O' && cell7 === 'O') || (cell1 === 'O' && cell4 === 'O' && cell7 === 'O') || (cell2 === 'O' && cell5 === 'O' && cell8 === 'O') || (cell3 === 'O' && cell6 === 'O' && cell9 === 'O')){ 
            alert(player2win); //if one of the player 2 win combinatinos are true, tell the players that player 2 won
            game.increaseScorePlayer2(); //increae player 2 score
            reset(); //reset the game board

        }else if((cell1 !== undefined) && (cell2 !== undefined) && (cell3 !== undefined) && (cell4 !== undefined) && (cell5 !== undefined) && (cell6 !== undefined) && (cell7 !== undefined) && (cell8 !== undefined) && (cell9 !== undefined)){
            alert('Tie game! Try again.'); //if the win is undefined, make the players aware that it's a draw game
            reset(); //reset the game board

        
        }else{


        }

    }



//RESET FUNCTION///////////////////////////////////////////////////////////////

var button = document.getElementById ('buttonReset') //variable to grab the button in the html

button.addEventListener("click", function () { //once the button is clicked, add an event listener to reset the game
    reset();
    
});


function reset(){ //create a function to reset the game
    var tds = document.getElementsByTagName('td'); //make a variable to address each box in the game board
    for(var i = 0; i < tds.length; i++) { //make a loop to go through each box to clear it
        tds[i].innerHTML = '' //clear the box
        tds[i].classList.remove('X', 'O'); //remove each class when resetting the board
        tds[i].removeAttribute('class');
    }


}





