let rowTop = [0, 0, 0];
let rowMiddle = [0, 0, 0];
let rowBottom = [0, 0, 0];

function init () {    
    rowBottom[0] = 2;
    rowMiddle[0] = 2;
}
function moveUp() {
    for (let i = 0; i < 3; i++) {
        let cellBottom = rowBottom[i];
        let cellMiddle = rowMiddle[i];
        let cellTop = rowTop[i];
            if (cellBottom === cellMiddle) {
                cellBottom = 0;
                if (cellTop === 0) {
                    cellTop = cellMiddle*2;
                    cellMiddle = 0;
                }
                else {
                    cellMiddle = cellMiddle*2;
                }
            }
            else if (cellBottom === cellTop && cellMiddle === 0) {
                cellBottom = 0;
                cellTop = cellTop*2;
            }
            else if (cellMiddle === cellTop) {
                cellMiddle = cellBottom;
                cellTop = cellTop*2;
                cellBottom = 0;
            }
    rowBottom[i] = cellBottom;
    rowMiddle[i] = cellMiddle;
    rowTop[i] = cellTop;
        }
}
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

}
