let board = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0], 
];

let temporaryBoard = [];
let emptyCells = [];
let gameOver = false;

function initialiseGame() {  
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    temporaryBoard = [];
    gameOver = false;
    readEmptyCells();
    addCell();
    readEmptyCells();
    addCell();
}

function readEmptyCells() {
    emptyCells = [];
    for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[r][c] === 0) {
        emptyCells.push([r, c]);
      }
    }
  }
  if (emptyCells.length === 0) {
    gameOver = true;
  }
}

function selectRadomValueFromArray(myArray) {
    let randomIndex = Math.floor(Math.random() * myArray.length);
    return myArray[randomIndex];
}

function addCell() {
    let cellCoordinates = selectRadomValueFromArray(emptyCells);
    let r = cellCoordinates[0];
    let c = cellCoordinates[1];
    board[r][c] = selectRadomValueFromArray([2, 4]);
}

function rotateMatrix(numberofRotations, finalRotation) {
    let tempMatrix = [];
    if (finalRotation) {
      tempMatrix = [...temporaryBoard];
    } 
    else {
        tempMatrix = [...board];
    }
    let n = tempMatrix.length;
    for (let rotation = 0; rotation < numberOfRotations; rotation++) {
      for (let i = 0; i < n / 2; i++) {
        for (let j = i; j < n - i - 1; j++) {
          let tmp = tempMatrix[i][j];
          tempMatrix[i][j] = tempMatrix[n - j - 1][i];
          tempMatrix[n - j - 1][i] = tempMatrix[n - i - 1][n - j - 1];
          tempMatrix[n - i - 1][n - j - 1] = tempMatrix[j][n - i - 1];
          tempMatrix[j][n - i - 1] = tmp;
        }
      }
    }
    if (finalRotation) {
      board = [...tempMatrix];
    } 
    else {
      temporaryBoard = [...tempMatrix];
    }
}
function moveColumn(a, b, c) {
    if (b === c) {
      c = c * 2;
      b = 0
    } 
    else if (b !== 0 && c == 0) {
      c = b;
      b = 0;
    }
  
    if (a === b) {
      b = b * 2;
      a = 0;
    } 
    else if (a !== 0 && b === 0) {
      if (c === 0) {
        c = a;
        a = 0;
      } 
      else if (c === a) {
        c = c * 2;
        a = 0;
      } 
      else {
        b = a;
        a = 0;
      }
    }
    return [a, b, c];
  }

  function move() {
    for (let i = 0; i < 3; i++) {
      let ordered = moveColumn(temporaryBoard[0][i], temporaryBoard[1][i], temporaryBoard[2][i]);
      temporaryBoard[0][i] = ordered[0];
      temporaryBoard[1][i] = ordered[1];
      temporaryBoard[2][i] = ordered[2];
    }
  }
  
  function moveUp() {
    rotateMatrix(2, false); 
    move(); 
    rotateMatrix(2, true); 
  }
  
  function moveRight() {
    rotateMatrix(1, false);  
    move(); 
    rotateMatrix(3, true);
  }
  
  function moveDown() {
    temporaryBoard = [...board]
    console.log(board, temporaryBoard);
    move();
    board = [...temporaryBoard]
  }
  
  function moveLeft() {
    rotateMatrix(3, false); 
    move(); 
    rotateMatrix(1, true);
  }
  
  function endMove() {
    readEmptyCells();
    addCell();
    drawBoard();
  }