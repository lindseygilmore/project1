
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
var box = document.getElementsByTagName('td');
// var X = "<img id='playerX' src='images/playX.png'/>";


// function insert(){
//             var src = document.getElementsByClassName("td");
//             var img = document.createElement("img");
//             img.src = "./images/playX.png";
//             src.attr();
//         }

//alternating players, no duplicate values within each box
var player_one = 1;

function display_input(box){
    var element = document.getElementById(box);
    // var X = url('http://www.burroughsmarine.com/boat_anchor.png');
    //if the element is empty, return a value
    if(element.innerHTML !='');
    //player 1 = X
    if(player_one == 1){
        element.innerHTML = 'X';
        // $('.td').attr('src', "/images/playX.png");
        // insert();
        // element.append('<img id="img1" src=".images/playO.png"/>');
        player_one = 0;
    //player 2 = O
    } else {
        element.innerHTML = "O";
        player_one = 1;

    }
    checkForWinner();
}


//checks for winner based upon all the win possibilities in the game
function checkForWinner() {
    var cell1 = $('#one').text();
    var cell2 = $('#two').text();
    var cell3 = $('#three').text();
    var cell4 = $('#four').text();
    var cell5 = $('#five').text();
    var cell6 = $('#six').text();
    var cell7 = $('#seven').text();
    var cell8 = $('#eight').text();
    var cell9 = $('#nine').text();
    var player1win = 'Player 1 wins! Click the restart button to start a new game.';
    var player2win = 'Player 2 wins! Click the restart button to start a new game.';

    if ((cell1 === 'X' && cell2 === 'X' && cell3 === 'X') || (cell4 === 'X' && cell5 === 'X' && cell6 === 'X') || (cell7 === 'X' && cell8 === 'X' && cell9 === 'X') || (cell1 === 'X' && cell5 === 'X' && cell9 === 'X') || (cell3 === 'X' && cell5 === 'X' && cell7 === 'X') || (cell1 === 'X' && cell4 === 'X' && cell7 === 'X') || (cell2 === 'X' && cell5 === 'X' && cell8 === 'X') || (cell3 === 'X' && cell6 === 'X' && cell9 === 'X')) {
        alert(player1win);
        game.increaseScorePlayer1();
        // reset();
        }else if((cell1 === 'O' && cell2 === 'O' && cell3 === 'O') || (cell4 === 'O' && cell5 === 'O' && cell6 === 'O') || (cell7 === 'O' && cell8 === 'O' && cell9 === 'O') || (cell1 === 'O' && cell5 === 'O' && cell9 === 'O') || (cell3 === 'O' && cell5 === 'O' && cell7 === 'O') || (cell1 === 'O' && cell4 === 'O' && cell7 === 'O') || (cell2 === 'O' && cell5 === 'O' && cell8 === 'O') || (cell3 === 'O' && cell6 === 'O' && cell9 === 'O')){ 
            alert(player2win);
            game.increaseScorePlayer2();
            // reset();
        }else if((cell1 !== "") && (cell2 !== "") && (cell3 !== "") && (cell4 !== "") && (cell5 !== "") && (cell6 !== "") && (cell7 !== "") && (cell8 !== "") && (cell9 !== "")){
            alert('draw game');
        }else{

        }

    }


//restart round, clears board//
var button = document.getElementById ('buttonReset')
var reset = button.addEventListener("click", function () {
    var tds = document.getElementsByTagName('td');
    for(var i = 0; i < tds.length; i++) {
        tds[i].innerHTML = ''
    }
});
    
        
 











