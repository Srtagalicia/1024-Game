$(document).ready(function start() {
    drawBoard();
    readEmptyCells();
    addCell();
    drawBoard();
})

function drawBoard() {
    for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
        let selector = `[data-row='${r}'][data-col='${c}']`;
        if (board[r][c] === 0){
            $(selector).attr('class', 'cell').text('');
        }
        else {
            $(selector).addClass(`cell${board[r][c]}`).text(board[r][c]);
        }  
          }
        }
      }

function bindKeys() {
    $('body').on('keydown', function (e){
        switch (e.keyCode) {
            case 38:
                moveUp();
                addCell();
                drawBoard();
                break;
            case 40:
                moveDown();
                addCell();
                drawBoard();
                break;
            case 37:
                moveLeft();
                addCell();
                drawBoard();
                break;
            case 39:
                moveRight();
                addCell();
                drawBoard();
                break;
            case 82:
                initialiseGame();
                drawBoard();
                break;
        }
    });
}