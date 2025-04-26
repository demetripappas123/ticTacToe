let gameboard = (function(){
    const rows = 3;
    const cols = 3;
    let boardArr = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ];
    return {boardArr, rows, cols};
})();

let player1 = function(board,row,col){
    console.log("p1 running");
    board[row][col] = player1Mode;
    console.log(board[row][col]);
}

let player2 = function(board,row,col){
    console.log("p2 running");
    board[row][col] = player2Mode;
    console.log(board[row][col]);
}

let gameplay = function(){
    player1Mode = "X";
    player2Mode = "O";
    const board = gameboard.boardArr;

    let gameOver = 0;
    let winner = " ";
    let flag = 0;

    const check = function (){

        for(let i = 0; i < gameboard.rows; i++){
            for(let j = 0; j < gameboard.cols; j++){
                if(board[i][j] == "-"){
                    flag = 1;
                }
            }
        }

        for(let i = 0; i < 3; i++){
            if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != "-"){
                gameOver = 1;
                winner = board[i][0];
            }
        }

        for(let i = 0; i < 3; i++){
            if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != "-"){
                gameOver = 1;
                winner = board[0][i];
            }
        }
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== "-") {
            gameOver = 1;
            winner = board[0][0];
        }
    
    
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== "-") {
            gameOver = 1;
            winner = board[0][2];
        }
    
        if (flag === 0 && winner === " ") {
            gameOver = 1;
            winner = "draw";
        }
    
        return { gameOver, winner };
    }


    while(gameOver == 0){
        if(player1Mode == "X"){
            
        }
        let [p1r,p1c] = (prompt("Enter player 1 square (row,col): ")).split(",").map(Number);
        while(board[p1r][p1c] != "-"){
            [p1r, p1c] = (prompt("Square taken, try again: ")).split(",").map(Number);
        }
        player1(board, p1r, p1c);

        let checked = check();
        console.log(board);
        gameOver = checked.gameOver;
        console.log(gameOver);
        if(gameOver){
            break;
        }
        
        let [p2r, p2c] = (prompt("Enter player 2 square (row, col): ")).split(",").map(Number);
        while(board[p2r][p2c] != "-"){
            [p2r, p2c] = (prompt("Square taken, try again: ")).split(",").map(Number);
        }
        player2(board, p2r, p2c);
    }    

    alert(winner + "won");
    return {winner};
}

const display = function (){
    const container = document.getElementById("container");
    const selector = 
}