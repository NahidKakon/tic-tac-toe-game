import React, { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)); // Game board state
  const [isXNext, setIsXNext] = useState(true); // Track current player
  const winner = calculateWinner(board); // Check for winner

  const handleClick = (index) => {
    // If the square is already filled or the game is won, return
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O"; // Set X or O
    setBoard(newBoard);
    setIsXNext(!isXNext); // Switch turn
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null)); // Reset the board
    setIsXNext(true); // Reset to X's turn
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
      {winner ? <p className="winner">Winner: {winner}</p> : null}
      {!winner && board.every((square) => square) && (
        <p className="winner">It's a draw!</p>
      )}
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

// Helper function to calculate the winner
function calculateWinner(board) {
  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal
    [2, 4, 6], // Reverse diagonal
  ];

  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Return "X" or "O" as the winner
    }
  }

  return null; // No winner yet
}

export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
