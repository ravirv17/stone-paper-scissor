let yourPoint=document.querySelector("#you-points");
let computerPoint=document.querySelector("#com-points");
let stoneBtn=document.querySelector("#stone");
let paperBtn=document.querySelector("#paper");
let scissorBtn=document.querySelector("#scissor");
let winner=document.querySelector(".winner h2");
let playAgain=document.querySelector("#again");

function getRandomValue(){
    return Math.floor(Math.random()*3);
}
stoneBtn.addEventListener("click",()=>{
    let randomValue=getRandomValue();
    if (randomValue == 1) {
        computerPoint.innerText = parseInt(computerPoint.innerText) + 1;
    } else if (randomValue == 2) {
        yourPoint.innerText = parseInt(yourPoint.innerText) + 1;
    }
    checkWinner();
})
paperBtn.addEventListener("click",()=>{
    let randomValue=getRandomValue();
    if (randomValue == 2) {
        computerPoint.innerText = parseInt(computerPoint.innerText) + 1;
    } else if (randomValue == 0) {
        yourPoint.innerText = parseInt(yourPoint.innerText) + 1;
    }
    checkWinner();
})
scissorBtn.addEventListener("click",()=>{
    let randomValue=getRandomValue();
    if (randomValue == 0) {
        computerPoint.innerText = parseInt(computerPoint.innerText) + 1;
    } else if (randomValue == 1) {
        yourPoint.innerText = parseInt(yourPoint.innerText) + 1;
    }
    checkWinner();
})
function checkWinner() {
    if (parseInt(yourPoint.innerText) == 5) {
        winner.innerText = "You Win";
        document.querySelector(".winner").classList.remove("hide");
    } else if (parseInt(computerPoint.innerText) == 5) {
        winner.innerText = "You Lose!";
        document.querySelector(".winner").classList.remove("hide");
    }
}

playAgain.addEventListener("click",()=>{
    yourPoint.innerText = 0;
    computerPoint.innerText = 0;
    document.querySelector(".winner").classList.add("hide");
})
