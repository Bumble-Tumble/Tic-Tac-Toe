 const game = gameBoard();
 game.printBoard();

 function gameBoard() {
  const row = 3;
  const column = 3;
  const board = [];
	
  for (let i = 0; i < row; i++){
	  board[i] = [];
	  for (let j = 0; j < column; j++){
	  board[i].push(Cell());
	  }
  }

  const getBoard = () => board;

  const dropToken = (row, column, player) => {
	  const chosenCell = board[row][column];
	  if (chosenCell.getValue() !== 0){return;}
	  board[row][column].addToken(player);
  }
  const printBoard = () => {
	  const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
	  console.log(boardWithCellValues);
  }
  return {getBoard, dropToken, printBoard};
}

function Cell() {
	let value = 0;
	const addToken = (player) => {
		value = player;
	}
	const getValue = () => value;
	return {
		addToken,
		getValue
	}
}


