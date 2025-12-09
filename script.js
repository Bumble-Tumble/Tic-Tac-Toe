 // creates the gameboard
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
  // future use for displaying the board with the ui
  const getBoard = () => board;

  // lets player choosen a cell on the board and drop a token there 
  // if the cell is already asigned to the player stops the function
  const dropToken = (row, column, player) => {
	  const chosenCell = board[row][column];
	  if (chosenCell.getValue() !== 0){return;}
	  board[row][column].addToken(player);
  }
  // prints the gameboard to the console
  const printBoard = () => {
	  const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
	  console.log(boardWithCellValues);
  }
  return {getBoard, dropToken, printBoard};
}
// set default value on all cells to 0 and allows them to change based on which player assigned the token
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

function gameController(playerOne = "Player One", playerTwo = "Player Two"){
	const board = gameBoard();	

	const players = [{name:playerOne,
					token:1},{
					name:playerTwo,
					token:2}];
					
	let activePlayer = players[0];

	const switchPlayer = () => {
	activePlayer = activePlayer === players[0] ? players[1] : players[0];
	}
	const getActivePlayer = () => activePlayer;

	const printNewRound = () => {
		board.printBoard();
		console.log(`${getActivePlayer().name}'s turn.`);
	}

	const playRound = (row, column) => {
		console.log(`dropping ${getActivePlayer(),name}'s token into ${column}...`);
		board.dropToken(row, column, getActivePlayer().token);

		switchPlayer();
		printNewRound();
	}
	printNewRound();

	return {
		playRound,
		getActivePlayer
	}
}

const game = gameController();