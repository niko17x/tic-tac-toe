
let playGame = true;
let currentPlayer = 'X';
const X_CLASS = 'X';
const O_CLASS = 'O';

const tiles = document.querySelectorAll('[data-cell]');
const resetButton = document.getElementById('reset');
const display = document.querySelector('.display');
const container = document.querySelector('.container');






const gameBoard = (() => {
  let board = ["","","","","","","","","",];

  const updateBoard = (index) => {
    gameBoard.board[index] = currentPlayer;
  };

  return {
    board,
    updateBoard,
  };
})();

// Assigning index pos. to each tile:
const indexTiles = (() => {
  for (let i=0; i<tiles.length; i++) {
    tiles[i].setAttribute('id', i);
  };
})();




const swapTurns = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  display.innerText = `Player ${currentPlayer}'s turn`
};



const resetBoard = (() => {
  resetButton.addEventListener('click', () => {
    playGame = true;
    currentPlayer = 'X';
    gameBoard.board = ["","","","","","","","","",];

    tiles.forEach((tile) => {
      tile.innerText = "";
      tile.classList = "tile";
    });

    display.innerText = `Player ${currentPlayer}'s turn`;

    container.classList.remove('x-wins');
    container.classList.remove('o-wins');
  });
})();


const markBoard = (() => {
  tiles.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      if (e.target.innerText === "" && playGame === true) {
        cell.innerText = currentPlayer;
        cell.classList.add(currentPlayer); // Add the class list marker.
        gameBoard.updateBoard(e.target.id);
        
        if (getWinner(currentPlayer)) { // If there is a winning condition...
          console.log('winner')
          display.innerText = (`${currentPlayer} is the winner!`)
          if (currentPlayer === 'X') {
            container.classList.add('x-wins');
          } else { container.classList.add('o-wins') };
        } else if (isDraw()) { // If winning condition is never found, then the game is a draw.
          console.log('tie');
        }
        
        swapTurns();
      };
    });
  });
})();





const winCondition = (() => {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  return { wins };
})();


const getWinner = (currentPlayer) => {
  return winCondition.wins.some(combination => {
    return combination.every(index => {
      return tiles[index].classList.contains(currentPlayer);
    })
  })
};

// Test every element in the board tile and check if they all contain an X or an O:
const isDraw = () => {
  return [...tiles].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
  })
}


