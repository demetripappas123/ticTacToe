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

    let mode = player1Mode;

    const boxButtons = display();

   
    boxButtons.array.forEach(element => {
        element.addEventListener("click",(event)=>{
            const button = event.currentTarget;
            
            if(button.textContent !== "-"){
                alert("spot's taken bub");
                return;
            }
            button.textContent = mode;
            let [theRow, theColumn] = button.id.split(" ").map(Number);

            if(mode === player1Mode){
                player1(board,theRow, theColumn);
            }
            else{
                player2(board,theRow,theColumn);
            }
            mode = (mode === player1Mode)? player2Mode:player1Mode;
            const checked = check();
            gameOver = checked.gameOver;
            winner = checked.winner;
            if(gameOver){
                alert(winner + 'won');
                return;
            }

        });
    }); 
   
    return {winner};
}

const display = function () {
    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateRows = "repeat(3, 100px)";
    container.style.gridTemplateColumns = "repeat(3, 100px)";
    container.style.gap = "5px";
    document.body.appendChild(container);

    let index = 0;
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            let button = document.createElement("button");
            button.setAttribute("class", "box");
            button.setAttribute("id", `${row} ${column}`);
            button.textContent = "-";
            container.appendChild(button);
            index++;
        }
    }

    const boxButtons = container.querySelectorAll(".box");
    console.log("display Ran");
    return { array: boxButtons };
};

gameplay();
