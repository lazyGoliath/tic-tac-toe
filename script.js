let boxes = document.querySelectorAll(".box");
let turnX = true;    //playerX
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg  =document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");

//2D array
const winningPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("button was clicked");
        if(turnX === false){             //player 0
            box.innerText = "O";
            turnX = true;                //give chance to playerX
        }else{
            box.innerText = "X";
            turnX = false;               //give chance to playerO
        }
        box.disabled = true;         //no repeat clicks
        checkWinner();
    });
});

const disableBoxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove(".hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winningPatterns){
        let pos1Val = boxes.pattern[0].innerText;
        let pos2Val = boxes.pattern[1].innerText;
        let pos3Val = boxes.pattern[2].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Valn);
            }
        }
    }
};

//reset button
const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = true;
        box,innerText = "";
    }
}

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

//triggerred when
resetBtn.addEventListener("click", resetGame);
//starts a new game
newGameBtn.addEventListener("click", resetGame);