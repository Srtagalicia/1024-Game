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
    let randomIndex = Math.floor(Math.randon() * myArray.length);
    return myArray[randomIndex];
}

function addCell() {
    let cellCoordinates = selectRadomValueFromArray(emptyCells);
    let r = cellCoordinates[0];
    let c = cellCoordinates[1];
    board[r][c] = selectRadomValueFromArray([2, 4]);
}

function rotateMatrix(numberofRotations, finalRotation) {

    }
    


function move() {
    for (let i = 0; i < 3; i++) {
        let cellTop = rowTop[j];
        let cellMiddle = rowMiddle[j];
        let cellBottom = rowBottom[j];
        //board[0][j] is equivalent to cellTop
        //board[1][j] is equivalent to cellMiddle
        //board[2][j] is equivalent to cellBottom
            if (cellTop === cellMiddle) {
                cellTop = 0;
                if (cellBottom === 0) {
                    cellBottom = cellMiddle*2;
                    cellMiddle = 0;
                }
                else {
                    cellMiddle = cellMiddle*2;
                }
            }
            else if (cellTop === cellBottom && cellMiddle === 0) {
                cellTop = 0;
                cellBottom = cellBottom*2;
            }
            else if (cellMiddle === cellBottom) {
                cellMiddle = cellTop;
                cellBottom = cellBottom*2;
                cellTop = 0;
            }
    rowBottom[j] = cellBottom;
    rowMiddle[j] = cellMiddle;
    rowTop[j] = cellTop;
        }
}

let columnRight = [];
let columnCenter = [];
let columnLeft = [];
function moveRigth() {
    for (let k = 0; k < 3; k++) {
        let cellRight = columnRight[k];
        let cellCenter = columnCenter[k];
        let cellLeft = columnLeft[k];
        }
}


function printMatrix() { // erase when finish
    console.log(rowTop);
    console.log(rowMiddle);
    console.log(rowBottom);
}