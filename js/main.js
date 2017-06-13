//global
var game = {
    player: 2,
    startingPlayer: 1,
    scorePlayer1: 0,
    scorePlayer2: 0,

    increaseScorePlayer1: function(){
        this.scorePlayer1++
        $('#player1').text(game.scorePlayer1);
    },
    increaseScorePlayer2: function(){
        this.scorePlayer2++
        $('#player2').text(game.scorePlayer2);
    }

    

};


var player1Score = document.getElementById('player1');
var player2Score = document.getElementById('player2');
// var box = document.getElementsByTagName('td');



//alternating players, no duplicate values within each box
var player_one = 1;

function display_input(box){
    var element = document.getElementById(box);

    // var X = url('http://www.burroughsmarine.com/boat_anchor.png');
    //if the element is empty, return a value
    if(box.innerHTML !='');
    //player 1 = X
    if(player_one == 1){
        element.innerHTML = 'X';
        element.className = 'X';
        element.innerHTML = ('<img src=\"images/anchor-128.png\">');

        player_one = 0;
    //player 2 = O
    } else {
        element.innerHTML = "O";
        element.className = 'O';
        element.innerHTML = ('<img src=\"images/lobster-icon.png\">');
        
        player_one = 1;

    }
    checkForWinner();
}


//checks for winner based upon all the win possibilities in the game
function checkForWinner() {
    var cell1 = $('#one').attr('class');
    var cell2 = $('#two').attr('class');
    var cell3 = $('#three').attr('class');
    var cell4 = $('#four').attr('class');
    var cell5 = $('#five').attr('class');
    var cell6 = $('#six').attr('class');
    var cell7 = $('#seven').attr('class');
    var cell8 = $('#eight').attr('class');
    var cell9 = $('#nine').attr('class');
    var player1win = 'Player 1 wins! Player 2, time to step your game up.';
    var player2win = 'Player 2 wins! Player 1, time for you to score a W.';

    if ((cell1 === 'X' && cell2 === 'X' && cell3 === 'X') || (cell4 === 'X' && cell5 === 'X' && cell6 === 'X') || (cell7 === 'X' && cell8 === 'X' && cell9 === 'X') || (cell1 === 'X' && cell5 === 'X' && cell9 === 'X') || (cell3 === 'X' && cell5 === 'X' && cell7 === 'X') || (cell1 === 'X' && cell4 === 'X' && cell7 === 'X') || (cell2 === 'X' && cell5 === 'X' && cell8 === 'X') || (cell3 === 'X' && cell6 === 'X' && cell9 === 'X')) {
        alert(player1win);
        game.increaseScorePlayer1();
        reset();
        }else if((cell1 === 'O' && cell2 === 'O' && cell3 === 'O') || (cell4 === 'O' && cell5 === 'O' && cell6 === 'O') || (cell7 === 'O' && cell8 === 'O' && cell9 === 'O') || (cell1 === 'O' && cell5 === 'O' && cell9 === 'O') || (cell3 === 'O' && cell5 === 'O' && cell7 === 'O') || (cell1 === 'O' && cell4 === 'O' && cell7 === 'O') || (cell2 === 'O' && cell5 === 'O' && cell8 === 'O') || (cell3 === 'O' && cell6 === 'O' && cell9 === 'O')){ 
            alert(player2win);
            game.increaseScorePlayer2();
            reset();
        }else if((cell1 !== undefined) && (cell2 !== undefined) && (cell3 !== undefined) && (cell4 !== undefined) && (cell5 !== undefined) && (cell6 !== undefined) && (cell7 !== undefined) && (cell8 !== undefined) && (cell9 !== undefined)){
            alert('draw game');
            reset();
        }else{

        }

    }


//restart round, clears board//
var button = document.getElementById ('buttonReset')
button.addEventListener("click", function () {
    reset();
    
});

function reset(){
    var tds = document.getElementsByTagName('td');
    for(var i = 0; i < tds.length; i++) {
        tds[i].innerHTML = ''
    }


}



