let boxes = document.querySelectorAll(".box");
console.log(boxes);
// let resetButton = document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-box");
let message = document.querySelector("#msg");
let player1Score = document.querySelector("#player1-score");
let player2Score = document.querySelector("#player2-score");

let player1ScoreCounter = 0;
let player2ScoreCounter = 0;
let turnOfPlayerX = true;

let winningPatterns = [
  [0, 1, 2],
  [0, 3, 6], 
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

// New Game Function
const playNewGame = () => {
    turnOfPlayerX = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("Box was clicked")
        if(turnOfPlayerX===true){
            box.innerText = "X";
            turnOfPlayerX = false;
        }else{
            box.innerText = "O";
            turnOfPlayerX = true;
        }
        box.disabled = true;
        checkWinner();
    })
})


// Disable Boxes
const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

// Enable Boxes
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


// Score-Tracker
const scores = (winner) => {
    player1Score.innerText = player1ScoreCounter;
    player2Score.innerText = player2ScoreCounter;
}

// Show Winner
const showWinner = (winner) => {
    message.innerText = `${winner} Won`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

// Check Winner 
const checkWinner = () => {
    for(let pattern of winningPatterns){
        // console.log(pattern);
        // console.log(pattern[0], pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText)

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                console.log(pos1Val);
                if(pos1Val=="X"){
                    ++player1ScoreCounter;
                    console.log(player1ScoreCounter);
                }else{
                    ++player2ScoreCounter;
                    console.log(player2ScoreCounter);
                }
               scores(pos1Val);
            }
            // else{
            //     message.innerText = "It's a Draw";
            //     msgContainer.classList.remove("hide");
            //     disabledBoxes();
            // }
        }
    }

}











// resetButton.addEventListener("click",()=>{
//     console.log("Reset Button clicked");
// })




// resetButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", playNewGame);


