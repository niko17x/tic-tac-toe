
const winCondition = () => {
  const board = gameBoard.board
  const win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null;
}

const winningMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const getWinner = () => {
  const board = gameBoard.board
  winningMoves.forEach(function(combo, index) {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
  })
  return winner;
}
getWinner();

