$(document).ready(function start() {
    bindKeys();
    //addCell();
    addRandomValues()
    addRandomValues();
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
    console.log(board)
}

function getRandomIndex(myArray){
   return Math.floor(Math.random() * myArray.length)
}

function addRandomValues(){
    let row = getRandomIndex(board);
    let col = getRandomIndex(board);
    if (board[row][col] == 0){
        board[row][col] = 2 
    }
    else {
        addRandomValues();
    }
}

function bindKeys() {
    $('body').on('keydown', function (e){
        switch (e.keyCode) {
            case 38:
                moveUp();
                endMove();
                addRandomValues();
                break;
            case 40:
                moveDown();
                endMove();
                addRandomValues();
                break;
            case 37:
                moveLeft();
                endMove();
                addRandomValues();
                break;
            case 39:
                moveRight();
                endMove();
                addRandomValues();
                break;
            case 82:
                initialiseGame();
                drawBoard();
                break;
        }
    });
}