// Restart Game Button
let restart = document.querySelector('#restart');
let squares = document.querySelectorAll("td");
let currentPlayer = 'X';

function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
        squares[i].style.color = '';
        }
    }

function checkGameStatus() {
  //Access the individual content of each cell in the table (let squares = all html elements with tag "td"); 2D array
  let board = [
    [squares[0].textContent, squares[1].textContent, squares[2].textContent],
    [squares[3].textContent, squares[4].textContent, squares[5].textContent],
    [squares[6].textContent, squares[7].textContent, squares[8].textContent]
            ];

//The board is a 2D array [i][0] - row; [0][i] - column:
//let board = [
//    ['[0][0]', '[0][1]', '[0][2]'],
//    ['[1][0]', '[1][1]', '[1][2]'],
//    ['[2][0]', '[2][1]', '[2][2]']
//];

// Checking rows, columns, and diagonals & alert for the winner & reset the board
for (let i = 0; i < 3; i++) {
    //Checking for wins in the row
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
    alert(`Player ${board[i][0]} wins!`);//Using '${}' - template literal syntax - ECMAScript 6(ES6) of JavaScript
    playWinnerAudio();
    clearBoard(); // Reset the board after a win
    return;
    }

    //Checking the column
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
    alert(`Player ${board[0][i]} wins!`);
    playWinnerAudio();
    clearBoard(); // Reset the board after a win
    return;
    }
}

    //Checking the diagonal - top left to bottom right
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
    alert(`Player ${board[0][0]} wins!`);
    playWinnerAudio();
    clearBoard(); // Reset the board after a win
    return;
}

    //Checking the diagonal - top right to bottom left
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
     alert(`Player ${board[0][2]} wins!`);
     playWinnerAudio();
     clearBoard(); // Reset the board after a win
     return;
}

    if (checkTie()) {
    alert("It's a tie!");
    playTieAudio();
    clearBoard(); // Reset the board after a tie
}
    // Ternary operator - if the condition is true (currentPlayer ==='X'), then set the currentPlayer to 'O'; otherwise, set it to 'X'."
    //Commonly used to toggle b/n 2 players in a game, switching the current player from 'X' to 'O' or vice versa.
     currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'; // Switch player
     }

function checkTie() {
// Check if all squares are filled; if true - all squares are filled & there is no winner = > a tie; if false - the game is ongoing
//Array.from(squares): Converts the NodeList of HTML elements with the class squares into an array.
//.every(square => square.textContent !== ''): The every method checks a condition for every element in the array.
//The condition is square.textContent !== ''  checks if the text content of each square is not an empty string.
 return Array.from(squares).every(square => square.textContent !== '');
 }

function handleMove() {
    if (this.textContent === '') {
      this.textContent = currentPlayer;
      this.style.color = (currentPlayer === 'X') ? 'blue' : 'red';//? 'blue' : 'red' - ternary operator itself. If the condition is true (currentPlayer === 'X'), the value before the : (colon) is used; otherwise, the value after the : is used.

 // Play audio based on the current player's move
        if (currentPlayer === 'X') {
            playXAudio();
        } else {
            playOAudio();
        }


    // Use setTimeout to delay checkGameStatus after rendering
    // => { checkGameStatus();} - arrow function that wraps the call to the checkGameStatus function
    //0 - milliseconds
    setTimeout(() => {
     checkGameStatus();
     }, 300);
     }
}

restart.addEventListener('click', clearBoard);

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', handleMove);
}
//
function playWinnerAudio() {
    // Get the audio element
    let winnerAudio = document.getElementById('winnerAudio');
    // Play the audio
    winnerAudio.play();
}

function playTieAudio() {
    // Get the audio element
    let winnerAudio = document.getElementById('tieAudio');
    // Play the audio
    tieAudio.play();
}

function playXAudio() {
    // Get the audio element
    let xAudio = document.getElementById('xPlayer');
    // Play the audio
    xAudio.play();
}

function playOAudio() {
    // Get the audio element
    let oAudio = document.getElementById('oPlayer');
    // Play the audio
    oAudio.play();
}



//Random change of color of the heading
// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
let header = document.querySelector("h1")

function getRandomColor(){
  const letters = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

setInterval("changeHeaderColor()",600);
