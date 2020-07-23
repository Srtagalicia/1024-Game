$(document).ready(function start() {
    drawBoard();
}

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