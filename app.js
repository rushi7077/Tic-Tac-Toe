let boxes=document.querySelectorAll(".btn");
let reset =document.querySelector(".reset");
let newGame=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let container=document.querySelector(".msg-container")

let turn0=true;


const winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click" ,() =>{
        if(turn0===true){
            box.classList.add("circle");
            box.textContent="o";
            turn0=false;
        }
        else{
            box.classList.add("nonCircle");
            box.textContent="x";
            turn0=true;
            
        }
        box.disabled=true;

        checkWinner();
    })
})
const winner =(va) =>{
    msg.innerText=`Congratulations, Winner is ${va}` ;
    container.classList.remove("hide");
    disableBtn();
}

const gameRestart=() =>{
    turn0=true;
    enableBtn();
    container.classList.add("hide");

    
}
const disableBtn= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
    
}
const enableBtn= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("circle");
        box.classList.remove("nonCircle");
    }
    
}
const checkWinner = () =>{
    for(let pattern of winningPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!== "" && pos2!== "" && pos3!==""){
        if(pos1===pos2 && pos2===pos3){
            winner(pos1);
        }
    }

    }
}

reset.addEventListener("click",gameRestart);

newGame.addEventListener("click",gameRestart);