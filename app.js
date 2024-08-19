let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msgconatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => { //Reset Button
    turn0 = true;
    enableboxes();
    msgconatiner.classList.add("hide");
}

boxes.forEach((box) => {  //Button Working logic
    box.addEventListener("click", () => {
        console.log("Box clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
            box.style.color = "#5f2c82";
        } else {
            box.innerText = "X";
            turn0 = true;
            box.style.color = "#00e7df"
        }
        box.disabled = true;
        checkWinner();
    });

});

const disableboxes = () => { // Button disable function
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => { // Button enable function
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showwinner = (Winner) => { //Winner function
    msg.innerText = `Congratulations, Winner is ${Winner}`
    msgconatiner.classList.remove("hide");
    disableboxes();
}

const checkWinner = () => { //winner logic function
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val)
                showwinner(pos1val);
            }
        }
    }
};


newGame.addEventListener("click", resetgame); //NewGame Button working
reset.addEventListener("click", resetgame);  //Reset Button Game