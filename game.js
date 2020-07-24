$(document).ready(function start() {
    bindKeys();
    addCell();
    drawBoard();
});

function drawBoard() {
    for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
        let selector = `[data-row='${r}'][data-col='${c}']`;
        if (board[r][c] === 0){
            $(selector).attr('class', 'cell').text('');
        }
        else {
            $(selector).attr('class', `cell cell${board[r][c]}`).text(board[r][c]);
        }  
          }
        }
    }

function bindKeys() {
    $('body').on('keydown', function (e){
        switch (e.keyCode) {
            case 38:
                moveUp();
                endMove();
                break;
            case 40:
                moveDown();
                endMove();
                break;
            case 37:
                moveLeft();
                endMove();
                break;
            case 39:
                moveRight();
                endMove();
                break;
            case 82:
                initialiseGame();
                drawBoard();
                break;
        }
    });
}