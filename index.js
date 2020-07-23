let board = [
    [0, 2, 0], //rowTop is index 0 of board. rowTop column 1 is board[0][0]
    [0, 4, 0], //rowMiddle is index 1. The third column would be board[1][2]
    [0, 0, 0], //rowBottom is index 2
  ];

// let rowTop = [0, 0, 0];
// let rowMiddle = [0, 0, 0];
// let rowBottom = [0, 0, 0];

function init() {    
    rowBottom[0] = 2; 
    rowMiddle[0] = 2;

function moveDown() {
    for (let j = 0; j < 3; j++) {
        let cellTop = rowTop[j];
        let cellMiddle = rowMiddle[j];
        let cellBottom = rowBottom[j];
        
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



function printMatrix() { 
    console.log(rowTop);
    console.log(rowMiddle);
    console.log(rowBottom);
